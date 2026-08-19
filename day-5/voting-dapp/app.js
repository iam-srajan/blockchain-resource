let web3;
let account;
let votingContract;

const contractAddress = "0x02D631abbFEf44c5682d8837e6fCEEE7c9E7ADD8";

// ABI of your Voting Smart Contract

const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "addCandidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_candidateId",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "candidates",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "voteCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "candidatesCount",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "hasVoted",
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

// Get HTML elements

const connectWalletBtn = document.getElementById("connectWalletBtn");

const walletAddress = document.getElementById("walletAddress");

const candidatesContainer = document.getElementById("candidatesContainer");

// Connect MetaMask

async function connectWallet() {
  // Check if MetaMask exists

  if (window.ethereum) {
    try {
      // Request MetaMask accounts

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      // Get first connected account

      account = accounts[0];

      // Show wallet address

      walletAddress.innerText = "Connected Wallet: " + account;

      // Create Web3 instance

      web3 = new Web3(window.ethereum);

      // Connect to smart contract

      votingContract = new web3.eth.Contract(abi, contractAddress);

      console.log("Wallet Connected:", account);

      // Load candidates

      loadCandidates();
    } catch (error) {
      console.error(error);

      alert("Failed to connect wallet");
    }
  } else {
    alert("MetaMask is not installed!");
  }
}

// Load all candidates

async function loadCandidates() {
  try {
    // Get total number of candidates

    const candidatesCount = await votingContract.methods
      .candidatesCount()
      .call();

    console.log("Total Candidates:", candidatesCount);

    // Clear old candidates

    candidatesContainer.innerHTML = "";

    // Loop through all candidates

    for (let i = 1; i <= candidatesCount; i++) {
      // Get candidate data

      const candidate = await votingContract.methods.candidates(i).call();

      console.log(candidate);

      // Create candidate card

      const candidateCard = document.createElement("div");

      candidateCard.className = "candidate-card";

      candidateCard.innerHTML = `

                <h3>${candidate.name}</h3>

                <p>
                    Candidate ID: ${candidate.id}
                </p>

                <p>
                    Total Votes: ${candidate.voteCount}
                </p>

                <button
                    class="vote-btn"
                    onclick="vote(${candidate.id})"
                >
                    Vote
                </button>

            `;

      // Add candidate to webpage

      candidatesContainer.appendChild(candidateCard);
    }
  } catch (error) {
    console.error(error);

    candidatesContainer.innerHTML = "<p>Failed to load candidates.</p>";
  }
}

// Vote for candidate

async function vote(candidateId) {
  try {
    // Check wallet connection

    if (!account) {
      alert("Please connect your wallet first!");

      return;
    }

    // Check if user already voted

    const alreadyVoted = await votingContract.methods.hasVoted(account).call();

    if (alreadyVoted) {
      alert("You have already voted!");

      return;
    }

    // Show message

    alert("MetaMask will open. Please confirm the transaction.");

    // Send transaction

    await votingContract.methods.vote(candidateId).send({
      from: account,
    });

    alert("Vote submitted successfully!");

    // Reload candidates

    loadCandidates();
  } catch (error) {
    console.error(error);

    alert("Transaction failed!");
  }
}

// Connect button click

connectWalletBtn.addEventListener("click", connectWallet);
