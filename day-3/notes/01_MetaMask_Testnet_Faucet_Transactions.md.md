# MetaMask, Testnet, Faucet & ETH Transactions

# 1. First understand the big picture

When learning Ethereum, you will work with these things:

```text
MetaMask
   ↓
Account
   ↓
Blockchain Network
   ↓
Test ETH
   ↓
Transaction
   ↓
Gas Fee
   ↓
Block
   ↓
Block Explorer
```

Let's understand each one.

---

# 2. What is a Blockchain Network?

A **blockchain network** is a network of computers that maintains and shares the blockchain.

Think of it as a **shared digital record book**.

```text
Computer A ─── Computer B
     │              │
     │              │
Computer C ─── Computer D
```

These computers work together to maintain the blockchain.

### Ethereum has different networks

For example:

```text
Ethereum Mainnet
       ↓
Real Ethereum blockchain
       ↓
Real ETH
```

And:

```text
Sepolia Testnet
       ↓
Ethereum testing network
       ↓
Test ETH
```

---

# 3. What is Mainnet?

**Mainnet = real blockchain network.**

For Ethereum:

```text
Ethereum Mainnet
       ↓
Real ETH
       ↓
Real money
```

If you send ETH on Mainnet, you are dealing with real value.

Therefore, as a beginner, don't use Mainnet for practice.

---

# 4. What is a Testnet?

**Testnet = practice version of a blockchain network.**

For example:

```text
Sepolia
   ↓
Ethereum Testnet
   ↓
Test ETH
   ↓
Learning & Development
```

Test ETH has **no real monetary value**.

You can use it to practice:

- Sending ETH
- Receiving ETH
- Paying gas
- Deploying smart contracts
- Testing dApps

---

# 5. What is MetaMask?

**MetaMask is a wallet application that lets you manage blockchain accounts and interact with blockchain networks.**

Think about a banking app:

```text
Bank App
   ↓
Bank Account
   ↓
Balance
   ↓
Send Money
```

MetaMask:

```text
MetaMask
   ↓
Blockchain Account
   ↓
ETH Balance
   ↓
Send ETH
```

MetaMask can manage multiple accounts.

For example:

```text
MetaMask
   |
   ├── Account 1
   ├── Account 2
   └── Account 3
```

---

# 6. What is an Account?

An **account** is your identity on a blockchain.

For example:

```text
Account 1

Address:
0xABC123........
```

The address is like an account number.

In a bank:

```text
Bank
 ↓
Account
 ↓
Account Number
 ↓
Money
```

In blockchain:

```text
Blockchain
 ↓
Account
 ↓
Address
 ↓
ETH / Tokens
```

You can give someone your **public address** so they can send you ETH.

---

# 7. Account vs Wallet

This is important.

### Wallet

MetaMask is the wallet application.

### Account

An individual blockchain account inside MetaMask.

Think:

```text
MetaMask Wallet
       |
       ├── Account 1
       |
       └── Account 2
```

Each account has its own:

- Address
- Balance
- Transactions

---

# 8. What is a Seed Phrase?

When creating MetaMask, you receive a **Secret Recovery Phrase**.

Think of it as the **master key** for your wallet.

Conceptually:

```text
Secret Recovery Phrase
          ↓
       MetaMask
          ↓
    ┌─────┴─────┐
    ↓           ↓
Account 1    Account 2
```

If you lose your computer, the recovery phrase can help restore the wallet and its accounts.

### VERY IMPORTANT

Never share your:

- Secret Recovery Phrase
- Private key
- Wallet password

Your **public address** can be shared.

---

# 9. What is a Faucet?

A **faucet** is a service that gives you free **testnet tokens**.

Think about a water faucet:

```text
Water Faucet
     ↓
   Water
```

Crypto faucet:

```text
Crypto Faucet
      ↓
   Test ETH
```

That's where the name comes from.

---

# 10. Why does the Faucet give free ETH?

Because it is **test ETH**, not real ETH.

You don't want to spend real money just to practice blockchain transactions.

Instead:

```text
Sepolia Testnet
       ↓
Faucet
       ↓
Free Test ETH
       ↓
Practice
```

---

# 11. How does the Faucet know where to send ETH?

Your MetaMask account has a public address.

For example:

```text
0xABC123...
```

You copy this address and provide it to the faucet.

The faucet then sends test ETH to that address.

Conceptually:

```text
Faucet
   |
   | Send 0.5 test ETH
   ↓
0xABC123...
Your Account
```

The faucet is basically sending a blockchain transaction to your address.

---

# 12. Is it safe to give a Faucet my address?

Your **public address** is okay to provide.

For example:

