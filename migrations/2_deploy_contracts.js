// these migrations pick a contract and put them on the blockchain, and actually contracts are written in solidity
// before pushing migrations ganche must be in running state
// for migrating simply write
// 1) truffle migrate
// 2) truffle console
//      contract = await EthSwap.deployed()
//      contract
//      contract.address
//      name = await contract.name()
//      name
// ethereum helps us to create our own cryptocurrency

// truffle migrate --reset : --reset is beacuse contracts are immutable so you have to completely reset it


// token = await Token.deployed()
// balance = await token.balanceOf('0xa5038D357dC06C90da69d379fd6D917Bb7689259')
// balance
// balance.toString()



const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");

// you cant use await await unless you are in an asynchronous function call

module.exports = async function(deployer) {

  // deployer.deploy(Token);
  await deployer.deploy(Token);
  const token = await Token.deployed();

  // deployer.deploy(EthSwap);
  await deployer.deploy(EthSwap, token.address);  // the passing of token.address is related to the constructor in EthSwap.sol
  const ethSwap = await EthSwap.deployed();

  await token.transfer(ethSwap.address,'1000000000000000000000000'); // for seeing the functionality refer Token.sol
};
