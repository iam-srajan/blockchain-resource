### What does peer-to-peer mean?

**Peer-to-peer means computers communicate directly with other computers, rather than everything going through one central computer.**

For example:

**Centralized system:**

`Your computer → Central server ← Other computers`

The central server is in the middle.

**Peer-to-peer network:**

`Computer A ↔ Computer B ↔ Computer C`
`     ↕             ↕`
`Computer D ↔ Computer E`

Here, each computer is a **peer**. There isn't necessarily one central server controlling communication.>

**"When I use MetaMask, how does MetaMask actually communicate with the Ethereum blockchain?"**

---

### How does this work in Ethereum?

Ethereum nodes communicate with other Ethereum nodes using a **peer-to-peer network**.

For example:

1. You submit a transaction.
2. Your Ethereum node receives it.
3. Your node shares the transaction with its peers.
4. Those peers share it with their peers.
5. Eventually, the transaction propagates through a large portion of the network.
6. A block producer includes the transaction in a block.
7. That block is propagated through the P2P network.
8. Other nodes receive and verify it.

So you can connect the concepts:

**Ethereum network**
→ consists of many **Ethereum nodes**
→ nodes communicate using **peer-to-peer networking**
→ they share **transactions and blocks**
→ nodes independently verify the data according to Ethereum's rules.

The key idea is: **P2P describes how the nodes communicate with each other.**

# 1. First: What is MetaMask?

You already know that MetaMask is a wallet.

But technically, MetaMask is **not the blockchain**.

Think of MetaMask as an **app/interface that allows you to interact with a blockchain**.

For example, you open MetaMask and see:

```text
Account 1

0x1234...5678

0.5 SepoliaETH
```

You might ask:

> Where did MetaMask get this 0.5 ETH information?

MetaMask needs to ask the Ethereum network.

But MetaMask doesn't normally run the entire Ethereum blockchain on your computer.

So it needs another way to communicate with Ethereum.

---

# 2. What is a blockchain node?

This is the first important concept.

A **node is a computer running blockchain software**.

For Ethereum, the node runs Ethereum software and participates in the Ethereum network.

You can imagine:

```text
Ethereum Network

Node 1
Node 2
Node 3
Node 4
Node 5
Node 6
...
```

These computers communicate with each other and maintain blockchain information.

For example, they know about blocks:

```text
Block 100
   ↓
Block 101
   ↓
Block 102
   ↓
Block 103
```

And those blocks contain transactions.

For example:

```text
Block 103

Transaction 1:
A → B : 1 ETH

Transaction 2:
C → D : 2 ETH

Transaction 3:
You → Smart Contract
```

So:

> **Blockchain node = computer that participates in the blockchain network and maintains blockchain data.**

---

# 3. Why doesn't MetaMask simply run a node?

It could be done, but running a blockchain node can be complicated.

Imagine you want to run your own Ethereum node.

You need:

- computer/server
- lots of storage
- internet connection
- Ethereum software
- synchronization
- maintenance
- monitoring
- high availability

For a normal user, that's unnecessary.

So companies provide this infrastructure for applications.

example is **Infura**.

Another is **Alchemy**.

---

# 4. What is Infura?

Think of Infura as a **middleman between your application and blockchain nodes**.

Instead of:

```text
MetaMask → My own Ethereum Node
```

you can have:

```text
MetaMask
    ↓
Infura
    ↓
Ethereum Node
    ↓
Ethereum Network
```

Infura operates blockchain infrastructure and provides access to blockchain nodes through APIs/RPC endpoints.

So MetaMask doesn't have to maintain the entire node infrastructure itself.

---

# 5. What is RPC?

You will hear this word a lot in blockchain development.

**RPC = Remote Procedure Call**

Don't worry about the technical name.

For now, think:

> **RPC is a way for your application to communicate with a blockchain node.**

For example, MetaMask might need to ask:

> "What is the balance of this address?"

It sends a request through RPC.

```text
MetaMask
   ↓
RPC request
   ↓
Ethereum Node
   ↓
"Balance = 2 ETH"
   ↓
MetaMask
```

