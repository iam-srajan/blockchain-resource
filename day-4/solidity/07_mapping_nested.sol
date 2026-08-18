// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract NestedMappingDemo {
    
    mapping(address => mapping(uint256 => uint256)) public balances;

 
    function setBalance(address user, uint256 tokenId, uint256 amount) external {
        balances[user][tokenId] = amount;
    }

   
    function getBalance(address user, uint256 tokenId) external view returns (uint256) {
        return balances[user][tokenId];
    }
    

    function increaseBalance(address user, uint256 tokenId, uint256 amount) external {
        balances[user][tokenId] += amount;
    }

  
    function decreaseBalance(address user, uint256 tokenId, uint256 amount) external {
        require(balances[user][tokenId] >= amount, "Insufficient balance");
        balances[user][tokenId] -= amount;
    }
}