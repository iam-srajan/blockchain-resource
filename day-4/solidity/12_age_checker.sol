// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract EligibilityChecker {
    
    function checkVotingEligibility(uint256 age) external pure returns (string memory) {
        if (age >= 18) {
            return "Eligible to vote";
        } else {
            return "Not eligible to vote";
        }
    }

    function checkDiscount(uint256 age) external pure returns (uint256 discountPercent) {
        if (age < 12) {
            discountPercent = 50;
        } else if (age >= 12 && age < 18) {
            discountPercent = 20;
        } else if (age >= 60) {
            discountPercent = 30;
        } else {
            discountPercent = 0;
        }
    }

    function isEven(uint256 num) external pure returns (bool) {
        return num % 2 == 0;
    }
}