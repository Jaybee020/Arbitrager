require("dotenv").config();
const common = require("./utils.js");
const { Queue, Worker, QueueEvents } = require("bullmq");
const IRouter = require("@uniswap/v2-periphery/build/IUniswapV2Router02.json");
const IERC20 = require("@uniswap/v2-core/build/IERC20.json");
const { ethers, Contract, Wallet, providers, BigNumber } = require("ethers");
const {
  factoryAbi,
  routerABI,
  pairABI,
  quoterAbi,
  arbitragerAbi,
} = require("./kyberFactory.js");
const { formatEther, parseEther, formatUnits } = require("ethers/lib/utils.js");
const { parse } = require("dotenv");

const arbitrageQueue = new Queue("Arbitrage");
const arbitrageEvent = new QueueEvents("Arbitrage");
arbitrageEvent.on("completed", ({ jobId }) => {
  console.log("done arbitraging");
});

arbitrageEvent.on("failed", ({ jobId, failedReason }) => {
  console.error("error arbitraging", failedReason);
});

const arbitrageWorker = new Worker("Arbitrage", async (job) => {
  await daiAllowance();
  await wethAllowance();
  console.log(`New block received. Block # ${job.data.blockNumber}`);
  const AMOUNT_DAI = String(process.env.AMOUNT_DAI);
  const MIN_PROFIT = Number(process.env.MIN_PROFIT);
  const AMOUNT_DAI_WEI = parseEther(AMOUNT_DAI);
  const RECENT_ETH_PRICE_FROM_BINANCE = Math.round(
    await common.retrieveLatestEthPrice()
  ); // Pull the latest eth price using the Binance API

  const [WethfromMesh, WethfromSushi] = await Promise.all([
    //amount of eth you will get from DAI swap to eth on mesh
    EthOutFromDAIMesh(AMOUNT_DAI, [DAIAddress, WETHAddress]),
    //amount of eth you will get from DAI swap to eth on sushi
    EthOutFromDAISushi(AMOUNT_DAI, [DAIAddress, WETHAddress]),
  ]);

  const [DAIfromSushi, DAIfromMesh] = await Promise.all([
    //amount of dai you will get from selling mesh weth on sushi
    DAIOutFromETHSushi(WethfromMesh, [DAIAddress, WETHAddress]),
    //amount of dai you will get from selling sushi eth on mesh
    DAIOutFromETHMesh(WethfromSushi, [DAIAddress, WETHAddress]),
  ]);

  console.log(WethfromMesh, WethfromSushi, DAIfromMesh, DAIfromSushi);

  console.log(
    `MeshSwap -> Sushi. Dai input / output:${
      Number(AMOUNT_DAI) / Number(DAIfromSushi)
    }`
  );
  console.log(
    `Sushiswap -> MeshSwap. Dai input / output:${
      Number(AMOUNT_DAI) / Number(DAIfromMesh)
    }`
  );

  //Meshswap to sushiswap
  if (Number(DAIfromSushi) > Number(AMOUNT_DAI)) {
    console.log("Exploring Arbitage Opportunity from Meshswap to Sushiswap");
    const [gasPrice, gasCost] = await Promise.all([
      provider.getGasPrice(),
      arbitragerContract.estimateGas.initiateSwap(
        AMOUNT_DAI_WEI,
        DIRECTION.MeshswapToSushiswap
      ),
    ]);
    const txCost =
      Number(formatEther(gasCost.mul(gasPrice))) *
      RECENT_ETH_PRICE_FROM_BINANCE;
    console.log(`Estimated txCost is ${txCost}`);
    const profit = Number(DAIfromSushi) - Number(AMOUNT_DAI) - txCost;
    if (profit > MIN_PROFIT) {
      console.log("Arb opportunity found MeshSwap -> Sushiswap");
      console.log("Expected Profit :", profit);
      const tx = await arbitragerContract.initiateSwap(
        AMOUNT_DAI_WEI,
        DIRECTION.MeshswapToSushiswap,
        {
          maxFeePerGas: gastoUse,
          maxPriorityFeePerGas: gastoUse,
        }
      );
      const recepit = await tx.wait();
      console.log(`Trasnaction hash:${await recepit.transactionHash}`);
    }
  }

  //Sushiswap to Meshswap
  else if (Number(DAIfromMesh) > Number(AMOUNT_DAI)) {
    console.log("Exploring Arbitage Opportunity from Sushiswap to Meshiswap");

    const [gasPrice, gasCost] = await Promise.all([
      provider.getGasPrice(),
      arbitragerContract.estimateGas.initiateSwap(
        AMOUNT_DAI_WEI,
        DIRECTION.SushiswapToMeshswap
      ),
    ]);
    console.log("Got gas");

    const txCost =
      Number(formatEther(gasCost.mul(gasPrice))) *
      RECENT_ETH_PRICE_FROM_BINANCE;
    console.log(`Estimated txCost is ${txCost}`);
    const profit = Number(DAIfromMesh) - Number(AMOUNT_DAI) - txCost;
    if (profit > MIN_PROFIT) {
      console.log("Arb opportunity found Sushiswap -> Meshswap");
      console.log("Expected Profit :", profit);
      const tx = await arbitragerContract.initiateSwap(
        AMOUNT_DAI_WEI,
        DIRECTION.SushiswapToMeshswap,
        {
          maxFeePerGas: gastoUse,
          maxPriorityFeePerGas: gastoUse,
        }
      );
      const recepit = await tx.wait();
      console.log(`Transaction hash:${await recepit.transactionHash}`);
    }
  }
});

