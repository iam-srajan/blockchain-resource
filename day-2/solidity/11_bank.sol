// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Bank {

    address public owner;
    uint public balance;

    constructor() {
        owner = msg.sender;
    }

    function deposit() public payable {
        balance = balance + msg.value;
    }

    function getMyAddress() public view returns (address) {
        return msg.sender;
    }
}
