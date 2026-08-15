# Smart Contract, Solidity and Remix IDE

## 1. What is Blockchain?

A **blockchain** is a digital record system where information is stored in blocks.

Think of it like a shared notebook:

- Many computers have a copy of the notebook.
- Information added to the notebook is recorded permanently.
- Once information is recorded, changing it is very difficult.
- There is no single person or company controlling the entire notebook.

For example:

A blockchain can store information such as:

```text
Alice sent 2 ETH to Bob
```

But blockchain itself is not just for storing transactions. It can also run programs called **smart contracts**.

---

# 2. What is a Smart Contract?

A **smart contract is a program stored on a blockchain that can automatically execute rules.**

The word "contract" can be confusing.

It is not a paper contract.

It is basically:

```text
Blockchain + Program + Rules
```

For example, imagine a simple student contract:

```text
Student name = Srajan
Age = 25
Passed = true
```

The smart contract can contain rules such as:

```text
Store student information
Change student information
Read student information
```

Once the contract is deployed on a blockchain, people can interact with it.

### Real-world example

Suppose we want to create a voting system.

Normal system:

```text
User → Website → Server → Database
```

A blockchain voting system could work like:

```text
User → Smart Contract → Blockchain
```

The smart contract could contain:

```text
function vote()
```

When a user votes, the smart contract records the vote according to its programmed rules.

---

# 3. Why do we need Smart Contracts?

Without smart contracts, blockchain would mainly be useful for recording transactions.

Smart contracts allow us to put **logic and rules** on the blockchain.

For example:

```text
If payment is received
        ↓
Give ownership to buyer
```

Or:

```text
If student passed
        ↓
Store certificate
```

Or:

```text
If vote is valid
        ↓
Increase vote count
```

The important idea is:

> A smart contract is a program that runs according to predefined rules on a blockchain.

---

# 4. What is Solidity?

**Solidity is a programming language used to write smart contracts.**

Just like:

```text
Python       → used to write Python programs
Java         → used to write Java programs
JavaScript   → used to write JavaScript programs
Solidity     → used to write smart contracts
```

Example:

```solidity
pragma solidity ^0.8.20;

contract Student {

    string public name;
    uint public age;

}
```

Here, Solidity is the language used to create the `Student` smart contract.

---

# 5. What is a Contract in Solidity?

In Solidity, a **contract** is similar to a class in programming languages such as Java or Python.

Example:

```solidity
contract Student {

    string public name;
    uint public age;

}
```

`Student` is the name of the contract.

Inside the contract, we can define:

- Variables
- Functions
- Constructors
- Rules
- Addresses
- Payments
- Other logic

Think of the contract as a container that holds the smart contract's data and functions.

---

# 6. What is Remix IDE?

**Remix IDE is a web-based development environment used to write, compile, deploy and test Solidity smart contracts.**

You can think of Remix as:

```text
VS Code for Solidity
```

But Remix does more than just writing code.

It allows you to:

```text
Write Solidity code
       ↓
Compile Solidity code
       ↓
Deploy smart contract
       ↓
Call functions
       ↓
See results
```

Remix is very useful when learning Solidity because you don't need to set up a complete blockchain development environment.

---

# 7. What does IDE mean?

IDE means:

**Integrated Development Environment**

It is a software environment where developers can write and work with code.

For example:

```text
VS Code → General programming IDE/editor
PyCharm → Python
Remix → Solidity and smart contracts
```

Remix provides different tools in one place:

```text
Code Editor
Compiler
Deployment tools
Contract interaction
Console
```

---

# 8. How Solidity, Remix and Smart Contract are connected

This is one of the most important things to understand.

They are not three different types of blockchain.

They have different purposes.

```text
Solidity
   ↓
Programming language
   ↓
Used to write smart contract

Remix IDE
   ↓
Development tool
   ↓
Used to write, compile, deploy and test Solidity

Smart Contract
   ↓
The actual program
   ↓
Deployed and executed on blockchain
```

