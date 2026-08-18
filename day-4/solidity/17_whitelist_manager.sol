// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract WhitelistManager {
    address public owner;
    mapping(address => bool) public isWhitelisted;
    address[] public whitelistedUsers;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addToWhitelist(address user) external onlyOwner {
        require(!isWhitelisted[user], "Already whitelisted");
        isWhitelisted[user] = true;
        whitelistedUsers.push(user);
    }

    function removeFromWhitelist(address user) external onlyOwner {
        isWhitelisted[user] = false;
    }

    function checkAccess() external view returns (bool) {
        return isWhitelisted[msg.sender];
    }

    function totalWhitelisted() external view returns (uint256 count) {
        for (uint256 i = 0; i < whitelistedUsers.length; i++) {
            if (isWhitelisted[whitelistedUsers[i]]) {
                count++;
            }
        }
    }
}