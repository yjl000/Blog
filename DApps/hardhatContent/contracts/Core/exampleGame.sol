// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "./ZB/ZBGameMode.sol";

contract ExampleGame is ZBGameMode {
  using ZBSerializer for ZBSerializer.SerializedGameStateChanges;

  function beforeMatchStart(bytes memory serializedGameState) external override {
    GameState memory gameState = ZBSerializer.init(serializedGameState);
    ZBSerializer.SerializedGameStateChanges memory changes;
    changes = ZBSerializer.init(changes);
    // 改变玩家1的防御值 需要单独引入库，通过变量调用库函数
    changes.changePlayerDefense(Player.Player1, 15);
    changes.changePlayerDefense(Player.Player2, 15);

    changes.changePlayerCurrentGooVials(Player.Player1, 3);
    changes.changePlayerCurrentGooVials(Player.Player2, 3);

    changes.changePlayerCurrentGoo(Player.Player1, 3);
    changes.changePlayerCurrentGoo(Player.Player2, 3);

    changes.changePlayerMaxGooVials(Player.Player1, 8);
    changes.changePlayerMaxGooVials(Player.Player2, 8);


    // 改变玩家1的防御值 不需要单独引入库，直接调用库函数
    // changes = ZBSerializer.changePlayerDefense(changes,Player.Player1, 15);
  }
}