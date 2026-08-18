// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ArrayCRUD {

    uint[] public numbers;

    // CREATE
    function addNumber(uint _number) public {
        numbers.push(_number);
    }

    // READ
    function getNumber(uint _index) public view returns (uint) {
        return numbers[_index];
    }

    // Get complete array
    function getAllNumbers() public view returns (uint[] memory) {
        return numbers;
    }

    // UPDATE
    function updateNumber(uint _index, uint _newNumber) public {
        numbers[_index] = _newNumber;
    }

    // DELETE
    function deleteNumber(uint _index) public {
        delete numbers[_index];
    }

}