```text
0xABC123...
```

But NEVER give a faucet:

```text
❌ Secret Recovery Phrase
❌ Private Key
❌ MetaMask Password
```

A faucet only needs your public wallet address.

---

# 13. Why do I need Test ETH?

Because transactions require **gas**.

Suppose:

```text
Account 1
   |
   | Send 0.1 ETH
   ↓
Account 2
```

The blockchain has to process this transaction.

Processing costs gas.

So:

```text
Transaction
    +
Gas Fee
    =
Total cost
```

On Ethereum, the native currency used to pay gas is **ETH**.

On Sepolia, you use **Sepolia ETH** for testnet gas.

---

# 14. What is Gas?

**Gas is the cost of performing computation/operations on the blockchain.**

For example:

```text
Send ETH
     ↓
Blockchain processes transaction
     ↓
Gas is required
```

The transaction sender normally pays the gas fee.

This is an important point from your transcript.

---

# 15. Who Pays the Gas?

Suppose:

```text
Account 1
   |
   | Send 0.1 ETH
   ↓
Account 2
```

The gas fee is deducted from **Account 1**, because Account 1 sent the transaction.

So:

```text
Account 1
   |
   ├── 0.1 ETH → Account 2
   |
   └── Gas fee → Transaction processing
```

Account 2 doesn't pay the gas for receiving that transfer.

---

# 16. Why is ETH also called the Gas Token?

Every blockchain has a native currency.

Ethereum:

```text
Ethereum → ETH
```

Polygon:

```text
Polygon → POL
```

The native currency is commonly used to pay transaction fees on that network.

So when someone says:

> "You need the gas token"

they generally mean:

> "You need the network's native currency to pay transaction fees."

---

# 17. Get Test ETH

Your practical flow is:

```text
MetaMask
   ↓
Account 1
   ↓
Copy public address
   ↓
Open Sepolia Faucet
   ↓
Paste address
   ↓
Request test ETH
   ↓
Wait
   ↓
Test ETH arrives
```

For example:

```text
Before:

Account 1
0 ETH
```

After:

```text
Account 1
0.5 Sepolia ETH
```

The exact amount depends on the faucet.

---

# 18. Create Account 2

Now we follow the transcript.

MetaMask can have multiple accounts.

Create:

```text
Account 2
```

You now have:

```text
MetaMask
   |
   ├── Account 1
   |     0.5 ETH
   |
   └── Account 2
         0 ETH
```

Account 1 and Account 2 have different addresses.

For example:

```text
Account 1 → 0xAAA...
Account 2 → 0xBBB...
```

---

# 19. Send ETH from Account 1 to Account 2

Now switch to Account 1.

Choose **Send**.

Enter Account 2's address.

Enter:

```text
0.1 ETH
```

Conceptually:

```text
Account 1
0.5 ETH
   |
   | 0.1 ETH
   ↓
Account 2
```

---

# 20. MetaMask Shows the Gas Fee

Before confirming, MetaMask estimates the gas fee.

You might see something like:

```text
Amount:
0.1 ETH

Estimated gas fee:
0.0000... ETH
```

Remember:

```text
Amount sent
+
Gas fee
=
Total cost to sender
```

The actual fee changes depending on the network conditions and transaction.

---

# 21. Confirm the Transaction

You click:

**Confirm**

Now MetaMask creates and signs the transaction.

The basic flow is:

```text
MetaMask
   ↓
Create transaction
   ↓
Sign transaction
   ↓
Broadcast transaction
   ↓
Blockchain network
```

---

# 22. What does "Pending" mean?

After sending, the transaction may show:

```text
Pending
```

This means:

> The transaction has been submitted to the network but has not yet been included in a block.

So:

```text
Created
   ↓
Broadcast
   ↓
Pending
   ↓
Included in Block
   ↓
Confirmed
```

---

# 23. What is a Block?

A blockchain stores transactions inside **blocks**.

Think of a block as a page in a digital record book.

```text
Block 100
----------------
Transaction A
Transaction B
Transaction C
```

Then:

```text
Block 101
----------------
Transaction D
Transaction E
```

And:

```text
Block 102
----------------
Your transaction
Transaction F
```

Blocks are connected together to form the blockchain.

---

# 24. What happens to your transaction?

When you send:

```text
Account 1
    ↓
0.1 ETH
    ↓
Account 2
```

the transaction is broadcast to the network.

Then a validator includes it in a block.

```text
Transaction
     ↓
Pending
     ↓
Validator
     ↓
Block
     ↓
Blockchain
```

Modern Ethereum uses validators rather than the old proof-of-work mining model, so the course's "mined" terminology is historical.

