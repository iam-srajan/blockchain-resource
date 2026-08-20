let web3;
let account;
let bankContract;

// Replace with your deployed contract address

const contractAddress = "0xbcf67eBfF524471563c6D8FdF68263aEA31Ee352";

// ABI

const abi = [
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
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
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getTransaction",
    outputs: [
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
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTransactionCount",
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
];
// Get HTML elements

const connectWalletBtn = document.getElementById("connectWalletBtn");

const walletAddress = document.getElementById("walletAddress");

const balanceElement = document.getElementById("balance");

const depositAmount = document.getElementById("depositAmount");

const withdrawAmount = document.getElementById("withdrawAmount");

const transactionHistory = document.getElementById("transactionHistory");

const depositBtn = document.getElementById("depositBtn");

const withdrawBtn = document.getElementById("withdrawBtn");

const refreshBtn = document.getElementById("refreshBtn");

// CONNECT WALLET

async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      account = accounts[0];

      walletAddress.innerText = "Connected: " + account;

      // Create Web3 instance

      web3 = new Web3(window.ethereum);

      // Connect smart contract

      bankContract = new web3.eth.Contract(abi, contractAddress);

      console.log("Connected Wallet:", account);

      // Load all data

      await loadBalance();

      await loadTransactionHistory();
    } catch (error) {
      console.error(error);

      alert("Failed to connect MetaMask");
    }
  } else {
    alert("MetaMask is not installed!");
  }
}

// LOAD BALANCE

async function loadBalance() {
  try {
    if (!bankContract || !account) {
      return;
    }

    const balanceWei = await bankContract.methods.getBalance().call({
      from: account,
    });

    // Convert Wei to ETH

    const balanceETH = web3.utils.fromWei(balanceWei, "ether");

    balanceElement.innerText = balanceETH + " ETH";
  } catch (error) {
    console.error("Error loading balance:", error);
  }
}

// DEPOSIT ETH

async function depositETH() {
  try {
    if (!account) {
      alert("Please connect your wallet first!");

      return;
    }

    const amount = depositAmount.value;

    if (!amount || amount <= 0) {
      alert("Please enter a valid amount");

      return;
    }

    // Convert ETH to Wei

    const amountWei = web3.utils.toWei(amount, "ether");

    alert("MetaMask will open. Confirm the deposit transaction.");

    // Call deposit() and send ETH

    await bankContract.methods.deposit().send({
      from: account,

      value: amountWei,
    });

    alert("Deposit successful!");

    // Clear input

    depositAmount.value = "";

    // Refresh data

    await loadBalance();

    await loadTransactionHistory();
  } catch (error) {
    console.error(error);

    alert("Deposit failed!");
  }
}

// WITHDRAW ETH

async function withdrawETH() {
  try {
    if (!account) {
      alert("Please connect your wallet first!");

      return;
    }

    const amount = withdrawAmount.value;

    if (!amount || amount <= 0) {
      alert("Please enter a valid amount");

      return;
    }

    // Convert ETH to Wei

    const amountWei = web3.utils.toWei(amount, "ether");

    alert("MetaMask will open. Confirm the withdrawal transaction.");

    // Call withdraw()

    await bankContract.methods.withdraw(amountWei).send({
      from: account,
    });

    alert("Withdrawal successful!");

    // Clear input

    withdrawAmount.value = "";

    // Refresh data

    await loadBalance();

    await loadTransactionHistory();
  } catch (error) {
    console.error(error);

    alert("Withdrawal failed! Check your bank balance.");
  }
}

// LOAD TRANSACTION HISTORY

async function loadTransactionHistory() {
  try {
    if (!bankContract || !account) {
      return;
    }

    // Get transaction count

    const transactionCount = await bankContract.methods
      .getTransactionCount()
      .call({
        from: account,
      });

    // Clear old transactions

    transactionHistory.innerHTML = "";

    if (Number(transactionCount) === 0) {
      transactionHistory.innerHTML = "<p>No transactions yet.</p>";

      return;
    }

    // Loop through transactions

    for (let i = Number(transactionCount) - 1; i >= 0; i--) {
      const transaction = await bankContract.methods.getTransaction(i).call({
        from: account,
      });

      const amountETH = web3.utils.fromWei(transaction[0], "ether");

      const timestamp = new Date(
        Number(transaction[1]) * 1000,
      ).toLocaleString();

      const transactionType = transaction[2];

      // Create HTML

      const transactionElement = document.createElement("div");

      transactionElement.className = "transaction";

      transactionElement.innerHTML = `

                <strong>
                    ${transactionType}
                </strong>

                <p>
                    Amount: ${amountETH} ETH
                </p>

                <p>
                    Time: ${timestamp}
                </p>

            `;

      transactionHistory.appendChild(transactionElement);
    }
  } catch (error) {
    console.error("Error loading transaction history:", error);
  }
}

// EVENT LISTENERS

connectWalletBtn.addEventListener("click", connectWallet);

depositBtn.addEventListener("click", depositETH);

withdrawBtn.addEventListener("click", withdrawETH);

refreshBtn.addEventListener("click", async function () {
  await loadBalance();

  await loadTransactionHistory();
});
