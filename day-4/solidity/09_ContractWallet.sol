// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract ContractWallet {
    PaymentReceived public payment;

    function payContract() public payable {
        payment = new PaymentReceived(msg.sender, msg.value);
    }

    function getPaymentDetails() public view returns (address, uint) {
    return (payment.from(), payment.amount());
    }
}

contract PaymentReceived {
    address public from;
    uint public amount;

    constructor(address _from, uint _amount) {
        from = _from;
        amount = _amount;
    }

    
}


