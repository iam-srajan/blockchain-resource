let web3;
let account;
let crowdfundingContract;

// Replace with your deployed contract address

const contractAddress = "0x8597FA5eF095fcf1B9E251219BA30A4e6D357613";

// ABI

const abi = [
  {
    inputs: [],
    name: "contribute",
    outputs: [],
    stateMutability: "payable",
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
        indexed: true,
        internalType: "address",
        name: "contributor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Contribution",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FundsWithdrawn",
    type: "event",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
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

// Connect MetaMask

async function connectWallet() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    account = accounts[0];

    document.getElementById("account").innerText = account;

    crowdfundingContract = new web3.eth.Contract(abi, contractAddress);

    alert("Wallet Connected Successfully!");

    getBalance();
  } else {
    alert("MetaMask is not installed!");
  }
}

// Contribute ETH

async function contribute() {
  if (!crowdfundingContract) {
    alert("Please connect MetaMask first!");

    return;
  }

  const amount = document.getElementById("amount").value;

  if (!amount || amount <= 0) {
    alert("Please enter a valid amount!");

    return;
  }

  try {
    await crowdfundingContract.methods.contribute().send({
      from: account,

      value: web3.utils.toWei(amount, "ether"),
    });

    alert("Contribution Successful!");

    getBalance();
  } catch (error) {
    console.error(error);

    alert("Transaction Failed!");
  }
}

// Get Contract Balance

async function getBalance() {
  if (!crowdfundingContract) {
    return;
  }

  try {
    const balance = await crowdfundingContract.methods.getBalance().call();

    const ethBalance = web3.utils.fromWei(balance, "ether");

    document.getElementById("balance").innerText = ethBalance + " ETH";
  } catch (error) {
    console.error(error);
  }
}

// Withdraw Funds

async function withdraw() {
  if (!crowdfundingContract) {
    alert("Please connect MetaMask first!");

    return;
  }

  try {
    await crowdfundingContract.methods.withdraw().send({
      from: account,
    });

    alert("Funds Withdrawn Successfully!");

    getBalance();
  } catch (error) {
    console.error(error);

    alert(
      "Withdrawal Failed! Only the contract owner may be allowed to withdraw.",
    );
  }
}

// Detect Account Change

if (window.ethereum) {
  window.ethereum.on("accountsChanged", function (accounts) {
    account = accounts[0];

    document.getElementById("account").innerText = account;
  });
}
