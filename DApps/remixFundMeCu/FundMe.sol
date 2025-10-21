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
    address[] public funders;
    mapping(address => FundInfo) public addressToFundInfo;
    uint256 public constant MINIMUM_USD = 5 * 10 ** 18;

    AggregatorV3Interface priceFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
    
    address public owner;
    constructor() {
        owner = msg.sender;
    }

    function fund() payable public {
        myValue = myValue + 1;
        // require(msg.value > 1e18, "didn't send enough ETH");
        require(msg.value.getConversionRate() >= MINIMUM_USD,  "didn't send enough ETH");
        addressToFundInfo[msg.sender].amountFunded += msg.value;
        addressToFundInfo[msg.sender].fundNums += 1;
        funders.push(msg.sender);
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

    modifier onlyOwner {
        require(msg.sender == owner, "must be owner");
        _;
    }

    // owner can withdraw funds
    function withdraw() public onlyOwner {
        for (uint256 funderIndex = 0; funderIndex < funders.length; funderIndex++) 
        {
            address funder = funders[funderIndex];
            addressToFundInfo[funder].amountFunded = 0;
        }
        funders = new address[](0);

        // transfer
        // payable(msg.sender).transfer(address(this).balance);

        // send
        // bool sendSuccess = payable(msg.sender).send(address(this).balance);
        // require(sendSuccess, "Send failed");

        // call
        (bool callSuccess,) = payable(msg.sender).call{value:  address(this).balance}("");
        require(callSuccess, "Call failed");
    }
}