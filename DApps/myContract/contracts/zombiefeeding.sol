// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;
import "./zombiefactory.sol";
interface KittyInterface {
  function getKitty(uint _id) external view returns (
    bool isGestating,
    bool isReady,
    uint cooldownIndex,
    uint nextActionAt,
    uint siringWithId,
    uint birthTime,
    uint matronId,
    uint sireId,
    uint generation,
    uint genes
  );
}
contract ZombieFeeding is ZombieFactory {
  KittyInterface kittyContrct;

  modifier oblyOwnerOf(uint _zombieId) {
    require(msg.sender == zombieToOwner[_zombieId], "ZombieFeeding: caller is not the owner of the zombie");
    _;
  }
  function setKittyContractAddress(address _address) external onlyOwner {
    kittyContrct = KittyInterface(_address);
  }

  function _triggerCooldown(Zombie storage _zombie) internal {
    _zombie.readyTime = uint32(block.timestamp + cooldownTime);
  }

  function _isReady(Zombie storage _zombie) internal view returns(bool) {
    return(_zombie.readyTime <= block.timestamp);
  }

  function feedAndMultiply(uint _zombieId, uint _targetDna, string memory _species) internal oblyOwnerOf(_zombieId) {
    Zombie storage myZombie = zombies[_zombieId];
    require(_isReady(myZombie), "ZombieFeeding: zombie is not ready to feed");
    _targetDna = _targetDna % dnaModulus;
    uint newDna = (myZombie.dna + _targetDna) / 2;
    if (keccak256(bytes(_species)) == keccak256("kitty")) {
      newDna = newDna - newDna % 100 + 99;
    }
    _createZombie("NoName", newDna);
    _triggerCooldown(myZombie);
  }

  function feedOnKitty(uint _zombieId, uint _kittyId) public {
    uint kittyDna;
    (,,,,,,,,,kittyDna) = kittyContrct.getKitty(_kittyId);
    feedAndMultiply(_zombieId, kittyDna, "kitty");
  }
}