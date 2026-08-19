# 1. Student Management System

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract StudentManagement {

    struct Student {
        uint256 id;
        string name;
        uint256 age;
        string course;
        bool exists;
    }

    mapping(uint256 => Student) public students;

    uint256 public studentCount;

    // CREATE
    function addStudent(
        string memory _name,
        uint256 _age,
        string memory _course
    ) public {
        studentCount++;

        students[studentCount] = Student(
            studentCount,
            _name,
            _age,
            _course,
            true
        );
    }

    // READ
    function getStudent(uint256 _id) public view returns (
        uint256,
        string memory,
        uint256,
        string memory
    ) {
        require(students[_id].exists, "Student does not exist");

        Student memory student = students[_id];

        return (
            student.id,
            student.name,
            student.age,
            student.course
        );
    }

    // UPDATE
    function updateStudent(
        uint256 _id,
        string memory _name,
        uint256 _age,
        string memory _course
    ) public {
        require(students[_id].exists, "Student does not exist");

        students[_id].name = _name;
        students[_id].age = _age;
        students[_id].course = _course;
    }

    // DELETE
    function deleteStudent(uint256 _id) public {
        require(students[_id].exists, "Student does not exist");

        students[_id].exists = false;
    }
}
```

---

# 2. Bank Deposit & Withdrawal System

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleBank {

    mapping(address => uint256) public balances;

    event Deposit(address indexed user, uint256 amount);
    event Withdraw(address indexed user, uint256 amount);

    // DEPOSIT
    function deposit() public payable {
        require(msg.value > 0, "Amount must be greater than 0");

        balances[msg.sender] += msg.value;

        emit Deposit(msg.sender, msg.value);
    }

    // WITHDRAW
    function withdraw(uint256 _amount) public {
        require(_amount > 0, "Amount must be greater than 0");
        require(balances[msg.sender] >= _amount, "Insufficient balance");

        balances[msg.sender] -= _amount;

        payable(msg.sender).transfer(_amount);

        emit Withdraw(msg.sender, _amount);
    }

    // CHECK USER BALANCE
    function getMyBalance() public view returns (uint256) {
        return balances[msg.sender];
    }

    // CHECK CONTRACT BALANCE
    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
```

---

# 3. Employee Salary Management

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract EmployeeManagement {

    address public owner;

    struct Employee {
        uint256 id;
        string name;
        string department;
        uint256 salary;
        bool exists;
    }

    mapping(uint256 => Employee) public employees;

    uint256 public employeeCount;

    event SalaryUpdated(uint256 employeeId, uint256 newSalary);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    // CREATE
    function addEmployee(
        string memory _name,
        string memory _department,
        uint256 _salary
    ) public onlyOwner {
        employeeCount++;

        employees[employeeCount] = Employee(
            employeeCount,
            _name,
            _department,
            _salary,
            true
        );
    }

    // READ
    function getEmployee(uint256 _id) public view returns (
        uint256,
        string memory,
        string memory,
        uint256
    ) {
        require(employees[_id].exists, "Employee does not exist");

        Employee memory employee = employees[_id];

        return (
            employee.id,
            employee.name,
            employee.department,
            employee.salary
        );
    }

    // UPDATE SALARY
    function updateSalary(
        uint256 _id,
        uint256 _newSalary
    ) public onlyOwner {
        require(employees[_id].exists, "Employee does not exist");

        employees[_id].salary = _newSalary;

        emit SalaryUpdated(_id, _newSalary);
    }

    // DELETE
    function removeEmployee(uint256 _id) public onlyOwner {
        require(employees[_id].exists, "Employee does not exist");

        employees[_id].exists = false;
    }
}
```

---

# 4. Voting System with Election Control

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract VotingSystem {

    address public owner;

    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    mapping(uint256 => Candidate) public candidates;

    mapping(address => bool) public hasVoted;

    uint256 public candidateCount;

    bool public electionActive;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    modifier electionIsActive() {
        require(electionActive, "Election is not active");
        _;
    }

    // ADD CANDIDATE
    function addCandidate(
        string memory _name
    ) public onlyOwner {
        candidateCount++;

        candidates[candidateCount] = Candidate(
            candidateCount,
            _name,
            0
        );
    }

    // START ELECTION
    function startElection() public onlyOwner {
        electionActive = true;
    }

    // END ELECTION
    function endElection() public onlyOwner {
        electionActive = false;
    }

    // VOTE
    function vote(
        uint256 _candidateId
    ) public electionIsActive {
        require(!hasVoted[msg.sender], "You have already voted");
        require(
            _candidateId > 0 &&
            _candidateId <= candidateCount,
            "Invalid candidate"
        );

        candidates[_candidateId].voteCount++;

        hasVoted[msg.sender] = true;
    }

    // GET WINNER
    function getWinner() public view returns (
        string memory,
        uint256
    ) {
        require(candidateCount > 0, "No candidates available");

        uint256 winningVoteCount = 0;
        uint256 winningCandidateId = 0;

        for (uint256 i = 1; i <= candidateCount; i++) {
            if (candidates[i].voteCount > winningVoteCount) {
                winningVoteCount = candidates[i].voteCount;
                winningCandidateId = i;
            }
        }

        return (
            candidates[winningCandidateId].name,
            winningVoteCount
        );
    }
}
```

