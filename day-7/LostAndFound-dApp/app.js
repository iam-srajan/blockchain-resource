let web3;
let account;
let lostAndFoundContract;

const contractAddress = "0xc0834AF2aC7524C1FA25420a6601317F35A0555E";

const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "itemName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        indexed: false,
        internalType: "enum LostAndFound.ItemStatus",
        name: "status",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "address",
        name: "reportedBy",
        type: "address",
      },
    ],
    name: "ItemReported",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "resolvedBy",
        type: "address",
      },
    ],
    name: "ItemResolved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "markAsResolved",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_itemName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "string",
        name: "_location",
        type: "string",
      },
      {
        internalType: "enum LostAndFound.ItemStatus",
        name: "_status",
        type: "uint8",
      },
    ],
    name: "reportItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getItem",
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
        internalType: "enum LostAndFound.ItemStatus",
        name: "",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "itemCount",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "items",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "itemName",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        internalType: "enum LostAndFound.ItemStatus",
        name: "status",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "reportedBy",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isResolved",
        type: "bool",
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
];

async function connectWallet() {
  if (typeof window.ethereum === "undefined") {
    alert("MetaMask is not installed!");

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

    lostAndFoundContract = new web3.eth.Contract(abi, contractAddress);

    loadItems();
  } catch (error) {
    console.error(error);

    alert("Wallet connection failed");
  }
}

// =====================================================
// REPORT ITEM
// =====================================================

async function reportItem() {
  if (!lostAndFoundContract) {
    alert("Please connect MetaMask first");

    return;
  }

  const itemName = document.getElementById("itemName").value;

  const description = document.getElementById("description").value;

  const location = document.getElementById("location").value;

  const status = document.getElementById("status").value;

  if (
    itemName.trim() === "" ||
    description.trim() === "" ||
    location.trim() === ""
  ) {
    alert("Please fill all fields");

    return;
  }

  try {
    await lostAndFoundContract.methods
      .reportItem(itemName, description, location, status)
      .send({
        from: account,
      });

    alert("Item reported successfully!");

    document.getElementById("itemName").value = "";

    document.getElementById("description").value = "";

    document.getElementById("location").value = "";

    loadItems();
  } catch (error) {
    console.error(error);

    alert("Transaction failed");
  }
}

// =====================================================
// LOAD ALL ITEMS
// =====================================================

async function loadItems() {
  if (!lostAndFoundContract) {
    return;
  }

  const container = document.getElementById("itemsContainer");

  container.innerHTML = "<p>Loading items...</p>";

  try {
    const count = await lostAndFoundContract.methods.itemCount().call();

    container.innerHTML = "";

    if (count == 0) {
      container.innerHTML = "<p>No items reported yet.</p>";

      return;
    }

    for (let i = 1; i <= count; i++) {
      const item = await lostAndFoundContract.methods.getItem(i).call();

      displayItem(item);
    }
  } catch (error) {
    console.error(error);

    container.innerHTML = "<p>Could not load items.</p>";
  }
}

// =====================================================
// DISPLAY ITEM
// =====================================================

function displayItem(item) {
  const container = document.getElementById("itemsContainer");

  let statusText;

  let statusClass;

  if (item[6]) {
    statusText = "Resolved";

    statusClass = "resolved";
  } else if (item[4] == 0) {
    statusText = "Lost";

    statusClass = "lost";
  } else {
    statusText = "Found";

    statusClass = "found";
  }

  const card = document.createElement("div");

  card.className = "item-card";

  let resolveButton = "";

  // Only the reporter can resolve the item

  if (account && item[5].toLowerCase() === account.toLowerCase() && !item[6]) {
    resolveButton = `

            <button
                class="resolve-button"
                onclick="resolveItem(${item[0]})"
            >
                Mark as Resolved
            </button>

        `;
  }

  card.innerHTML = `

        <h3>
            ${item[1]}
        </h3>

        <span
            class="status ${statusClass}"
        >
            ${statusText}
        </span>

        <p>
            <strong>Description:</strong>
            ${item[2]}
        </p>

        <p>
            <strong>Location:</strong>
            ${item[3]}
        </p>

        <p class="address">
            <strong>Reported By:</strong>
            ${item[5]}
        </p>

        ${resolveButton}

    `;

  container.appendChild(card);
}

// =====================================================
// MARK ITEM AS RESOLVED
// =====================================================

async function resolveItem(id) {
  try {
    await lostAndFoundContract.methods.markAsResolved(id).send({
      from: account,
    });

    alert("Item marked as resolved!");

    loadItems();
  } catch (error) {
    console.error(error);

    alert("Could not resolve item");
  }
}

// =====================================================
// BUTTON EVENTS
// =====================================================

document
  .getElementById("connectWallet")
  .addEventListener("click", connectWallet);

document.getElementById("reportButton").addEventListener("click", reportItem);

document.getElementById("refreshButton").addEventListener("click", loadItems);

// =====================================================
// ACCOUNT CHANGE
// =====================================================

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

      loadItems();
    }
  });
}
