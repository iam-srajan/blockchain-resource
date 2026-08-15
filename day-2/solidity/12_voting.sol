// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Voting {

    uint public yesVotes;
    uint public noVotes;

    function voteYes() public {
        yesVotes = yesVotes + 1;
    }

    function voteNo() public {
        noVotes = noVotes + 1;
    }

    function getMyAddress() public view returns (address) {
        return msg.sender;
    }
}
