// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { SimpleStorage } from "./SimpleStorage.sol";

contract AddFiveStorage is SimpleStorage {
    uint256 public favoriteNumber;

    function store(uint256 _favNumber) public override {
        favoriteNumber = _favNumber + 5;
    }

}