Simple example:

```text
You write:
Solidity code

        ↓

Using:
Remix IDE

        ↓

You compile it

        ↓

You deploy it

        ↓

It becomes:
Smart Contract on blockchain
```

---

# 9. Example

Suppose we write:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Student {

    string public name;
    uint public age;

    function setStudent(string memory _name, uint _age) public {
        name = _name;
        age = _age;
    }
}
```

Here:

### Solidity

The programming language is Solidity.

### Smart Contract

This part defines the smart contract:

```solidity
contract Student
```

### Variables

```solidity
string public name;
uint public age;
```

The contract stores:

```text
name
age
```

### Function

```solidity
function setStudent(string memory _name, uint _age) public
```

This function allows someone to provide:

```text
name
age
```

For example:

```text
_name = "Srajan"
_age = 25
```

Then the contract stores:

```text
name = "Srajan"
age = 25
```

---

# 10. What happens in Remix?

You write the contract in Remix:

```solidity
contract Student {
    string public name;
    uint public age;
}
```

Then you click **Compile**.

Remix checks whether your Solidity code is correct.

If compilation succeeds, Remix generates information needed to deploy and interact with the contract.

Then you go to the **Deploy & Run Transactions** section.

You click:

```text
Deploy
```

Now the contract is deployed to the selected blockchain environment.

After deployment, Remix shows the deployed contract.

You can then interact with its functions.

---

# 11. What does Deploy mean?

**Deploy means putting the smart contract onto a blockchain.**

Before deployment:

```text
Your Solidity code
```

After deployment:

```text
Smart Contract
      ↓
Blockchain
```

Deployment creates a contract at a blockchain address.

For example:

```text
0x1234...ABCD
```

That address identifies the deployed contract.

---

# 12. What is Compile?

The blockchain does not directly understand normal Solidity source code.

So Solidity code needs to be converted into a form that the blockchain's execution environment can use.

The **Solidity compiler** does this.

The process is roughly:

```text
Solidity source code
        ↓
     Compiler
        ↓
Bytecode + ABI
```

The two important outputs you will see often are:

### Bytecode

The code that can be deployed and executed by the blockchain.

### ABI

ABI stands for **Application Binary Interface**.

It tells applications how they can interact with the smart contract.

For example, if your contract has:

```solidity
function setStudent(...)
```

the ABI provides the information needed for an application to call that function.

---

# 13. What is Deploy & Run Transactions in Remix?

This is the Remix section where you interact with the blockchain.

You can select:

```text
Environment
Account
Contract
```

Then:

```text
Deploy
```

After deployment, Remix shows:

```text
Deployed Contracts
```

Under the deployed contract, you can see its functions.

For example:

```text
Student
-----------------
name
age
setStudent
```

You can click the functions and provide values.

---

# 14. Where do input fields come from?

This is an important point.

Suppose you write:

```solidity
function setStudent(string memory _name, uint _age) public {
    name = _name;
    age = _age;
}
```

Remix sees that the function requires two parameters:

```text
_name
_age
```

So Remix automatically provides an input field for them.

You might see something like:

```text
setStudent

[ "Srajan", 25 ]

Transact
```

You enter the values and click the function button.

You did not manually create those input boxes in Remix.

**Remix creates them based on your contract's ABI.**

---

# 15. What are Read and Write Functions?

This is another very important concept.

Suppose you have:

```solidity
string public name;
```

Because `name` is `public`, Solidity automatically creates a getter function.

In Remix, you may see:

```text
name
```

Clicking it reads the value.

This is a **read operation**.

For example:

```text
name → "Srajan"
```

A function such as:

```solidity
function setStudent(string memory _name) public {
    name = _name;
}
```

changes blockchain data.

This is a **write operation**.

---

# 16. Read vs Write

### Read

Used to retrieve information.

Example:

```text
What is the student's name?
```

The blockchain gives you the stored value.

Generally, a read-only call does not require a blockchain transaction.

### Write

Used to change blockchain data.

Example:

```text
Change student's name to Rahul
```

This requires a transaction when interacting with an actual blockchain.

So remember:

```text
Read → Get information