---

# 25. What is Etherscan?

**Etherscan is a block explorer.**

Think:

```text
Google
   ↓
Search the Internet
```

Etherscan:

```text
Etherscan
   ↓
Search/View Ethereum blockchain data
```

You can use it to see:

- Transactions
- Addresses
- Blocks
- Tokens
- Smart contracts

---

# 26. MetaMask vs Etherscan

Remember this simple difference:

### MetaMask

```text
INTERACT
```

You use MetaMask to:

- Manage accounts
- Sign transactions
- Send ETH
- Interact with dApps

### Etherscan

```text
INSPECT
```

You use Etherscan to:

- View transactions
- View addresses
- View blocks
- Check transaction status

So:

```text
MetaMask = Do something

Etherscan = See what happened
```

---

# 27. Transaction Hash

Every transaction gets a unique ID called a **Transaction Hash**.

Example:

```text
0x8f7a9c..............
```

Think of it as a **tracking number**.

```text
Courier
   ↓
Tracking Number
```

Blockchain:

```text
Transaction
   ↓
Transaction Hash
```

You can use the hash to find your transaction on a block explorer.

---

# 28. Transaction Status

You may see:

```text
Status: Success
```

This means the transaction was successfully processed.

You might also encounter a failed transaction.

For your first practice transaction, you want:

```text
Success
```

---

# 29. From and To

The transaction shows:

```text
From
To
```

For our example:

```text
From:
Account 1

To:
Account 2
```

So:

```text
Account 1
0xAAA...
    |
    | 0.1 ETH
    ↓
Account 2
0xBBB...
```

---

# 30. Value

**Value** represents the amount of ETH transferred in the transaction.

For example:

```text
Value = 0.1 ETH
```

means 0.1 ETH was transferred.

---

# 31. Transaction Fee

The transaction will also show:

```text
Transaction Fee
```

This is the gas cost paid to process the transaction.

Remember:

```text
Transaction Fee
      =
Gas Used × Gas Price
```

---

# 32. Gas Used

For a basic ETH transfer, the transcript discusses:

```text
Gas Used = 21,000
```

A simple ETH transfer with no additional data normally uses 21,000 gas.

Smart-contract transactions can use much more gas because they perform more computation.

---

# 33. Gas Price

Gas price is commonly displayed in **Gwei**.

For example:

```text
Gas Price = 2 Gwei
```

Remember:

```text
1 ETH = 1,000,000,000 Gwei
```

So Gwei is a much smaller unit used to express gas prices.

---

# 34. Block Number

Your transaction will be included in a particular block.

For example:

```text
Block Number = 10,500,000
```

This tells you which block contains your transaction.

Think:

```text
Block 100
Block 101
Block 102 ← Your transaction
Block 103
```

---

# 35. Block Confirmations

Suppose your transaction is in:

```text
Block 102
```

Then:

```text
Block 103
Block 104
Block 105
```

are added afterward.

These additional blocks provide confirmations.

Simple understanding:

> **More confirmations means more blocks have been added after the block containing your transaction.**

---

# 36. Timestamp

The transaction also contains a timestamp.

It tells you approximately when the transaction was recorded/included.

```text
Timestamp
    =
When the transaction was processed
```

---

# 37. What is Nonce?

Nonce is slightly more advanced.

Think of it as the **transaction sequence number for an account**.

For example:

```text
Account 1

Transaction 1 → Nonce 0
Transaction 2 → Nonce 1
Transaction 3 → Nonce 2
Transaction 4 → Nonce 3
```

So:

> **Nonce helps maintain the order of transactions from an account.**

---

# 38. Why can a Transaction Get Stuck?

Suppose:

```text
Transaction A
Nonce = 0
Gas price = very low
```

It doesn't get processed.

Then:

```text
Transaction B
Nonce = 1
Gas price = high
```

Transaction B may still have to wait for the earlier nonce.

Think of a queue:

```text
Person 1
   ↓
Person 2
   ↓
Person 3
```

Person 2 can't simply become Person 1.

Similarly:

```text
Nonce 0
   ↓
Nonce 1
   ↓
Nonce 2
```

This is why the transcript discusses pending transactions and nonce ordering.

---

# 39. Testnet vs Mainnet — Very Important

The transcript explains that testnets can be:

- Reset
- Shut down
- Put under maintenance
- Replaced
- Wiped

So testnet data should not be treated as permanent.

Mainnet is different:

```text
Mainnet
   ↓
Real blockchain
   ↓
Real ETH
   ↓
Real value
```

Testnet:

```text
Testnet
   ↓
Testing blockchain
   ↓
Test ETH
   ↓
No real monetary value
```

