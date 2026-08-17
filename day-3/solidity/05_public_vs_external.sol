// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract PublicVsExternal {

    uint256 public number;
    address public add;
   

    function setNumberPublic(uint256 _num) public {
        number = _num;
    }

    function setNumberExternal(uint256 _num) external {
        number = _num;
    }

    function testFromInside() public {
        setNumberPublic(100);
        // setNumberExternal(200); // This will give error
    }

    function testExternalUsingThis() public {
        this.setNumberExternal(300);
    }
}