Write → Change information
```

---

# 17. What is an Account?

When you interact with a blockchain, you normally use an account.

An account has an address such as:

```text
0xABC123...
```

Think of an address like an account identifier.

For example:

```text
Account A
Address: 0x111...

Account B
Address: 0x222...
```

When Account A sends a transaction, the blockchain can identify the sender.

In Solidity, we can access the sender using:

```solidity
msg.sender
```

---

# 18. What is `msg.sender`?

`msg.sender` tells you:

> Who called this function?

Example:

```solidity
function setAddress() public {
    myAddress = msg.sender;
}
```

Suppose Account A calls the function.

Then:

```text
msg.sender = Account A's address
```

If Account B calls it:

```text
msg.sender = Account B's address
```

So:

```text
msg.sender
```

means the address of the account that made the current call/transaction.

---

# 19. What is `msg.value`?

`msg.value` tells you:

> How much cryptocurrency was sent with the current transaction/call, measured in wei.

For example:

```solidity
function recordMessage() public payable {
    lastSender = msg.sender;
    lastValue = msg.value;
}
```

Here:

```text
msg.sender → Who sent/called?

msg.value → How much ETH was sent?
```

`msg.value` is used with a `payable` function.

---

# 20. What does `payable` mean?

`payable` means the function is allowed to receive cryptocurrency such as ETH.

Example:

```solidity
function deposit() public payable {
}
```

Now the function can receive ETH.

Without `payable`:

```solidity
function deposit() public {
}
```

the function cannot normally receive ETH along with the call.

So remember:

```text
payable → Can receive ETH

msg.value → Amount of ETH sent
```

---

# 21. What is a Constructor?

A constructor is a special function that runs **only once when the contract is deployed**.

Example:

```solidity
contract Student {

    string public name;

    constructor(string memory _name) {
        name = _name;
    }
}
```

When you deploy this contract, Remix will ask you for the constructor value:

```text
_name
```

You could enter:

```text
Srajan
```

After deployment:

```text
name = "Srajan"
```

The constructor is mainly used to set initial values.

Think:

```text
Deploy contract
      ↓
Constructor runs once
      ↓
Initial values are stored
```

---

# 22. Complete Picture

The whole Solidity development process can be remembered like this:

```text
1. Write Solidity code
          ↓
2. Use Remix IDE
          ↓
3. Compile the code
          ↓
4. Get bytecode + ABI
          ↓
5. Choose blockchain environment
          ↓
6. Deploy contract
          ↓
7. Smart contract gets blockchain address
          ↓
8. Interact with functions
          ↓
9. Read data or change data
```

---

# 23. Very Simple Difference

| Term           | Meaning                                                                             |
| -------------- | ----------------------------------------------------------------------------------- |
| Blockchain     | Network where data and smart contracts can be stored/executed                       |
| Smart Contract | Program deployed on a blockchain                                                    |
| Solidity       | Programming language used to write smart contracts                                  |
| Remix IDE      | Tool used to write, compile, deploy and test Solidity                               |
| Compiler       | Converts Solidity code into blockchain-executable form and produces ABI information |
| Bytecode       | Machine-readable code deployed for execution                                        |
| ABI            | Information describing how applications interact with the contract                  |
| Deploy         | Put the smart contract onto a blockchain                                            |
| `msg.sender`   | Address that made the current call/transaction                                      |
| `msg.value`    | Amount of ETH sent with the call, in wei                                            |
| `payable`      | Allows a function to receive ETH                                                    |
| Constructor    | Runs once during contract deployment                                                |

## One-line revision

**Solidity is the language, Remix is the development tool, and a smart contract is the program you write and deploy on a blockchain.**
