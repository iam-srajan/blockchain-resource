// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract StructArrayCRUD {

    struct Student {
        string name;
        uint256 age;
    }

    Student[] public students;

    // CREATE
    function createStudent(string memory _name, uint256 _age) public {
        students.push(Student(_name, _age));
    }

    // READ
    function getStudent(uint256 _index) public view returns (string memory, uint256) {
        return (students[_index].name, students[_index].age);
    }

    // UPDATE
    function updateStudent(uint256 _index, string memory _name, uint256 _age) public {
        students[_index].name = _name;
        students[_index].age = _age;
    }

    // DELETE
    function deleteStudent(uint256 _index) public {
        delete students[_index];
    }
}