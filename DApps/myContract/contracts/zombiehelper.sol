// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;
import "./zombiefeeding.sol";

contract ZombieHelper is ZombieFeeding {

  uint levelUpFee = 0.001 ether;

  modifier aboveLevel(uint _level, uint _zombieId) {
    require(zombies[_zombieId].level >= _level, "ZombieHelper: zombie level is below required level");
    _;
  }

  function withdraw() external onlyOwner {
    // owner.transfer(this.balance);
    payable(owner).transfer(address(this).balance);
  }

  function setLevelUpFee(uint _fee) external onlyOwner {
    levelUpFee = _fee;
  }


  function levelUp(uint _zombieId) external payable {
    require(msg.value >= levelUpFee, "ZombieHelper: incorrect level up fee");
    zombies[_zombieId].level++;
  }

  function changeName(uint _zombieId, string memory _newName) external oblyOwnerOf(_zombieId) aboveLevel(2, _zombieId) {
    zombies[_zombieId].name = _newName;
  }

  function changeDna(uint _zombieId, uint _newDna) external oblyOwnerOf(_zombieId) aboveLevel(20, _zombieId) {
    zombies[_zombieId].dna = _newDna;
  }

  function getZombiesByOwner(address _owner) external view returns(uint[] memory){
    uint[] memory result = new uint[](ownerZombieCount[_owner]);
    uint counter = 0;
    for (uint i = 0; i < zombies.length; i++) {
      if (zombieToOwner[i] == _owner) {
        result[counter] = i;
        counter++;
      }
    }
    return result;
  }
}