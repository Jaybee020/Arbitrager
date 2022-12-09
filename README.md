# profitable_flashloans

## Arbitrage bot setup to search for arbitrage opportunities using the pair ETH/DAI in the Sushiswap & Meshswap DEXes

- This version of the bot only works for the ETH/DAI pair and only listens for arbitrage on Sushiswap and Meshswap.

### Environment Variables and Config

Set up a local .env file that contains the following configuration variables

```
PROVIDER_URL=<POLYGON URL>
PRIVATE_KEY=<YOUR PRIVATE KEY>
MIN_PROFIT=<YOUR MIN PROFIT IN DOLLARS>
AMOUNT_DAI=<AMOUNT OF DAI TO TRADE>
```

### Giving allowances to the contract

To give allowances to the contract to spend out of your tokens uncomment this line of code

```js
(async () => {
  await daiAllowance();
  await wethAllowance();
})();
```

Then comment out this part of the code

```js
provider.on("block", async (blockNumber) => {
  arbitrageQueue.add("arbitrage", { blockNumber: blockNumber });
});
```

### Running the File

```

npm start

```
