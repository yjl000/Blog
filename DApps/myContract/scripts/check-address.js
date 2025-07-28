// scripts/check-address.js
const { ethers } = require("ethers");
console.log(new ethers.Wallet(process.env.PRIVATE_KEY).address);