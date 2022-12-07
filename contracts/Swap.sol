pragma solidity ^0.8.17;
pragma experimental ABIEncoderV2;

// import "@studydefi/money-legos/dydx/contracts/DydxFlashloanBase.sol";
// import "@studydefi/money-legos/dydx/contracts/ICallee.sol";


import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./IUniswapV2Router02.sol";
import "./IWeth.sol";


contract Arbitrager {
      // Direction for the arbitrage
      // 0 -> Buy ETH on Meshswap, Sell it on sushiswap
      // 1 -> But ETH on Sushiswap, Sell in on Meshswap
    enum Direction { 
        MeshSwapToSushiswap, 
        SushiswapToMeshswap  
    }

    // Custom Data that will be sent over the call action
    struct ArbInfo {
        Direction direction;
    }

    IUniswapV2Router02 sushiswap;
    IUniswapV2Router02 meshswap;
    IERC20 weth;
    IERC20 dai;
    address beneficiary;


    event NewArbitrage(
        Direction direction,
        uint date
    );

    constructor(
        address sushiSwapRouterAddress,
        address meshSwapRouterAddress,
        address wethAddress,
        address daiAddress,
        address beneficiaryAddress
    )  {
        sushiswap = IUniswapV2Router02(sushiSwapRouterAddress);
        meshswap = IUniswapV2Router02(meshSwapRouterAddress);
        weth = IERC20(wethAddress);
        dai = IERC20(daiAddress);
        beneficiary = beneficiaryAddress;
    }


    function withdraw()public{
        uint daiBalance = dai.balanceOf(address(this));
        dai.transfer(beneficiary, daiBalance);
    }


   function initiateSwap(uint amount,Direction _direction)public {
         // Get the DAI Balance on this contract 

        //transfer from the user wallet to the contract from delegated amount
        require(dai.transferFrom(msg.sender,address(this), amount),"Could not transfer token");
        uint daiBalance = dai.balanceOf(address(this));
        require(daiBalance>=amount,"Does not have enough dai to perform swap");
        //buy eth on meshswap and sell to sushiswap
        if(_direction == Direction.SushiswapToMeshswap) {
            //buy eth on sushiswap
            dai.approve(address(sushiswap),amount);
            address[] memory path = new address[](2);   // path array to swap from DAI to ETH
            path[0] = address(dai);
            path[1] = address(weth);
            // Calculate the minium amount of ETH in exchange for all the DAI this contract is holding
            uint[] memory minOuts = sushiswap.getAmountsOut(amount, path); // Will return only one value, because the path array only makes one swap <-> From DAI to WETH
            // Swap all the DAI balance this contract is holding for the most possible amount of ETH
            sushiswap.swapExactTokensForTokens(
                amount,
                minOuts[1], 
                path, 
                address(this), 
                block.timestamp
            );
            //sell eth for dai token
            address[] memory path1 = new address[](2);   // path array to swap from ETH to DAI
            path1[0] = address(weth);
            path1[1] = address(dai);
            // Calculate the minium amount of DAI in exchange for all the ETH this contract is holding
            uint wethBalance=weth.balanceOf(address(this));
            // Swap all the ETH balance this contract is holding for the most possible amount of DAI
            uint[] memory minOuts1 = meshswap.getAmountsOut(wethBalance, path1); // Will return only one value, because the path array only makes one swap <-> From WETH to DAI
            weth.approve(address(meshswap), wethBalance);
            meshswap.swapExactTokensForTokens(
                wethBalance,
                minOuts1[1], 
                path1, 
                address(this), 
                block.timestamp
            );

            emit NewArbitrage(_direction, block.timestamp);


        } else{
            // buy eth on meshswap and sell to sushiswa
            dai.approve(address(meshswap),amount);
            address[] memory path = new address[](2);   // path array to swap from DAI to ETH
            path[0] = address(dai);
            path[1] = address(weth);
            // Calculate the minium amount of ETH in exchange for all the DAI this contract is holding
            uint[] memory minOuts = meshswap.getAmountsOut(amount, path); // Will return only one value, because the path array only makes one swap <-> From DAI to WETH
            // Swap  the DAI this contract is holding for the most possible amount of ETH
            meshswap.swapExactTokensForTokens(
                amount,
                minOuts[1], 
                path, 
                address(this), 
                block.timestamp
            );
            //sell eth for dai token
            address[] memory path1 = new address[](2);   // path array to swap from ETH to DAI
            path1[0] = address(weth);
            path1[1] = address(dai);
            // Calculate the minium amount of DAI in exchange for all the ETH this contract is holding
            uint wethBalance=weth.balanceOf(address(this));
            weth.approve(address(sushiswap), wethBalance);
            uint[] memory minOuts1 = sushiswap.getAmountsOut(wethBalance, path1); // Will return only one value, because the path array only makes one swap <-> From WETH to DAI
            // Swap all the ETH balance this contract is holding for the most possible amount of DAI
            sushiswap.swapExactTokensForTokens(
                wethBalance,
                minOuts1[1], 
                path1, 
                address(this), 
                block.timestamp
            );

            emit NewArbitrage(_direction, block.timestamp);
            
        }

   }
   




   receive() external payable{}
   fallback() external payable{}
}