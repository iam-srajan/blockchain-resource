// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract MappingsStructExample {

    // Stores information about one transaction
    struct Transaction {
        uint amount;
        uint timestamp;
    }

    // Stores all information related to one user's balance
    struct Balance {
        uint totalBalance;

        uint numDeposits;
        mapping(uint => Transaction) deposits;

        uint numWithdrawals;
        mapping(uint => Transaction) withdrawals;
    }

    // Each address gets its own Balance structure
    mapping(address => Balance) public balanceReceived;


    // Get the recorded balance of a user
    function getBalance(address _addr)
        public

        view
        returns (uint)
    {
        return balanceReceived[_addr].totalBalance;
    }


    // Deposit ETH into the contract
    function depositMoney() public payable {

        // Increase user's balance
        balanceReceived[msg.sender].totalBalance += msg.value;

        // Create a deposit transaction
        Transaction memory deposit = Transaction(
            msg.value,
            block.timestamp
        );

        // Store the deposit
        balanceReceived[msg.sender]
            .deposits[
                balanceReceived[msg.sender].numDeposits
            ] = deposit;

        // Increase deposit counter
        balanceReceived[msg.sender].numDeposits++;
    }


    // Withdraw ETH from the contract
    function withdrawMoney(address payable _to, uint _amount) public {

        // Make sure user has enough balance
        require(
            balanceReceived[msg.sender].totalBalance >= _amount,
            "Insufficient balance"
        );

        // Reduce user's recorded balance
        balanceReceived[msg.sender].totalBalance -= _amount;

        // Create withdrawal transaction
        Transaction memory withdrawal = Transaction(
            _amount,
            block.timestamp
        );

        // Store the withdrawal
        balanceReceived[msg.sender]
            .withdrawals[
                balanceReceived[msg.sender].numWithdrawals
            ] = withdrawal;

        // Increase withdrawal counter
        balanceReceived[msg.sender].numWithdrawals++;

        // Send ETH to the destination address
        _to.transfer(_amount);
    }
}