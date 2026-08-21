let web3;
let account;
let vehicleContract;

const contractAddress = "0x8e49443B5844326E2b0e41C477E3F5F8295f1896";

const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_registrationNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "_serviceCenter",
        type: "string",
      },
      {
        internalType: "string",
        name: "_serviceType",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_serviceDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_mileage",
        type: "uint256",
      },
    ],
    name: "addServiceRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_registrationNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "_ownerName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_vehicleModel",
        type: "string",
      },
    ],
    name: "registerVehicle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "registrationNumber",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "serviceId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "serviceCenter",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "serviceType",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "serviceDate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mileage",
        type: "uint256",
      },
    ],
    name: "ServiceAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "registrationNumber",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ownerName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "vehicleModel",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "vehicleOwner",
        type: "address",
      },
    ],
    name: "VehicleRegistered",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_registrationNumber",
        type: "string",
      },
    ],
    name: "getServiceCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_registrationNumber",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getServiceRecord",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_registrationNumber",
        type: "string",
      },
    ],
    name: "getVehicle",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "serviceCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vehicleCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_registrationNumber",
        type: "string",
      },
    ],
    name: "vehicleExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

async function connectWallet() {
  if (typeof window.ethereum === "undefined") {
    alert("Please install MetaMask!");

    return;
  }

  try {
    web3 = new Web3(window.ethereum);

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    account = accounts[0];

    document.getElementById("walletAddress").innerText =
      "Connected: " + account;

    vehicleContract = new web3.eth.Contract(abi, contractAddress);
  } catch (error) {
    console.error(error);

    alert("Wallet connection failed");
  }
}

// =====================================================
// REGISTER VEHICLE
// =====================================================

async function registerVehicle() {
  if (!vehicleContract) {
    alert("Connect MetaMask first");

    return;
  }

  const registrationNumber = document
    .getElementById("registrationNumber")
    .value.trim();

  const ownerName = document.getElementById("ownerName").value.trim();

  const vehicleModel = document.getElementById("vehicleModel").value.trim();

  if (!registrationNumber || !ownerName || !vehicleModel) {
    alert("Please fill all fields");

    return;
  }

  try {
    await vehicleContract.methods
      .registerVehicle(registrationNumber, ownerName, vehicleModel)
      .send({
        from: account,
      });

    alert("Vehicle registered successfully!");

    document.getElementById("registrationNumber").value = "";

    document.getElementById("ownerName").value = "";

    document.getElementById("vehicleModel").value = "";
  } catch (error) {
    console.error(error);

    alert(error.message || "Vehicle registration failed");
  }
}

// =====================================================
// ADD SERVICE RECORD
// =====================================================

async function addServiceRecord() {
  if (!vehicleContract) {
    alert("Connect MetaMask first");

    return;
  }

  const registrationNumber = document
    .getElementById("serviceRegistrationNumber")
    .value.trim();

  const serviceCenter = document.getElementById("serviceCenter").value.trim();

  const serviceType = document.getElementById("serviceType").value;

  const description = document
    .getElementById("serviceDescription")
    .value.trim();

  const date = document.getElementById("serviceDate").value;

  const mileage = document.getElementById("mileage").value;

  if (
    !registrationNumber ||
    !serviceCenter ||
    !description ||
    !date ||
    !mileage
  ) {
    alert("Please fill all fields");

    return;
  }

  // Convert date to Unix timestamp

  const timestamp = Math.floor(new Date(date).getTime() / 1000);

  try {
    await vehicleContract.methods
      .addServiceRecord(
        registrationNumber,
        serviceCenter,
        serviceType,
        description,
        timestamp,
        mileage,
      )
      .send({
        from: account,
      });

    alert("Service record added successfully!");

    document.getElementById("serviceCenter").value = "";

    document.getElementById("serviceDescription").value = "";

    document.getElementById("serviceDate").value = "";

    document.getElementById("mileage").value = "";
  } catch (error) {
    console.error(error);

    alert(error.message || "Failed to add service record");
  }
}

// =====================================================
// SEARCH VEHICLE
// =====================================================

async function searchVehicle() {
  if (!vehicleContract) {
    alert("Connect MetaMask first");

    return;
  }

  const registrationNumber = document
    .getElementById("searchRegistrationNumber")
    .value.trim();

  if (!registrationNumber) {
    alert("Enter registration number");

    return;
  }

  try {
    const exists = await vehicleContract.methods
      .vehicleExists(registrationNumber)
      .call();

    if (!exists) {
      alert("Vehicle not found");

      return;
    }

    const vehicle = await vehicleContract.methods
      .getVehicle(registrationNumber)
      .call();

    displayVehicle(vehicle);

    await loadServiceHistory(registrationNumber);
  } catch (error) {
    console.error(error);

    alert("Could not fetch vehicle");
  }
}

function displayVehicle(vehicle) {
  const vehicleDetails = document.getElementById("vehicleDetails");

  const vehicleInfo = document.getElementById("vehicleInfo");

  vehicleDetails.classList.remove("hidden");

  vehicleInfo.innerHTML = `

        <p>
            <strong>Registration Number:</strong>
            ${vehicle[0]}
        </p>

        <p>
            <strong>Owner Name:</strong>
            ${vehicle[1]}
        </p>

        <p>
            <strong>Vehicle Model:</strong>
            ${vehicle[2]}
        </p>

        <p class="address">
            <strong>Blockchain Owner:</strong>
            ${vehicle[3]}
        </p>

    `;
}

async function loadServiceHistory(registrationNumber) {
  const count = await vehicleContract.methods
    .getServiceCount(registrationNumber)
    .call();

  const section = document.getElementById("serviceHistorySection");

  const container = document.getElementById("serviceHistory");

  section.classList.remove("hidden");

  container.innerHTML = "";

  if (Number(count) === 0) {
    container.innerHTML = "<p>No service records found.</p>";

    return;
  }

  for (let i = Number(count) - 1; i >= 0; i--) {
    const service = await vehicleContract.methods
      .getServiceRecord(registrationNumber, i)
      .call();

    displayService(service);
  }
}

// =====================================================
// DISPLAY SERVICE
// =====================================================

function displayService(service) {
  const container = document.getElementById("serviceHistory");

  const date = new Date(Number(service[4]) * 1000).toLocaleDateString();

  const card = document.createElement("div");

  card.className = "service-card";

  card.innerHTML = `

        <h3>
            Service #${service[0]}
        </h3>

        <p>
            <strong>Service Center:</strong>
            ${service[1]}
        </p>

        <p>
            <strong>Service Type:</strong>
            ${service[2]}
        </p>

        <p>
            <strong>Description:</strong>
            ${service[3]}
        </p>

        <p>
            <strong>Date:</strong>
            ${date}
        </p>

        <p>
            <strong>Mileage:</strong>
            ${service[5]} km
        </p>

    `;

  container.appendChild(card);
}

document
  .getElementById("connectWallet")
  .addEventListener("click", connectWallet);

document
  .getElementById("registerVehicleButton")
  .addEventListener("click", registerVehicle);

document
  .getElementById("addServiceButton")
  .addEventListener("click", addServiceRecord);

document
  .getElementById("searchButton")
  .addEventListener("click", searchVehicle);

if (window.ethereum) {
  window.ethereum.on("accountsChanged", function (accounts) {
    if (accounts.length === 0) {
      account = null;

      document.getElementById("walletAddress").innerText =
        "Wallet disconnected";
    } else {
      account = accounts[0];

      document.getElementById("walletAddress").innerText =
        "Connected: " + account;
    }
  });
}
