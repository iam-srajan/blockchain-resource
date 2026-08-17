// SPDX-License-Identifier: MIT
pragma solidity 0.8.34;

contract receive_ether {
    string public myString = "Hello World";
    uint public value;
    function updateString(string memory _newString) public payable {
        myString = _newString;
        value = msg.value;
    }
}