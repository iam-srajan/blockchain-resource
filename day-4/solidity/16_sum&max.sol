// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ArrayMath {
    uint256[] public numbers;

    function addNumber(uint256 num) external {
        numbers.push(num);
    }

    function sumAll() external view returns (uint256 total) {
        for (uint256 i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }
    }

    function findMax() external view returns (uint256 max) {
        require(numbers.length > 0, "No numbers added");
        max = numbers[0];
        for (uint256 i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }
    }

    function countEvenNumbers() external view returns (uint256 count) {
        for (uint256 i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 == 0) {
                count++;
            }
        }
    }

    function calculateSum(uint256 n) public pure returns (uint256) {
        uint256 sum = 0;
        uint256 i = 1;

        while (i <= n) {
            sum = sum + i;
            i++;
        } 

        return sum;
    }
}