// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;

contract Uint {
    uint256 public myUnit; // 2 ** 256 - 1
    uint8 public myunit8 = 250; // 2 ** 8 - 1
    int public myint = -10; // -2 ** 128 to +2 ** 128-1

    function set_uint(uint _unit) public {
        myUnit = _unit;
    }

    function decrement_uint() public {
        myUnit--;
    }

    function increment_uint8() public {
        myunit8++;
    }

    function increment_int() public {
        myint++;
    }
}