// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

contract Demo {

    // 1. Function that shows who is calling
    function showSender() public view returns (address) {
        return msg.sender;
    }

    // 2. INTERNAL CALL
    function internalCall() public view returns (address) {
        return showSender();
    }

    // 3. EXTERNAL CALL using "this"
    function externalCall() public view returns (address) {
        return this.showSender();
    }
}