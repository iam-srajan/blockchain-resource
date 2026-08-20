// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract StudentCertificate {

    address public owner;

    struct Certificate {
        string certificateId;
        string studentName;
        string course;
        string institution;
        uint256 issueDate;
        bool exists;
    }

    mapping(string => Certificate) private certificates;


    constructor() {
        owner = msg.sender;
    }


    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "Only owner can perform this action"
        );

        _;
    }


    // ADD CERTIFICATE

    function addCertificate(
        string memory _certificateId,
        string memory _studentName,
        string memory _course,
        string memory _institution
    ) public onlyOwner {

        require(
            !certificates[_certificateId].exists,
            "Certificate already exists"
        );

        certificates[_certificateId] = Certificate(
            _certificateId,
            _studentName,
            _course,
            _institution,
            block.timestamp,
            true
        );
    }


    // VERIFY CERTIFICATE

    function verifyCertificate(
        string memory _certificateId
    )
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            uint256,
            bool
        )
    {

        Certificate memory certificate =
            certificates[_certificateId];

        return (
            certificate.studentName,
            certificate.course,
            certificate.institution,
            certificate.issueDate,
            certificate.exists
        );
    }

}