
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;

// interface MyERC721 {
//   function balanceOf(address _owner) external view returns (uint256 _balance);
//   function ownerOf(uint256 _tokenId) external view returns (address _owner);
//   function transfer(address _to, uint256 _tokenId) external;
//   function approve(address _to, uint256 _tokenId) external;
//   function takeOwnership(uint256 _tokenId) external;
// }

contract ERC721 {
  event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);
  event Approval(address indexed _owner, address indexed _approved, uint256 _tokenId);
   
  function balanceOf(address _owner) public view virtual returns (uint256 _balance) {}
  function ownerOf(uint256 _tokenId) public view virtual returns (address _owner) {}
  function transfer(address _to, uint256 _tokenId) public virtual {}
  function approve(address _to, uint256 _tokenId) public virtual {}
  function takeOwnership(uint256 _tokenId) public virtual {}

}
