// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract StudentRecords {
    struct Student {
        string name;
        uint256 age;
        bool isEnrolled;
    }

    mapping(address => Student) public students;

    function addStudent(string calldata name, uint256 age) external {
        students[msg.sender] = Student(name, age, true);
    }

    function unenroll() external {
        students[msg.sender].isEnrolled = false;
    }

    function isStudentEnrolled(address studentAddr) external view returns (bool) {
        return students[studentAddr].isEnrolled;
    }
}