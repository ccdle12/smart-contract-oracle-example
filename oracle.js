//Node fetch library
const fetch = require('fetch')

//ABI of contract
const OracleContract = require('./build/contracts/Oracle.json')

//Used to extract the abi
const contract = require('truffle-contract')

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const oracleContract = contract(OracleContract)
oracleContract.setProvider(web3.currentProvider)

// Dirty hack for web3@1.0.0 support for localhost testrpc
// see https://github.com/trufflesuite/truffle-contract/issues/56#issuecomment-331084530
if (typeof oracleContract.currentProvider.sendAsync !== "function") {
    oracleContract.currentProvider.sendAsync = function() {
      return oracleContract.currentProvider.send.apply(
        oracleContract.currentProvider, arguments
      );
    };
}

// Get the accounts from web3
web3.eth.getAccounts((err, accounts) => {
    oracleContract.deployed()
    .then((oracleInstance) => {

        //Watch for the function to be called (function activates an event)
        oracleInstance.CallbackGetBTCCap()
        .watch((err, event) => {
            //Request marketcap data
            fetch.fetchUrl('https://api.coinmarketcap.com/v1/global/', (err, m , b) =>  {
                const cmcJson = JSON.parse(b.toString())
                const btcMarketCap = parseInt(cmcJson.total_market_cap_usd)

                //Send retrieved data back to the contract on the blockchain
                oracleInstance.setBTCCap(btcMarketCap, {from: accounts[0]})
            })
        })
    })
    .catch((err) => {
        console.log(err)
    })
})