Then MetaMask displays:

```text
2 ETH
```

So you can remember:

> **RPC = communication bridge between an application and a blockchain node.**

---

# 6. Let's use a real example

Suppose your MetaMask address is:

```text
0xABC123
```

The Ethereum blockchain says:

```text
0xABC123 → 2 ETH
```

You open MetaMask.

MetaMask needs to know your balance.

It can do something like:

```text
"Hey RPC provider,
please tell me the balance
of 0xABC123."
```

The request reaches an Ethereum node.

The node checks the blockchain state.

It finds:

```text
0xABC123 → 2 ETH
```

Then returns:

```text
2 ETH
```

MetaMask displays:

```text
2 ETH
```

So MetaMask didn't invent the 2 ETH.

It **read the information from the blockchain through a node**.

---

# 7. Very important: Where is your ETH?

This is something beginners often misunderstand.

You might think:

> "My ETH is stored inside MetaMask."

Not exactly.

Your ETH balance is part of the **blockchain's state**.

Your wallet has an address:

```text
0xABC123
```

The blockchain maintains information associated with that address.

For example:

```text
Blockchain

0xABC123 → 2 ETH
0xDEF456 → 5 ETH
0xXYZ789 → 10 ETH
```

MetaMask simply gives you a convenient way to interact with your address.

---

# 8. Then what does MetaMask actually keep?

One very important thing is your **private key**.

Think about it like this:

```text
Blockchain
    ↓
Stores blockchain state
    ↓
Your address → balance/assets
```

While:

```text
MetaMask
    ↓
Manages your wallet
    ↓
Private key
    ↓
Signs transactions
```

Your private key allows you to prove:

> "I am authorized to make a transaction from this address."

---

# 9. Example: Sending ETH

Suppose you have:

```text
Your address:
0xAAA

Balance:
5 ETH
```

You want to send:

```text
1 ETH
```

to:

```text
0xBBB
```

You use MetaMask.

The process is roughly:

```text
You
 ↓
MetaMask
 ↓
You approve transaction
 ↓
MetaMask signs transaction
 ↓
RPC
 ↓
Ethereum Node
 ↓
Ethereum Network
 ↓
Transaction included in block
```

After confirmation, the blockchain state changes.

Before:

```text
0xAAA → 5 ETH
0xBBB → 2 ETH
```

After:

```text
0xAAA → 4 ETH
0xBBB → 3 ETH
```

MetaMask can then read the updated state.

---

# 10. Now let's understand the faucet

You used a faucet while learning Sepolia.

You probably did something like:

```text
Connect / enter wallet address
        ↓
Request test ETH
        ↓
Wait
        ↓
ETH appears in MetaMask
```

You may wonder:

> "How did the faucet put ETH into my MetaMask?"

It didn't.

This is extremely important.

The faucet sent a **blockchain transaction to your wallet address**.

For example:

```text
Faucet Address
      ↓
      1 Sepolia ETH
      ↓
Your Address
0xABC123
```

That transaction is recorded on the Sepolia blockchain.

---

# 11. What happens behind the faucet?

Imagine you enter:

```text
0xABC123
```

into the faucet.

The architecture can be simplified as:

```text
Your Browser
     ↓
Faucet Website
     ↓
Faucet Backend
     ↓
RPC Provider
     ↓
Sepolia Node
     ↓
Sepolia Blockchain
```

The faucet backend creates/sends a transaction.

For example:

```text
From:
Faucet wallet

To:
0xABC123

Amount:
0.5 Sepolia ETH
```

The blockchain processes it.

---

# 12. Why does MetaMask show the faucet ETH?

After the transaction is confirmed:

```text
Sepolia Blockchain

0xABC123 → 0.5 ETH
```

MetaMask asks the network:

> "What is the balance of 0xABC123?"

The answer:

```text
0.5 ETH
```

MetaMask displays:

```text
0.5 SepoliaETH
```

So remember:

