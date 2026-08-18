// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract StructCRUD {

    struct Student {
        string name;
        uint256 age;
    }

    Student public student;

    // CREATE
    function createStudent(string memory _name, uint256 _age) public {
        student = Student(_name, _age);
    }

    // READ
    function getStudent() public view returns (string memory, uint256)
    {
        return (student.name, student.age);
    }

    // UPDATE
    function updateStudent(string memory _name, uint256 _age) public {
        student.name = _name;
        student.age = _age;
    }

    // DELETE
    function deleteStudent() public {
        delete student;
    }
}