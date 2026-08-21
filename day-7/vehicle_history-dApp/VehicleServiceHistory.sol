// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract VehicleServiceHistory {

    address public owner;

    struct Vehicle {
        string registrationNumber;
        string ownerName;
        string vehicleModel;
        address vehicleOwner;
        bool exists;
    }

    struct ServiceRecord {
        uint256 serviceId;
        string serviceCenter;
        string serviceType;
        string description;
        uint256 serviceDate;
        uint256 mileage;
    }

    uint256 public vehicleCount;
    uint256 public serviceCount;

    mapping(string => Vehicle) private vehicles;

    mapping(string => ServiceRecord[]) private vehicleServices;

    event VehicleRegistered(
        string registrationNumber,
        string ownerName,
        string vehicleModel,
        address indexed vehicleOwner
    );

    event ServiceAdded(
        string registrationNumber,
        uint256 indexed serviceId,
        string serviceCenter,
        string serviceType,
        uint256 serviceDate,
        uint256 mileage
    );

    constructor() {
        owner = msg.sender;
    }

    // Register a new vehicle
    function registerVehicle(
        string calldata _registrationNumber,
        string calldata _ownerName,
        string calldata _vehicleModel
    ) external {

        require(
            bytes(_registrationNumber).length > 0,
            "Registration number required"
        );

        require(
            !vehicles[_registrationNumber].exists,
            "Vehicle already registered"
        );

        vehicles[_registrationNumber] = Vehicle(
            _registrationNumber,
            _ownerName,
            _vehicleModel,
            msg.sender,
            true
        );

        vehicleCount++;

        emit VehicleRegistered(
            _registrationNumber,
            _ownerName,
            _vehicleModel,
            msg.sender
        );
    }

    // Add a service record
    function addServiceRecord(
        string calldata _registrationNumber,
        string calldata _serviceCenter,
        string calldata _serviceType,
        string calldata _description,
        uint256 _serviceDate,
        uint256 _mileage
    ) external {

        require(
            vehicles[_registrationNumber].exists,
            "Vehicle does not exist"
        );

        require(
            msg.sender ==
            vehicles[_registrationNumber].vehicleOwner,
            "Only vehicle owner can add service"
        );

        serviceCount++;

        vehicleServices[_registrationNumber].push(
            ServiceRecord(
                serviceCount,
                _serviceCenter,
                _serviceType,
                _description,
                _serviceDate,
                _mileage
            )
        );

        emit ServiceAdded(
            _registrationNumber,
            serviceCount,
            _serviceCenter,
            _serviceType,
            _serviceDate,
            _mileage
        );
    }

    // Get vehicle details
    function getVehicle(
        string calldata _registrationNumber
    )
        external
        view
        returns (
            string memory,
            string memory,
            string memory,
            address
        )
    {
        require(
            vehicles[_registrationNumber].exists,
            "Vehicle does not exist"
        );

        Vehicle memory vehicle =
            vehicles[_registrationNumber];

        return (
            vehicle.registrationNumber,
            vehicle.ownerName,
            vehicle.vehicleModel,
            vehicle.vehicleOwner
        );
    }

    // Get number of service records
    function getServiceCount(
        string calldata _registrationNumber
    )
        external
        view
        returns (uint256)
    {
        require(
            vehicles[_registrationNumber].exists,
            "Vehicle does not exist"
        );

        return
            vehicleServices[_registrationNumber].length;
    }

    // Get a specific service record
    function getServiceRecord(
        string calldata _registrationNumber,
        uint256 _index
    )
        external
        view
        returns (
            uint256,
            string memory,
            string memory,
            string memory,
            uint256,
            uint256
        )
    {
        require(
            vehicles[_registrationNumber].exists,
            "Vehicle does not exist"
        );

        require(
            _index <
            vehicleServices[_registrationNumber].length,
            "Invalid service index"
        );

        ServiceRecord memory service =
            vehicleServices[_registrationNumber][_index];

        return (
            service.serviceId,
            service.serviceCenter,
            service.serviceType,
            service.description,
            service.serviceDate,
            service.mileage
        );
    }

    // Check if vehicle exists
    function vehicleExists(
        string calldata _registrationNumber
    )
        external
        view
        returns (bool)
    {
        return vehicles[_registrationNumber].exists;
    }
}