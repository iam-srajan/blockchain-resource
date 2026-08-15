// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;


// ============================================================
// Project 1: Student Information
// ============================================================

contract Student {

    string public name;
    uint public age;
    bool public isPassed;

    constructor(string memory _name, uint _age) {
        name = _name;
        age = _age;
        isPassed = false;
    }

    function updateResult(bool _result) public {
        isPassed = _result;
    }

    function updateAge(uint _age) public {
        age = _age;
    }
}

