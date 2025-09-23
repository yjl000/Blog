// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { SimpleStorage } from "./SimpleStorage.sol";

contract SquaredStorage is SimpleStorage {
    uint256 public favoriteNumberSquraed;

    function store(uint256 _favNumber) public override {
        favoriteNumberSquraed = _favNumber * _favNumber;
    }

}