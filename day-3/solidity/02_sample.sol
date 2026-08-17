// SPDX-License-Identifier: MIT
pragma solidity 0.8.34;

contract Sample {
    uint public lastValueSent;
    string public lastFunctionCalled;
    string public name;

    function myname(string memory _name) public payable {
        lastFunctionCalled = "myname";
        lastValueSent = msg.value;
        name = _name;
    }

    receive() external payable {
        lastFunctionCalled = "received";
        lastValueSent = msg.value;
    }

    fallback() external payable {
        lastFunctionCalled = "fallback";
        lastValueSent = msg.value;
     }
}

// 0x424887fa000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000067372616a616e0000000000000000000000000000000000000000000000000000