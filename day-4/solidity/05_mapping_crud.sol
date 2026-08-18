// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MappingCRUD {

    // address → balance
    mapping(address => uint256) public balances;

    // CREATE
    function createBalance(address _user, uint256 _amount) public {
        balances[_user] = _amount;
    }

    // READ
    function getBalance(address _user)
        public
        view
        returns (uint256)
    {
        return balances[_user];
    }

    // UPDATE
    function updateBalance(address _user, uint256 _newAmount) public {
        balances[_user] = _newAmount;
    }

    // DELETE
    function deleteBalance(address _user) public {
        delete balances[_user];
    }
}