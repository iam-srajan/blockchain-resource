// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Wallet {

    // Struct
    struct PaymentReceivedStruct {
        address from;
        uint amount;
    }

    // Struct variable
    PaymentReceivedStruct public payment;

    // Receive ETH and store payment information
    function payContract() public payable {
        payment = PaymentReceivedStruct(
            msg.sender,
            msg.value
        );
    }

    // Get values from the struct
    function getPayment() public view returns (address, uint) {
        return (payment.from, payment.amount);
    }
}