// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;


import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";
import {PriceConverter} from "./priceConverter.sol";
import {MathLibrary} from "./MathLibrary.sol";
using PriceConverter for uint256;
using MathLibrary for uint256;

contract FundMe {
    // send funds into our contract 
    uint256 public myValue = 1;
    struct FundInfo {
        uint256 amountFunded;
        uint256 fundNums;
    }
    mapping(address => FundInfo) public addressToFundInfo;
    uint256 public constant MINIMUM_USD = 5 * 10 ** 18;

    AggregatorV3Interface priceFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
    
    function fund() payable public {
        myValue = myValue + 1;
        // require(msg.value > 1e18, "didn't send enough ETH");
        require(msg.value.getConversionRate() >= MINIMUM_USD,  "didn't send enough ETH");
        addressToFundInfo[msg.sender].amountFunded += msg.value;
        addressToFundInfo[msg.sender].fundNums += 1;
    }

    /**
    * Network: Sepolia
    * Data Feed: ETH/USD
    * Address: 0x694AA1769357215DE4FAC081bf1f309aDC325306
    */

    function getVersion() public view returns (uint256) {
        return priceFeed.version();
    }

    function decimals() external view returns (uint8) {
        return priceFeed.decimals();
    }

    function getLatestPrice() public view returns (uint256) {
        (,int answer,,,) = priceFeed.latestRoundData();
        return uint(answer) * 1e10; 
    }


    function calculateSum(uint256 num1, uint256 num2) public pure returns(uint256) {
        return num1.sum(num2);
    }

    // owner can withdraw funds
    // function withdraw() public  {}
}