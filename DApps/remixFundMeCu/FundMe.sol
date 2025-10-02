// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract FundMe {
    // send funds into our contract 
    uint256 public myValue = 1;
    function fund() payable public {
        myValue = myValue + 1;
        require(msg.value > 1e18, "didn't send enough ETH");
    }

    // owner can withdraw funds
    // function withdraw() public  {}
}