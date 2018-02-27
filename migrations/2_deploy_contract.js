var Oracle = artifacts.require("./Oracle.sol");

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(Oracle);
};