function getProvider(networkUrl) {
  return new providers.JsonRpcProvider(networkUrl);
}

function getWallet(networkUrl, PRIVATE_KEY) {
  const provider = getProvider(networkUrl);
  return new Wallet(PRIVATE_KEY, provider);
}

const providerUrl = String(process.env.PROVIDER_URL);
const privateKey = String(process.env.PRIVATE_KEY);

const SushiswapFactoryAddr = "0xc35DADB65012eC5796536bD9864eD8773aBc74C4"; //sushiswap factory address on polygon
const SushiswapRouterAddr = "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506"; //sushiwswap router address on polygon

const meshSwapFactoryAddr = "0x9f3044f7f9fc8bc9ed615d54845b4577b833282d"; //polyat factory address on polygon
const meshSwapRouterAddr = "0x10f4a785f458bc144e3706575924889954946639"; //polycat router on polygon

const WETHAddress = "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"; //WETH address on polygon
const DAIAddress = "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"; //DAI address on polygon

const provider = getProvider(providerUrl);
const wallet = getWallet(providerUrl, privateKey);

// //create new instances of the token contracts
const WETH = new Contract(WETHAddress, IERC20.abi, wallet);
const DAI = new Contract(DAIAddress, IERC20.abi, wallet);

const sushiswapRouter = new Contract(
  SushiswapRouterAddr,
  IRouter.abi,
  provider
);

const meshSwapRouter = new Contract(meshSwapRouterAddr, IRouter.abi, provider);

let contractAddr = "0xB60d116540943C2718095937965fA086eEC029A4";

const arbitragerContract = new Contract(
  contractAddr, //contract addr
  arbitragerAbi,
  wallet
);

const gastoUse = 70e9;
const DIRECTION = {
  MeshswapToSushiswap: 0, // -> Buy ETH on Kyber, Sell it on Uniswap
  SushiswapToMeshswap: 1, // -> But ETH on Uniswap, Sell in on Kyber
};

async function EthOutFromDAISushi(amountIn, addresses) {
  const data = await sushiswapRouter.getAmountsOut(
    parseEther(amountIn.toString()),
    addresses,
    {
      maxFeePerGas: gastoUse,
      maxPriorityFeePerGas: gastoUse,
    }
  );
  const expectedEth = data.map((val) => formatEther(val));
  return expectedEth[1];
}

async function DAIOutFromETHSushi(amountIn, addresses) {
  const data = await sushiswapRouter.getAmountsIn(
    parseEther(amountIn.toString()),
    addresses,
    {
      maxFeePerGas: gastoUse,
      maxPriorityFeePerGas: gastoUse,
    }
  );
  const expectedEth = data.map((val) => formatEther(val));
  return expectedEth[0];
}

async function EthOutFromDAIMesh(amountIn, addresses) {
  const data = await meshSwapRouter.getAmountsOut(
    parseEther(amountIn.toString()),
    addresses,
    {
      maxFeePerGas: gastoUse,
      maxPriorityFeePerGas: gastoUse,
    }
  );
  const expectedEth = data.map((val) => formatEther(val));
  return expectedEth[1];
}

async function DAIOutFromETHMesh(amountIn, addresses) {
  const data = await meshSwapRouter.getAmountsIn(
    parseEther(amountIn.toString()),
    addresses,
    {
      maxFeePerGas: gastoUse,
      maxPriorityFeePerGas: gastoUse,
    }
  );
  const expectedEth = data.map((val) => formatEther(val));
  return expectedEth[0];
}

async function wethAllowance() {
  await WETH.approve(contractAddr, parseEther("100000000"), {
    maxFeePerGas: gastoUse,
    maxPriorityFeePerGas: gastoUse,
  });
}

async function daiAllowance() {
  await DAI.approve(contractAddr, parseEther("10000000"), {
    maxFeePerGas: gastoUse,
    maxPriorityFeePerGas: gastoUse,
  });
}

// (async () => {
//   //   await daiAllowance();
//   //   await wethAllowance();
// })();

provider.on("block", async (blockNumber) => {
  arbitrageQueue.add("arbitrage", { blockNumber: blockNumber });
});
