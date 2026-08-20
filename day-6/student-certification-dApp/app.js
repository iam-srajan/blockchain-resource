let web3;
let account;
let certificateContract;

// CONTRACT ADDRESS

const contractAddress = "0xd4c0836f37Cf0C4B2074eA41736BaDDBB75Cb33C";

// ABI

const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_certificateId",
        type: "string",
      },
      {
        internalType: "string",
        name: "_studentName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_course",
        type: "string",
      },
      {
        internalType: "string",
        name: "_institution",
        type: "string",
      },
    ],
    name: "addCertificate",
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
    inputs: [
      {
        internalType: "string",
        name: "_certificateId",
        type: "string",
      },
    ],
    name: "verifyCertificate",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
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
];

// HTML ELEMENTS

const connectWalletBtn = document.getElementById("connectWalletBtn");

const walletAddress = document.getElementById("walletAddress");

const certificateId = document.getElementById("certificateId");

const studentName = document.getElementById("studentName");

const course = document.getElementById("course");

const institution = document.getElementById("institution");

const addCertificateBtn = document.getElementById("addCertificateBtn");

const verifyCertificateId = document.getElementById("verifyCertificateId");

const verifyCertificateBtn = document.getElementById("verifyCertificateBtn");

const certificateResult = document.getElementById("certificateResult");

// CONNECT WALLET

async function connectWallet() {
  try {
    if (!window.ethereum) {
      alert("MetaMask is not installed!");

      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    account = accounts[0];

    web3 = new Web3(window.ethereum);

    certificateContract = new web3.eth.Contract(abi, contractAddress);

    walletAddress.innerText = "Connected Wallet: " + account;

    console.log("Connected:", account);
  } catch (error) {
    console.error(error);

    alert("Failed to connect wallet");
  }
}

// ADD CERTIFICATE

async function addCertificate() {
  try {
    if (!account) {
      alert("Please connect wallet first!");

      return;
    }

    const id = certificateId.value;

    const name = studentName.value;

    const studentCourse = course.value;

    const studentInstitution = institution.value;

    if (!id || !name || !studentCourse || !studentInstitution) {
      alert("Please fill all fields!");

      return;
    }

    await certificateContract.methods
      .addCertificate(id, name, studentCourse, studentInstitution)
      .send({
        from: account,
      });

    alert("Certificate added successfully!");

    // CLEAR INPUTS

    certificateId.value = "";

    studentName.value = "";

    course.value = "";

    institution.value = "";
  } catch (error) {
    console.error(error);

    alert(error.message || "Failed to add certificate");
  }
}

// VERIFY CERTIFICATE

async function verifyCertificate() {
  try {
    if (!certificateContract) {
      alert("Please connect wallet first!");

      return;
    }

    const id = verifyCertificateId.value;

    if (!id) {
      alert("Please enter Certificate ID");

      return;
    }

    const result = await certificateContract.methods
      .verifyCertificate(id)
      .call();
    console.log(result);
    const studentNameResult = result[0];

    const courseResult = result[1];

    const institutionResult = result[2];

    const issueDate = result[3];

    const exists = result[4];

    if (!exists) {
      certificateResult.innerHTML = `

                <h3>
                    🙅‍♂️ Certificate Not Found
                </h3>

                <p>
                    This certificate is not registered.
                </p>

            `;

      return;
    }

    const date = new Date(Number(issueDate) * 1000).toLocaleString();

    certificateResult.innerHTML = `

            <h3>
                😊 Certificate Verified
            </h3>

            <br>

            <p>
                <strong>Certificate ID:</strong>
                ${id}
            </p>

            <p>
                <strong>Student Name:</strong>
                ${studentNameResult}
            </p>

            <p>
                <strong>Course:</strong>
                ${courseResult}
            </p>

            <p>
                <strong>Institution:</strong>
                ${institutionResult}
            </p>

            <p>
                <strong>Issue Date:</strong>
                ${date}
            </p>

        `;
  } catch (error) {
    console.error(error);

    certificateResult.innerHTML = `

            <h3>
                😢 Error
            </h3>

            <p>
                Certificate could not be verified.
            </p>

        `;
  }
}

// BUTTON EVENTS

connectWalletBtn.addEventListener("click", connectWallet);

addCertificateBtn.addEventListener("click", addCertificate);

verifyCertificateBtn.addEventListener("click", verifyCertificate);
