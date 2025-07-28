// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;

import "./zombieattack.sol";
import "./erc721.sol";

contract ZombieOwnership is ZombieAttack {
  mapping(uint => address) zombieApprovals;

  function balanceOf(address _owner) public view override returns(uint256 _balance) {
    return ownerZombieCount[_owner];
  }

  function ownerOf(uint256 _tokenId) public view override returns(address _owner) {
    return zombieToOwner[_tokenId];
  }

  function _transfer(address _from, address _to, uint256 _tokenId) private {
    ownerZombieCount[_to]++;
    ownerZombieCount[_from]--;
    zombieToOwner[_tokenId] = _to;
    emit Transfer(_from, _to, _tokenId);
  }

  function transfer(address _to, uint256 _tokenId) public override oblyOwnerOf(_tokenId) {
    _transfer(msg.sender, _to, _tokenId);
  }

  function approve(address _to, uint256 _tokenId) public override oblyOwnerOf(_tokenId) {
    zombieApprovals[_tokenId] = _to;
    emit Approval(msg.sender, _to, _tokenId);
  }

  function takeOwnership(uint256 _tokenId) public override {
    require(msg.sender == zombieApprovals[_tokenId], "ZombieOwnership: caller is not approved for this zombie");
    address owner = ownerOf(_tokenId);
    _transfer(owner, msg.sender, _tokenId);
  }
}