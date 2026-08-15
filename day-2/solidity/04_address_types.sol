 // SPDX-License-Identifier: MIT

pragma solidity 0.8.15;

contract ExampleAddress {

    address someAddress;

    function setSomeAddress(address _someAddress) public {
        someAddress = _someAddress;
    }

    function getAddressBalance() public view returns (uint) {
        return someAddress.balance;
    }
}