import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// 加载环境变量
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      { version: "0.8.26" },
      { version: "0.8.28" },
    ]
  },
  networks: {
    holesky: {
      url: process.env.HOLESKY_RPC_URL || "https://ethereum-holesky.publicnode.com",
      chainId: 17000,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
};

export default config;