> **Faucet sends ETH to your blockchain address. MetaMask reads that balance from the blockchain.**

---

# 13. Now let's understand Etherscan

Etherscan is a **blockchain explorer**.

You can use it to search for:

- addresses
- transactions
- blocks
- smart contracts
- balances
- gas information

For example, you search:

```text
0xABC123
```

Etherscan might show:

```text
Balance: 0.5 ETH

Transactions:
TX 1
TX 2
TX 3
```

Where did Etherscan get this information?

From blockchain infrastructure/nodes.

Conceptually:

```text
Ethereum Blockchain
       ↓
Etherscan infrastructure
       ↓
Etherscan database/index
       ↓
Etherscan website
       ↓
You
```

Etherscan processes blockchain data so that it can provide a searchable website.

---

# 14. Why does MetaMask and Etherscan show the same transaction?

Because both ultimately work with the **same underlying blockchain**.

Imagine you send:

```text
0.1 ETH
```

from:

```text
0xAAA
```

to:

```text
0xBBB
```

Once the transaction is included in the Ethereum blockchain:

```text
Ethereum Blockchain
       |
       |-------------------|
       ↓                   ↓
   MetaMask            Etherscan
       ↓                   ↓
    Shows TX            Shows TX
```

They may use different infrastructure, but the blockchain is the underlying source of truth.

---

# 15. What does "single source of truth" mean?

This phrase is important.

Suppose the Ethereum blockchain says:

```text
0xAAA → 4 ETH
```

MetaMask cannot simply decide:

```text
0xAAA → 100 ETH
```

Etherscan also cannot decide:

```text
0xAAA → 50 ETH
```

The actual blockchain state determines the truth.

So:

> **The blockchain is the source of truth for the blockchain's state.**

Wallets, explorers, websites and applications read that information.

---

# 16. What does synchronization mean?

Suppose Ethereum has:

```text
Block 100
Block 101
Block 102
Block 103
```

A node needs to keep up with the network.

If a new block arrives:

```text
Block 104
```

nodes receive and process it.

Conceptually:

```text
Node A → Block 104
Node B → Block 104
Node C → Block 104
Node D → Block 104
```

They synchronize with the network.

So:

> **Synchronization means a node keeps its blockchain data up to date with the network.**

---

# 17. Why are blocks connected?

Suppose:

```text
Block 100
   ↓
Block 101
   ↓
Block 102
```

Each block contains information related to the previous block's hash.

Simplified:

```text
Block 100
Hash = AAA

        ↓

Block 101
Previous Hash = AAA
Hash = BBB

        ↓

Block 102
Previous Hash = BBB
Hash = CCC
```

This creates a chain.

If somebody changes Block 100:

```text
Original:

Block 100
Hash = AAA
```

After changing its data:

```text
Block 100
Hash = XXX
```

But Block 101 still contains:

```text
Previous Hash = AAA
```

Now something doesn't match.

That's one of the fundamental mechanisms that makes blockchain data difficult to alter.

---

# 18. What happens when you select Sepolia in MetaMask?

This connects directly to what you've been doing.

You select:

```text
Sepolia
```

MetaMask now needs to communicate with **Sepolia infrastructure**.

Conceptually:

```text
MetaMask
    ↓
Sepolia RPC
    ↓
Sepolia Nodes
    ↓
Sepolia Blockchain
```

When you select:

```text
Ethereum Mainnet
```

the connection becomes:

```text
MetaMask
    ↓
Ethereum Mainnet RPC
    ↓
Ethereum Mainnet Nodes
    ↓
Ethereum Mainnet Blockchain
```

These are different networks.

---

# 19. Mainnet vs Sepolia

This is very important.

### Ethereum Mainnet

Real ETH:

```text
ETH
```

Real transactions.

Real value.

### Sepolia

Test network:

```text
Sepolia ETH
```

Used for development/testing.

The two networks have different blockchain states.

For example:

```text
Ethereum Mainnet

Your Address
→ 0 ETH
```

while:

```text
Sepolia

Your Address
→ 2 Sepolia ETH
```

