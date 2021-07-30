// these migrations pick a contract and put them on the blockchain

const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
