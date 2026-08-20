// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract Crowdfunding {

    // Address of the person who deploys the contract
    address public owner;

    // Constructor runs only once when contract is deployed
    constructor() {
        owner = msg.sender;
    }

    // Event to record contributions
    event Contribution(
        address indexed contributor,
        uint256 amount
    );

    // Event to record withdrawal
    event FundsWithdrawn(
        address indexed owner,
        uint256 amount
    );

    // Function to contribute ETH
    function contribute() public payable {

        require(
            msg.value > 0,
            "Contribution amount must be greater than 0"
        );

        emit Contribution(
            msg.sender,
            msg.value
        );
    }

    // Get the ETH balance stored in this contract
    function getBalance() public view returns (uint256) {

        return address(this).balance;
    }

    // Only contract owner can withdraw ETH
    function withdraw() public {

        require(
            msg.sender == owner,
            "Only owner can withdraw funds"
        );

        uint256 balance = address(this).balance;

        require(
            balance > 0,
            "No funds available"
        );

        payable(owner).transfer(balance);

        emit FundsWithdrawn(
            owner,
            balance
        );
    }

}