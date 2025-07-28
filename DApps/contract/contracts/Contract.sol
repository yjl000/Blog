// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.26;

contract ZombieFactory {
    event NewZombie(uint zombieId, string name, uint dna);
    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;
    struct Zombie {
        string name;
        uint dna;
    }
    Zombie[] public zombies;

    // 创建僵尸
    function _createZombie(string calldata _name, uint _dna) private  {
        zombies.push(Zombie(_name, _dna));
        uint id = zombies.length - 1;
        emit NewZombie(id, _name, _dna);
    }

    function _generateRandomDna(string calldata _str) private view returns(uint) {
        uint rand = uint(keccak256(bytes(_str)));
        return rand % dnaModulus;
    }

    function createRandomZombie(string calldata _name) public  {
        uint randDna = _generateRandomDna(_name);
        _createZombie(_name, randDna);
    }
}