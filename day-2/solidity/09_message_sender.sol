// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;


contract MessageInfo {

    address public lastSender;
    uint public lastValue;

    function recordMessage() public payable {
        lastSender = msg.sender;
        lastValue = msg.value;
    }

    function getSender() public view returns (address) {
        return lastSender;
    }

    function getValue() public view returns (uint) {
        return lastValue;
    }
}