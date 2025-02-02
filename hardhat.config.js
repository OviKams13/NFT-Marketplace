require('@nomiclabs/hardhat-waffle');
const fs = require('fs');
const privateKey = fs.readFileSync('.secret').toString()
const projectId = "189b9adee6b048c09347d530decbe8ff"

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337, // Default local network
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey], // Placeholder for private keys
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey], // Placeholder for private keys
    },
  },
  solidity: "0.8.28",
};
