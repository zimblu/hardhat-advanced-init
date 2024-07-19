require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("./tasks/block-number")
// require("hardhat-gas-reporter")

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
      blockConfirmations: 6,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      // accounts: Thanks hardhat!
      chainId: 31337,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  // gasReporter: {
  //   enabled: false,
  //   outputFile: "gas-report.txt",
  //   noColors: true,
  //   currency: "USD",
  //   coinmarketcap: COINMARKETCAP_API_KEY,
  // },
}

// This is a sample Hardhat task
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})