---

# 5. Simple Crowdfunding Contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Crowdfunding {

    address public owner;

    uint256 public targetAmount;
    uint256 public totalRaised;

    mapping(address => uint256) public contributions;

    constructor(uint256 _targetAmount) {
        owner = msg.sender;
        targetAmount = _targetAmount;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    // CONTRIBUTE
    function contribute() public payable {
        require(msg.value > 0, "Contribution must be greater than 0");

        contributions[msg.sender] += msg.value;

        totalRaised += msg.value;
    }

    // CHECK TARGET
    function isTargetReached() public view returns (bool) {
        return totalRaised >= targetAmount;
    }

    // WITHDRAW FUNDS
    function withdrawFunds() public onlyOwner {
        require(
            totalRaised >= targetAmount,
            "Target has not been reached"
        );

        uint256 amount = address(this).balance;

        payable(owner).transfer(amount);
    }

    // CHECK CONTRACT BALANCE
    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
```

---

# 6. Product Inventory Management

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ProductInventory {

    struct Product {
        uint256 id;
        string name;
        uint256 price;
        uint256 quantity;
        bool exists;
    }

    mapping(uint256 => Product) public products;

    uint256 public productCount;

    // CREATE
    function addProduct(
        string memory _name,
        uint256 _price,
        uint256 _quantity
    ) public {
        productCount++;

        products[productCount] = Product(
            productCount,
            _name,
            _price,
            _quantity,
            true
        );
    }

    // UPDATE PRICE
    function updatePrice(
        uint256 _id,
        uint256 _price
    ) public {
        require(products[_id].exists, "Product does not exist");

        products[_id].price = _price;
    }

    // INCREASE QUANTITY
    function increaseQuantity(
        uint256 _id,
        uint256 _quantity
    ) public {
        require(products[_id].exists, "Product does not exist");

        products[_id].quantity += _quantity;
    }

    // DECREASE QUANTITY
    function decreaseQuantity(
        uint256 _id,
        uint256 _quantity
    ) public {
        require(products[_id].exists, "Product does not exist");

        require(
            products[_id].quantity >= _quantity,
            "Insufficient quantity"
        );

        products[_id].quantity -= _quantity;
    }

    // READ
    function getProduct(uint256 _id) public view returns (
        uint256,
        string memory,
        uint256,
        uint256
    ) {
        require(products[_id].exists, "Product does not exist");

        Product memory product = products[_id];

        return (
            product.id,
            product.name,
            product.price,
            product.quantity
        );
    }

    // DELETE
    function deleteProduct(uint256 _id) public {
        require(products[_id].exists, "Product does not exist");

        products[_id].exists = false;
    }
}
```

---

# 7. Student Certificate Verification DApp

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CertificateVerification {

    address public owner;

    struct Certificate {
        string certificateId;
        string studentName;
        string course;
        uint256 issueDate;
        bool isValid;
    }

    mapping(string => Certificate) public certificates;

    mapping(string => bool) public certificateExists;

    event CertificateIssued(
        string certificateId,
        string studentName
    );

    event CertificateRevoked(
        string certificateId
    );

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    // ISSUE CERTIFICATE
    function issueCertificate(
        string memory _certificateId,
        string memory _studentName,
        string memory _course
    ) public onlyOwner {
        require(
            !certificateExists[_certificateId],
            "Certificate already exists"
        );

        certificates[_certificateId] = Certificate(
            _certificateId,
            _studentName,
            _course,
            block.timestamp,
            true
        );

        certificateExists[_certificateId] = true;

        emit CertificateIssued(
            _certificateId,
            _studentName
        );
    }

    // VERIFY CERTIFICATE
    function verifyCertificate(
        string memory _certificateId
    ) public view returns (
        string memory,
        string memory,
        string memory,
        uint256,
        bool
    ) {
        require(
            certificateExists[_certificateId],
            "Certificate does not exist"
        );

        Certificate memory certificate =
            certificates[_certificateId];

        return (
            certificate.certificateId,
            certificate.studentName,
            certificate.course,
            certificate.issueDate,
            certificate.isValid
        );
    }

    // REVOKE CERTIFICATE
    function revokeCertificate(
        string memory _certificateId
    ) public onlyOwner {
        require(
            certificateExists[_certificateId],
            "Certificate does not exist"
        );

        certificates[_certificateId].isValid = false;

        emit CertificateRevoked(_certificateId);
    }
}
```

---

# 8. Multi-Signature Approval System

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MultiSignatureApproval {

    address public owner;

    mapping(address => bool) public admins;

    uint256 public requiredApprovals;

    struct Proposal {
        uint256 id;
        string description;
        uint256 approvalCount;
        bool executed;
    }

    mapping(uint256 => Proposal) public proposals;

    mapping(uint256 => mapping(address => bool))
        public hasApproved;

    uint256 public proposalCount;

    constructor(
        address[] memory _admins,
        uint256 _requiredApprovals
    ) {
        owner = msg.sender;

        require(
            _requiredApprovals > 0 &&
            _requiredApprovals <= _admins.length,
            "Invalid required approvals"
        );

        for (uint256 i = 0; i < _admins.length; i++) {
            admins[_admins[i]] = true;
        }

        requiredApprovals = _requiredApprovals;
    }

    modifier onlyAdmin() {
        require(admins[msg.sender], "Only admin can perform this action");
        _;
    }

    // CREATE PROPOSAL
    function createProposal(
        string memory _description
    ) public onlyAdmin {
        proposalCount++;

        proposals[proposalCount] = Proposal(
            proposalCount,
            _description,
            0,
            false
        );
    }

    // APPROVE PROPOSAL
    function approveProposal(
        uint256 _proposalId
    ) public onlyAdmin {
        require(
            _proposalId > 0 &&
            _proposalId <= proposalCount,
            "Invalid proposal"
        );

        require(
            !hasApproved[_proposalId][msg.sender],
            "You have already approved"
        );

        require(
            !proposals[_proposalId].executed,
            "Proposal already executed"
        );

        hasApproved[_proposalId][msg.sender] = true;

        proposals[_proposalId].approvalCount++;
    }

    // EXECUTE PROPOSAL
    function executeProposal(
        uint256 _proposalId
    ) public onlyAdmin {
        require(
            proposals[_proposalId].approvalCount >= requiredApprovals,
            "Not enough approvals"
        );

        require(
            !proposals[_proposalId].executed,
            "Proposal already executed"
        );

        proposals[_proposalId].executed = true;
    }
}
```

---

# 9. Expense Tracker

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ExpenseTracker {

    struct Expense {
        uint256 id;
        string title;
        uint256 amount;
        uint256 timestamp;
        bool exists;
    }

    mapping(address => mapping(uint256 => Expense))
        public expenses;

    mapping(address => uint256)
        public expenseCount;

    mapping(address => uint256)
        public totalExpenses;

    // CREATE
    function addExpense(
        string memory _title,
        uint256 _amount
    ) public {
        expenseCount[msg.sender]++;

        uint256 id = expenseCount[msg.sender];

        expenses[msg.sender][id] = Expense(
            id,
            _title,
            _amount,
            block.timestamp,
            true
        );

        totalExpenses[msg.sender] += _amount;
    }

    // READ
    function getExpense(
        uint256 _id
    ) public view returns (
        uint256,
        string memory,
        uint256,
        uint256
    ) {
        require(
            expenses[msg.sender][_id].exists,
            "Expense does not exist"
        );

        Expense memory expense =
            expenses[msg.sender][_id];

        return (
            expense.id,
            expense.title,
            expense.amount,
            expense.timestamp
        );
    }

    // GET TOTAL EXPENSES
    function getTotalExpenses()
        public
        view
        returns (uint256)
    {
        return totalExpenses[msg.sender];
    }

    // DELETE
    function deleteExpense(uint256 _id) public {
        require(
            expenses[msg.sender][_id].exists,
            "Expense does not exist"
        );

        totalExpenses[msg.sender] -=
            expenses[msg.sender][_id].amount;

        expenses[msg.sender][_id].exists = false;
    }
}
```

---

# 10. Simple Marketplace

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleMarketplace {

    struct Product {
        uint256 id;
        string name;
        uint256 price;
        address seller;
        bool isSold;
    }

    mapping(uint256 => Product) public products;

    uint256 public productCount;

    event ProductListed(
        uint256 productId,
        string name,
        uint256 price,
        address seller
    );

    event ProductPurchased(
        uint256 productId,
        address buyer,
        uint256 price
    );

    // LIST PRODUCT
    function listProduct(
        string memory _name,
        uint256 _price
    ) public {
        require(_price > 0, "Price must be greater than 0");

        productCount++;

        products[productCount] = Product(
            productCount,
            _name,
            _price,
            msg.sender,
            false
        );

        emit ProductListed(
            productCount,
            _name,
            _price,
            msg.sender
        );
    }

    // BUY PRODUCT
    function buyProduct(
        uint256 _productId
    ) public payable {
        require(
            _productId > 0 &&
            _productId <= productCount,
            "Invalid product"
        );

        Product storage product = products[_productId];

        require(!product.isSold, "Product already sold");

        require(
            msg.sender != product.seller,
            "Seller cannot buy own product"
        );

        require(
            msg.value == product.price,
            "Send exact product price"
        );

        product.isSold = true;

        payable(product.seller).transfer(msg.value);

        emit ProductPurchased(
            _productId,
            msg.sender,
            msg.value
        );
    }

    // GET PRODUCT
    function getProduct(
        uint256 _productId
    ) public view returns (
        uint256,
        string memory,
        uint256,
        address,
        bool
    ) {
        require(
            _productId > 0 &&
            _productId <= productCount,
            "Invalid product"
        );

        Product memory product = products[_productId];

        return (
            product.id,
            product.name,
            product.price,
            product.seller,
            product.isSold
        );
    }
}
```