That's completely possible.

---

# 20. What if I switch to Polygon?

Polygon is another blockchain network.

So MetaMask can be thought of as a tool that lets you switch between networks.

For example:

```text
                    MetaMask
                       |
          ┌────────────┼────────────┐
          ↓            ↓            ↓
       Mainnet      Sepolia      Polygon
          ↓            ↓            ↓
       Ethereum      Sepolia      Polygon
       Blockchain   Blockchain   Blockchain
```

Each network has its own blockchain state.

---

# 21. Why Infura/Alchemy?

Because running your own blockchain node can be difficult.

Imagine you want to build a real application with thousands of users.

You need reliable access to blockchain nodes.

Instead of managing everything yourself:

```text
Your App
   ↓
Your own infrastructure
   ↓
Your own nodes
```

you can use:

```text
Your App
   ↓
Infura / Alchemy / RPC provider
   ↓
Blockchain Nodes
```

The infrastructure provider handles much of the difficult infrastructure work.

---

# 22. The entire transcript in one example

Let's say you are developing a Solidity smart contract in Remix.

You deploy it using MetaMask on Sepolia.

Here's what happens:

### Step 1 — You write the contract

```text
Remix
 ↓
Solidity Contract
```

### Step 2 — You click Deploy

Remix asks MetaMask to send a transaction.

```text
Remix
 ↓
MetaMask
```

### Step 3 — MetaMask asks you to approve

You approve the transaction.

MetaMask signs it using your wallet.

```text
MetaMask
 ↓
Signed transaction
```

### Step 4 — MetaMask sends the transaction through RPC

```text
MetaMask
 ↓
Sepolia RPC
 ↓
Sepolia Node
```

### Step 5 — Ethereum network processes it

The transaction gets included in a block.

```text
Sepolia Blockchain

Block 123
   ↓
Contract Deployment Transaction
```

### Step 6 — Contract now exists on Sepolia

You receive a contract address:

```text
0x123456...
```

### Step 7 — Etherscan can show it

Etherscan reads/indexes the blockchain data and shows:

```text
Contract Address
0x123456...

Transaction
0x789...
```

So the complete picture is:

```text
                 YOU
                  ↓
                Remix
                  ↓
               MetaMask
                  ↓
              Sepolia RPC
                  ↓
              Sepolia Node
                  ↓
          Sepolia Blockchain
                  ↓
              New Block
                  ↓
          Contract Deployed
                  ↓
              Etherscan
```

---

# 23. The five things you should remember

Remember these **five concepts**:

### 1. Blockchain

The actual distributed record of transactions and state.

```text
Block → Block → Block → Block
```

### 2. Node

A computer running blockchain software and participating in the network.

```text
Node → maintains/synchronizes blockchain data
```

### 3. RPC

The communication method/interface used by applications to talk to blockchain nodes.

```text
Application → RPC → Node
```

### 4. Infura / Alchemy

Infrastructure providers that give applications convenient access to blockchain nodes.

```text
MetaMask → Infura → Ethereum Node
```

### 5. MetaMask

A wallet/interface that manages your keys, signs transactions, and communicates with blockchain networks.

```text
You → MetaMask → RPC → Node → Blockchain
```

---

# The one diagram I want you to remember

```text
                         BLOCKCHAIN
                              ↑
                              |
                            NODES
                              ↑
                              |
                    RPC Provider
                 /       |        \
             Infura    Alchemy    Others
                ↑
                |
             MetaMask
                ↑
                |
               YOU
```

And when you use a faucet:

```text
                 FAUCET
                    ↓
              Faucet Backend
                    ↓
              RPC / Node
                    ↓
             Sepolia Blockchain
                    ↓
             Your Address
                    ↓
                MetaMask
                    ↓
             Shows your balance
```

**So there is no magic happening inside MetaMask.**

MetaMask is basically acting as your **wallet + interface**. The **blockchain nodes** communicate with the blockchain network, and services like **Infura/Alchemy** make it convenient for MetaMask and applications to access those nodes.
