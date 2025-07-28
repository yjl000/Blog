import { ethers } from "ethers";
import { HardhatUserConfig } from "hardhat/config";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  // 读取 .env 里的私钥和 RPC
  const privateKey = process.env.PRIVATE_KEY!;
  const rpcUrl = process.env.HOLESKY_RPC_URL || "https://ethereum-holesky.publicnode.com";

  const provider = new ethers.JsonRpcProvider(rpcUrl);
  const wallet = new ethers.Wallet(privateKey, provider);

  console.log("当前部署用的地址：", wallet.address);
}

main();