# Smart Contract Oracle Example

Example project to demonstrate the use of an Oracle in a Solidity Smart Contract, calls BTC Market Cap from coinmarketcap.com and stores data in the contract

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Install Framework and Dependencies
```
npm install -g truffle
npm install -g ethereumjs-testrpc
npm install truffle-contract
```

### Installing

Run testrpc in project folder
```
testrpc
```

Open a new tab and run "tcm.sh" to compile and migrate contract to testrpc private chain
```
./tcm.sh
```

Run oracle to watch for events in the contract and fetch data
```
node oracle.js
```

Run client to send fetch request to contract function "updateBTCCap"
```
node client.js
```

And repeat Twice
```
node client.js 
```

After the second call on client.js, it should show the updated BTC Market Cap


## Deployment

Add additional notes about how to deploy this on a live system


## Authors

* **Christopher Coverdale** - *Initial work* - [ccdle12](https://github.com/ccdle12)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

