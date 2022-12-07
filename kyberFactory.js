const factoryAbi = [
  {
    inputs: [
      { internalType: "uint32", name: "_vestingPeriod", type: "uint32" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldConfigMaster",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newConfigMaster",
        type: "address",
      },
    ],
    name: "ConfigMasterUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "feeTo",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint24",
        name: "governmentFeeUnits",
        type: "uint24",
      },
    ],
    name: "FeeConfigurationUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_nftManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "added",
        type: "bool",
      },
    ],
    name: "NFTManagerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_nftManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "removed",
        type: "bool",
      },
    ],
    name: "NFTManagerRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint24",
        name: "swapFeeUnits",
        type: "uint24",
      },
      {
        indexed: false,
        internalType: "int24",
        name: "tickDistance",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "PoolCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint24",
        name: "swapFeeUnits",
        type: "uint24",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickDistance",
        type: "int24",
      },
    ],
    name: "SwapFeeEnabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "vestingPeriod",
        type: "uint32",
      },
    ],
    name: "VestingPeriodUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "WhitelistDisabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "WhitelistEnabled",
    type: "event",
  },
  {
    inputs: [{ internalType: "address", name: "_nftManager", type: "address" }],
    name: "addNFTManager",
    outputs: [{ internalType: "bool", name: "added", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "configMaster",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenA", type: "address" },
      { internalType: "address", name: "tokenB", type: "address" },
      { internalType: "uint24", name: "swapFeeUnits", type: "uint24" },
    ],
    name: "createPool",
    outputs: [{ internalType: "address", name: "pool", type: "address" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "disableWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint24", name: "swapFeeUnits", type: "uint24" },
      { internalType: "int24", name: "tickDistance", type: "int24" },
    ],
    name: "enableSwapFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "enableWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint24", name: "", type: "uint24" }],
    name: "feeAmountTickDistance",
    outputs: [{ internalType: "int24", name: "", type: "int24" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeConfiguration",
    outputs: [
      { internalType: "address", name: "_feeTo", type: "address" },
      {
        internalType: "uint24",
        name: "_governmentFeeUnits",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCreationCode",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCreationCodeContracts",
    outputs: [
      { internalType: "address", name: "contractA", type: "address" },
      { internalType: "address", name: "contractB", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint24", name: "", type: "uint24" },
    ],
    name: "getPool",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWhitelistedNFTManagers",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "sender", type: "address" }],
    name: "isWhitelistedNFTManager",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "parameters",
    outputs: [
      { internalType: "address", name: "factory", type: "address" },
      { internalType: "address", name: "token0", type: "address" },
      { internalType: "address", name: "token1", type: "address" },
      { internalType: "uint24", name: "swapFeeUnits", type: "uint24" },
      { internalType: "int24", name: "tickDistance", type: "int24" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolInitHash",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_nftManager", type: "address" }],
    name: "removeNFTManager",
    outputs: [{ internalType: "bool", name: "removed", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_configMaster", type: "address" },
    ],
    name: "updateConfigMaster",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_feeTo", type: "address" },
      {
        internalType: "uint24",
        name: "_governmentFeeUnits",
        type: "uint24",
      },
    ],
    name: "updateFeeConfiguration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint32", name: "_vestingPeriod", type: "uint32" },
    ],
    name: "updateVestingPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vestingPeriod",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "whitelistDisabled",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
];

const routerABI = [
  {
    inputs: [
      { internalType: "address", name: "_factory", type: "address" },
      { internalType: "address", name: "_WETH", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WETH",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes[]", name: "data", type: "bytes[]" }],
    name: "multicall",
    outputs: [{ internalType: "bytes[]", name: "results", type: "bytes[]" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "refundEth",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "int256", name: "deltaQty0", type: "int256" },
      { internalType: "int256", name: "deltaQty1", type: "int256" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "swapCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "bytes", name: "path", type: "bytes" },
          { internalType: "address", name: "recipient", type: "address" },
          { internalType: "uint256", name: "deadline", type: "uint256" },
          { internalType: "uint256", name: "amountIn", type: "uint256" },
          { internalType: "uint256", name: "minAmountOut", type: "uint256" },
        ],
        internalType: "struct IRouter.ExactInputParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "swapExactInput",
    outputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "tokenIn", type: "address" },
          { internalType: "address", name: "tokenOut", type: "address" },
          { internalType: "uint24", name: "fee", type: "uint24" },
          { internalType: "address", name: "recipient", type: "address" },
          { internalType: "uint256", name: "deadline", type: "uint256" },
          { internalType: "uint256", name: "amountIn", type: "uint256" },
          { internalType: "uint256", name: "minAmountOut", type: "uint256" },
          { internalType: "uint160", name: "limitSqrtP", type: "uint160" },
        ],
        internalType: "struct IRouter.ExactInputSingleParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "swapExactInputSingle",
    outputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "bytes", name: "path", type: "bytes" },
          { internalType: "address", name: "recipient", type: "address" },
          { internalType: "uint256", name: "deadline", type: "uint256" },
          { internalType: "uint256", name: "amountOut", type: "uint256" },
          { internalType: "uint256", name: "maxAmountIn", type: "uint256" },
        ],
        internalType: "struct IRouter.ExactOutputParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "swapExactOutput",
    outputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "tokenIn", type: "address" },
          { internalType: "address", name: "tokenOut", type: "address" },
          { internalType: "uint24", name: "fee", type: "uint24" },
          { internalType: "address", name: "recipient", type: "address" },
          { internalType: "uint256", name: "deadline", type: "uint256" },
          { internalType: "uint256", name: "amountOut", type: "uint256" },
          { internalType: "uint256", name: "maxAmountIn", type: "uint256" },
          { internalType: "uint160", name: "limitSqrtP", type: "uint160" },
        ],
        internalType: "struct IRouter.ExactOutputSingleParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "swapExactOutputSingle",
    outputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "minAmount", type: "uint256" },
      { internalType: "address", name: "recipient", type: "address" },
    ],
    name: "transferAllTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "minAmount", type: "uint256" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "feeUnits", type: "uint256" },
      { internalType: "address", name: "feeRecipient", type: "address" },
    ],
    name: "transferAllTokensWithFee",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "minAmount", type: "uint256" },
      { internalType: "address", name: "recipient", type: "address" },
    ],
    name: "unwrapWeth",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "minAmount", type: "uint256" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "feeUnits", type: "uint256" },
      { internalType: "address", name: "feeRecipient", type: "address" },
    ],
    name: "unwrapWethWithFee",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
];

const pairABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
      { indexed: false, internalType: "uint128", name: "qty", type: "uint128" },
      {
        indexed: false,
        internalType: "uint256",
        name: "qty0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "qty1",
        type: "uint256",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      { indexed: false, internalType: "uint256", name: "qty", type: "uint256" },
      {
        indexed: false,
        internalType: "uint256",
        name: "qty0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "qty1",
        type: "uint256",
      },
    ],
    name: "BurnRTokens",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "qty0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "qty1",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "paid0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "paid1",
        type: "uint256",
      },
    ],
    name: "Flash",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      { indexed: false, internalType: "int24", name: "tick", type: "int24" },
    ],
    name: "Initialize",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
      { indexed: false, internalType: "uint128", name: "qty", type: "uint128" },
      {
        indexed: false,
        internalType: "uint256",
        name: "qty0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "qty1",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "deltaQty0",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "deltaQty1",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "int24",
        name: "currentTick",
        type: "int24",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "int24", name: "tickLower", type: "int24" },
      { internalType: "int24", name: "tickUpper", type: "int24" },
      { internalType: "uint128", name: "qty", type: "uint128" },
    ],
    name: "burn",
    outputs: [
      { internalType: "uint256", name: "qty0", type: "uint256" },
      { internalType: "uint256", name: "qty1", type: "uint256" },
      { internalType: "uint256", name: "feeGrowthInsideLast", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_qty", type: "uint256" },
      { internalType: "bool", name: "isLogicalBurn", type: "bool" },
    ],
    name: "burnRTokens",
    outputs: [
      { internalType: "uint256", name: "qty0", type: "uint256" },
      { internalType: "uint256", name: "qty1", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "subtractedValue", type: "uint256" },
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [{ internalType: "contract IFactory", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "qty0", type: "uint256" },
      { internalType: "uint256", name: "qty1", type: "uint256" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "flash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getFeeGrowthGlobal",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLiquidityState",
    outputs: [
      { internalType: "uint128", name: "baseL", type: "uint128" },
      { internalType: "uint128", name: "reinvestL", type: "uint128" },
      { internalType: "uint128", name: "reinvestLLast", type: "uint128" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPoolState",
    outputs: [
      { internalType: "uint160", name: "sqrtP", type: "uint160" },
      { internalType: "int24", name: "currentTick", type: "int24" },
      { internalType: "int24", name: "nearestCurrentTick", type: "int24" },
      { internalType: "bool", name: "locked", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "int24", name: "tickLower", type: "int24" },
      { internalType: "int24", name: "tickUpper", type: "int24" },
    ],
    name: "getPositions",
    outputs: [
      { internalType: "uint128", name: "liquidity", type: "uint128" },
      { internalType: "uint256", name: "feeGrowthInsideLast", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSecondsPerLiquidityData",
    outputs: [
      {
        internalType: "uint128",
        name: "secondsPerLiquidityGlobal",
        type: "uint128",
      },
      { internalType: "uint32", name: "lastUpdateTime", type: "uint32" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "int24", name: "tickLower", type: "int24" },
      { internalType: "int24", name: "tickUpper", type: "int24" },
    ],
    name: "getSecondsPerLiquidityInside",
    outputs: [
      {
        internalType: "uint128",
        name: "secondsPerLiquidityInside",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "addedValue", type: "uint256" },
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "int24", name: "", type: "int24" }],
    name: "initializedTicks",
    outputs: [
      { internalType: "int24", name: "previous", type: "int24" },
      { internalType: "int24", name: "next", type: "int24" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxTickLiquidity",
    outputs: [{ internalType: "uint128", name: "", type: "uint128" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "int24", name: "tickLower", type: "int24" },
      { internalType: "int24", name: "tickUpper", type: "int24" },
      { internalType: "int24[2]", name: "ticksPrevious", type: "int24[2]" },
      { internalType: "uint128", name: "qty", type: "uint128" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "mint",
    outputs: [
      { internalType: "uint256", name: "qty0", type: "uint256" },
      { internalType: "uint256", name: "qty1", type: "uint256" },
      { internalType: "uint256", name: "feeGrowthInsideLast", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "int256", name: "swapQty", type: "int256" },
      { internalType: "bool", name: "isToken0", type: "bool" },
      { internalType: "uint160", name: "limitSqrtP", type: "uint160" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "swap",
    outputs: [
      { internalType: "int256", name: "deltaQty0", type: "int256" },
      { internalType: "int256", name: "deltaQty1", type: "int256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapFeeUnits",
    outputs: [{ internalType: "uint24", name: "", type: "uint24" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tickDistance",
    outputs: [{ internalType: "int24", name: "", type: "int24" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "int24", name: "", type: "int24" }],
    name: "ticks",
    outputs: [
      { internalType: "uint128", name: "liquidityGross", type: "uint128" },
      { internalType: "int128", name: "liquidityNet", type: "int128" },
      { internalType: "uint256", name: "feeGrowthOutside", type: "uint256" },
      {
        internalType: "uint128",
        name: "secondsPerLiquidityOutside",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
    outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token1",
    outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint160", name: "initialSqrtP", type: "uint160" },
    ],
    name: "unlockPool",
    outputs: [
      { internalType: "uint256", name: "qty0", type: "uint256" },
      { internalType: "uint256", name: "qty1", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const quoterAbi = [
  {
    inputs: [{ internalType: "address", name: "_factory", type: "address" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes", name: "path", type: "bytes" },
      { internalType: "uint256", name: "amountIn", type: "uint256" },
    ],
    name: "quoteExactInput",
    outputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint160[]", name: "afterSqrtPList", type: "uint160[]" },
      {
        internalType: "uint32[]",
        name: "initializedTicksCrossedList",
        type: "uint32[]",
      },
      { internalType: "uint256", name: "gasEstimate", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "tokenIn", type: "address" },
          { internalType: "address", name: "tokenOut", type: "address" },
          { internalType: "uint256", name: "amountIn", type: "uint256" },
          { internalType: "uint24", name: "feeUnits", type: "uint24" },
          { internalType: "uint160", name: "limitSqrtP", type: "uint160" },
        ],
        internalType: "struct IQuoterV2.QuoteExactInputSingleParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "quoteExactInputSingle",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "usedAmount", type: "uint256" },
          { internalType: "uint256", name: "returnedAmount", type: "uint256" },
          { internalType: "uint160", name: "afterSqrtP", type: "uint160" },
          {
            internalType: "uint32",
            name: "initializedTicksCrossed",
            type: "uint32",
          },
          { internalType: "uint256", name: "gasEstimate", type: "uint256" },
        ],
        internalType: "struct IQuoterV2.QuoteOutput",
        name: "output",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes", name: "path", type: "bytes" },
      { internalType: "uint256", name: "amountOut", type: "uint256" },
    ],
    name: "quoteExactOutput",
    outputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint160[]", name: "afterSqrtPList", type: "uint160[]" },
      {
        internalType: "uint32[]",
        name: "initializedTicksCrossedList",
        type: "uint32[]",
      },
      { internalType: "uint256", name: "gasEstimate", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "tokenIn", type: "address" },
          { internalType: "address", name: "tokenOut", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
          { internalType: "uint24", name: "feeUnits", type: "uint24" },
          { internalType: "uint160", name: "limitSqrtP", type: "uint160" },
        ],
        internalType: "struct IQuoterV2.QuoteExactOutputSingleParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "quoteExactOutputSingle",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "usedAmount", type: "uint256" },
          { internalType: "uint256", name: "returnedAmount", type: "uint256" },
          { internalType: "uint160", name: "afterSqrtP", type: "uint160" },
          {
            internalType: "uint32",
            name: "initializedTicksCrossed",
            type: "uint32",
          },
          { internalType: "uint256", name: "gasEstimate", type: "uint256" },
        ],
        internalType: "struct IQuoterV2.QuoteOutput",
        name: "output",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "int256", name: "amount0Delta", type: "int256" },
      { internalType: "int256", name: "amount1Delta", type: "int256" },
      { internalType: "bytes", name: "path", type: "bytes" },
    ],
    name: "swapCallback",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const arbitragerAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sushiSwapRouterAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "meshSwapRouterAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "wethAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "daiAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "beneficiaryAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum Arbitrager.Direction",
        name: "direction",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
    ],
    name: "NewArbitrage",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "enum Arbitrager.Direction",
        name: "_direction",
        type: "uint8",
      },
    ],
    name: "initiateSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

module.exports = {
  factoryAbi,
  routerABI,
  pairABI,
  quoterAbi,
  arbitragerAbi,
};
