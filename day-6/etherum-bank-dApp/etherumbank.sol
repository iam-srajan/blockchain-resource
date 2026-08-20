// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract EthereumBank {

    struct Transaction {
        uint256 amount;
        uint256 timestamp;
        string transactionType;
    }

    struct Account { 
        uint256 balance;

        uint256 transactionCount;

        mapping(uint256 => Transaction) transactions;
    }

    mapping(address => Account) private accounts;


    // DEPOSIT

    function deposit() public payable {

        require(
            msg.value > 0,
            "Amount must be greater than 0"
        );

        accounts[msg.sender].balance += msg.value;


        Transaction memory depositTransaction = Transaction(
            msg.value,
            block.timestamp,
            "Deposit"
        );


        accounts[msg.sender].transactions[
            accounts[msg.sender].transactionCount
        ] = depositTransaction;


        accounts[msg.sender].transactionCount++;
    }


    // WITHDRAW

    function withdraw(uint256 amount) public {

        require(
            amount > 0,
            "Amount must be greater than 0"
        );

        require(
            accounts[msg.sender].balance >= amount,
            "Insufficient balance"
        );


        accounts[msg.sender].balance -= amount;


        Transaction memory withdrawalTransaction = Transaction(
            amount,
            block.timestamp,
            "Withdrawal"
        );


        accounts[msg.sender].transactions[
            accounts[msg.sender].transactionCount
        ] = withdrawalTransaction;


        accounts[msg.sender].transactionCount++;


        payable(msg.sender).transfer(amount);
    }


    // GET USER BALANCE

    function getBalance()
        public
        view
        returns (uint256)
    {
        return accounts[msg.sender].balance;
    }


    // GET TRANSACTION COUNT

    function getTransactionCount()
        public
        view
        returns (uint256)
    {
        return accounts[msg.sender].transactionCount;
    }


    // GET ONE TRANSACTION

    function getTransaction(uint256 index)
        public
        view
        returns (
            uint256,
            uint256,
            string memory
        )
    {
        Transaction memory transaction =
            accounts[msg.sender].transactions[index];


        return (
            transaction.amount,
            transaction.timestamp,
            transaction.transactionType
        );
    }

}