// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;


import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";


contract FundMe {
    // send funds into our contract 
    uint256 public myValue = 1;
    function fund() payable public {
        myValue = myValue + 1;
        require(msg.value > 1e18, "didn't send enough ETH");
    }

    /**
    * Network: Sepolia
    * Data Feed: ETH/USD
    * Address: 0x694AA1769357215DE4FAC081bf1f309aDC325306
    */

    function getVersion() public view returns (uint256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
        return priceFeed.version();
    }

    function decimals() external view returns (uint8) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
        return priceFeed.decimals();
    }




    // owner can withdraw funds
    // function withdraw() public  {}
}