---

# 40. Complete Practical Flow

Now put everything together.

```text
                META MASK
                    |
                    ↓
                Account 1
                    |
                    ↓
              Public Address
                    |
                    ↓
              Sepolia Network
                    |
                    ↓
                Faucet
                    |
                    ↓
             Test ETH Received
                    |
                    ↓
              Account 1 has ETH
                    |
                    ↓
              Create Account 2
                    |
                    ↓
          Account 1 → Account 2
                    |
                    ↓
              Transaction
                    |
                    ↓
                Gas Fee
                    |
                    ↓
               Broadcast
                    |
                    ↓
                 Pending
                    |
                    ↓
             Included in Block
                    |
                    ↓
                Confirmed
                    |
                    ↓
               Block Explorer
                    |
                    ↓
       ┌─────────────────────────┐
       │ Transaction Hash        │
       │ Status                  │
       │ Block Number            │
       │ Confirmations           │
       │ Timestamp               │
       │ From                    │
       │ To                      │
       │ Value                   │
       │ Transaction Fee         │
       │ Gas Price               │
       │ Gas Used                │
       │ Nonce                   │
       └─────────────────────────┘
```

# 41. One Simple Real-Life Example

Imagine you have a **practice bank**.

```text
Practice Bank
      ↓
Practice Account
      ↓
Practice Money
```

You receive free practice money from a practice-money machine:

```text
Faucet
   ↓
Test ETH
```

Then:

```text
Account 1
   ↓
Send 0.1 ETH
   ↓
Account 2
```

The bank charges a small practice processing fee:

```text
Gas Fee
```

The transaction gets recorded in a page:

```text
Block
```

And you can open a public website to inspect the record:

```text
Block Explorer
```

---

# 42. Most Important Definitions for Revision

| Term                   | Easy meaning                                                |
| ---------------------- | ----------------------------------------------------------- |
| **Blockchain**         | Shared digital record maintained by a network of computers  |
| **Blockchain Network** | The network on which a particular blockchain operates       |
| **Ethereum**           | A blockchain platform                                       |
| **Mainnet**            | Real Ethereum network                                       |
| **Testnet**            | Ethereum network used for testing                           |
| **Sepolia**            | Current Ethereum testnet used for development/testing       |
| **MetaMask**           | Wallet used to manage accounts and interact with blockchain |
| **Account**            | Your blockchain identity                                    |
| **Address**            | Public identifier of an account                             |
| **Faucet**             | Service that gives free testnet tokens                      |
| **Test ETH**           | ETH used for testing; no real monetary value                |
| **Transaction**        | An instruction sent to the blockchain                       |
| **Gas**                | Cost of processing a blockchain operation                   |
| **Gas Price**          | Price paid per unit of gas                                  |
| **Gas Used**           | Amount of gas consumed                                      |
| **Transaction Fee**    | Gas Used × Gas Price                                        |
| **Block**              | A group of blockchain transactions recorded together        |
| **Transaction Hash**   | Unique ID of a transaction                                  |
| **Block Number**       | Number identifying the block containing a transaction       |
| **Confirmation**       | Additional blocks added after your transaction's block      |
| **Nonce**              | Transaction sequence number for an account                  |
| **Etherscan**          | Block explorer for Ethereum blockchain data                 |

---

# 43. The 7 Things You Must Remember

If you're a complete beginner, focus on these first:

### 1. Network

**Where is my transaction happening?**

```text
Sepolia
```

### 2. Account

**Who am I on the blockchain?**

```text
Account 1
```

### 3. Address

**Where can someone send me ETH?**

```text
0xABC...
```

### 4. Faucet

**Where can I get free test ETH?**

```text
Faucet
```

### 5. Gas

**What do I pay to process a transaction?**

```text
Gas fee
```

### 6. Transaction

**What am I asking the blockchain to do?**

```text
Send 0.1 ETH
```

### 7. Block Explorer

**Where can I see what happened?**

```text
Etherscan / Sepolia explorer
```

---

# Final Mental Model

Whenever you think about sending ETH, think:

```text
WHERE?
   ↓
Network (Sepolia)

WHO?
   ↓
Account

WHERE TO?
   ↓
Address

HOW DO I GET TEST ETH?
   ↓
Faucet

WHAT AM I DOING?
   ↓
Transaction

WHAT DO I PAY?
   ↓
Gas

WHERE IS IT RECORDED?
   ↓
Block

HOW DO I CHECK IT?
   ↓
Block Explorer
```

Once this flow is clear, **MetaMask → transactions → gas → Etherscan → smart-contract transactions** will become much easier to understand.
