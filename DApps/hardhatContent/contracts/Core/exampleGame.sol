// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "./ZB/ZBGameMode.sol";

contract ExampleGame is ZBGameMode {
  function beforeMatchStart(bytes memory serializedGameState) external override {
    GameState memory gameState = ZBSerializer.init(serializedGameState);
  }
}