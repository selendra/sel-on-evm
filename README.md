# SEL ERC20/BEP20

SEL pegged token on EVM

## Develop

Deploy to localhost hardhat.

1. Open one terminal

```shell
npm install
npx hardhat node
```

2. Open another termainal

```shell
npx hardhat compile
npx hardhat test
npx hardhat run script/deploy.js --network hardhat
```

## Proproduction

Deploy to BSC testnet.

```shell
npx hardhat run script/deploy.js --network bscTestnet
```

## Production

Deploy to BSC mainnet.

```shell
npx hardhat run script/deploy.js
```
