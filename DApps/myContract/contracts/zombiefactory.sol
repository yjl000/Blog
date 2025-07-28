// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;
import "./Ownable.sol";
import "./erc721.sol";

contract ZombieFactory is Ownable, ERC721{
    event NewZombie(uint zombieId, string name, uint dna);
    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;
    uint cooldownTime = 1 days;

    struct Zombie {
        string name;
        uint dna;
        uint16 winCount;
        uint16 lossCount;
        uint32 level;
        uint32 readyTime;
    }

    Zombie[] public zombies;

    mapping (uint => address) public zombieToOwner;
    mapping (address => uint) ownerZombieCount;

    // 创建僵尸
    function _createZombie(string memory _name, uint _dna) internal {
        zombies.push(Zombie(_name, _dna, 0, 0, 1, uint32(block.timestamp + cooldownTime)));
        uint id = zombies.length - 1;
        zombieToOwner[id] = msg.sender;
        ownerZombieCount[msg.sender]++;
        emit Transfer(address(0), msg.sender, id); // 使用ERC721的Transfer事件
        // emit NewZombie(id, _name, _dna);
    }

    function _generateRandomDna(string calldata _str) private view returns(uint) {
        uint rand = uint(keccak256(bytes(_str)));
        return rand % dnaModulus;
    }

    function createRandomZombie(string calldata _name) public  {
        require(ownerZombieCount[msg.sender] == 0, 'You already have a zombie');
        uint randDna = _generateRandomDna(_name);
        _createZombie(_name, randDna);
    }
}
