// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract StudentMarks {
    // mapping(keyType => valueType) public variableName;
    mapping(uint256 => uint256) public marks;
    mapping(address => bool) public myAddressMapping;

    function setMarks(uint256 studentId, uint256 studentMarks) public {
        marks[studentId] = studentMarks;
    }

    function getMarks(uint256 studentId) public view returns (uint256) {
        return marks[studentId];
    }

    function setAddressTrue() public {
        myAddressMapping[msg.sender] = true;
    }
}

