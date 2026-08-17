# 1. What is hashing?

Hashing means:

> **Taking some input and converting it into a fixed-looking output called a hash or digest using a hash function.**

For example:

```text
Input
"Hello"

      ↓
   SHA-256
      ↓
Hash
2cf24dba5fb0a30e...
```

You can think of a hash function like a machine:

```text
        Input
          ↓
   ┌──────────────┐
   │ Hash Function│
   └──────────────┘
          ↓
       Hash/Digest
```

Ethereum and other blockchains use cryptographic hash functions extensively.

---

# 2. What is a hash?

A **hash** is the output produced by a hash function.

For example:

```text
"Hello"
   ↓
SHA-256
   ↓
2cf24dba5fb0a30e...
```

Here:

```text
"Hello" → Input

SHA-256 → Hash function

2cf24d... → Hash / Digest
```

The transcript uses the words **hash**, **hash value**, and **digest**. In this context, they essentially refer to the output of the hash function.

---

# 3. What happens if we change one character?

This is one of the most important properties of cryptographic hashing.

Suppose:

```text
Hello
```

produces:

```text
2cf24dba...
```

Now change it to:

```text
Hello!
```

The hash becomes completely different:

```text
334d016f...
```

Notice:

```text
Hello
```

and

```text
Hello!
```

are almost identical.

Only one character was added.

But their hashes are completely different.

This property is called the **avalanche effect**.

Think:

```text
Small change in input
        ↓
Huge change in hash
```

This becomes extremely useful for blockchain security.

---

# 4. Five important properties of a cryptographic hash

The transcript explains five major properties.

## Property 1: Deterministic

The same input always produces the same hash.

For example:

```text
Hello
 ↓
SHA-256
 ↓
ABC123...
```

If you run it:

```text
Hello
 ↓
SHA-256
 ↓
ABC123...
```

again, you get the same result.

It doesn't matter whether you run it:

- today
- tomorrow
- on your laptop
- on another computer

The result remains the same.

So:

> **Same input → Same hash**

---

# 5. Property 2: Fast to calculate

A cryptographic hash should generally be quick to calculate.

For example:

```text
Transaction data
       ↓
     SHA-256
       ↓
      Hash
```

The computer shouldn't have to wait hours to calculate the hash.

This is useful because blockchain nodes constantly calculate and verify hashes.

---

# 6. Property 3: One-way / difficult to reverse

This is extremely important.

Suppose I give you:

```text
2cf24dba...
```

and tell you:

> This is the SHA-256 hash of some input.

You should not be able to simply reverse it and obtain:

```text
Hello
```

There is no normal "decrypt hash" operation.

Conceptually:

```text
Hello
  ↓
Hash
```

is easy.

But:

```text
Hash
  ↓
Hello
```

is computationally infeasible in general.

You could try guessing inputs:

```text
Apple → hash → wrong
Banana → hash → wrong
Hello → hash → MATCH
```

This is essentially a brute-force approach.

For a properly chosen cryptographic hash, finding the original input this way can be impractical.

---

# 7. Property 4: Avalanche effect

As we discussed:

```text
Hello
```

might produce:

```text
ABC123...
```

while:

```text
Hello!
```

produces:

```text
XYZ987...
```

Even though only one character changed.

So:

> **A tiny change in input produces a dramatically different hash.**

This is extremely useful in blockchain.

---

# 8. Property 5: Collision resistance

A collision happens when:

```text
Input A
   ↓
Hash
```

and:

```text
Input B
   ↓
Same Hash
```

where:

```text
Input A ≠ Input B
```

For example, imagine:

```text
"Hello" → ABC123
"World" → ABC123
```

That would be a collision.

Cryptographic hash functions are designed to make it computationally infeasible to deliberately find such collisions.

---

# 9. What about MD5 and SHA-1?

The transcript mentions older hashing algorithms such as:

```text
MD5
SHA-1
```

They have known weaknesses, especially for collision resistance.

For modern security-sensitive applications, stronger algorithms are preferred.

For Ethereum, you'll encounter **Keccak-256** extensively.

One important terminology point:

> Ethereum commonly uses **Keccak-256**, which is closely related to SHA-3 but is not exactly the standardized SHA-3 algorithm.

So don't simply treat:

```text
Keccak-256 = SHA-3
```

as technically identical.

---

# 10. Now the important part: How does hashing create a blockchain?

This is the main reason the instructor is teaching hashing before transactions.

Imagine we have three blocks.

```text
Block 1
   ↓
Block 2
   ↓
Block 3
```

Each block contains information about the previous block.

Simplified:

```text
Block 1
Hash = ABC

Block 2
Previous Hash = ABC
Hash = DEF

Block 3
Previous Hash = DEF
Hash = GHI
```

So:

```text
Block 1
   │
   │ Hash: ABC
   ↓
Block 2
   │
   │ Hash: DEF
   ↓
Block 3
```

That's the **chain** in blockchain.

---

# 11. Think of each block as having a fingerprint

A very useful beginner analogy is:

> **A hash is like a digital fingerprint of data.**

Suppose:

```text
Block 1
Transactions:
A sends 1 ETH to B

Hash:
ABC123
```

The hash represents the contents of that block.

If somebody changes the transaction:

```text
A sends 1 ETH to B
```

to:

```text
A sends 100 ETH to B
```

the block's hash changes dramatically:

```text
ABC123
```

becomes something like:

```text
XYZ789
```

Now the next block still contains:

```text
Previous Hash = ABC123
```

But the modified Block 1 now produces:

```text
XYZ789
```

So there is a mismatch.

```text
Block 1
Actual hash = XYZ789

        ↓

Block 2
Previous hash = ABC123

        ❌ DOES NOT MATCH
```

The blockchain can detect that something has been changed.

---

# 12. Why does changing one old block affect later blocks?

This is the most important concept from the lecture.

Suppose:

```text
Block 1
Hash = AAA


Block 2
Previous Hash = AAA
Hash = BBB


Block 3
Previous Hash = BBB
Hash = CCC
```

Now someone changes Block 1.

Because its contents changed:

```text
Block 1
Old Hash = AAA

New Hash = XYZ
```

But Block 2 still says:

```text
Previous Hash = AAA
```

So Block 2 is now inconsistent.

If you tried to fix Block 2, its own hash would change.

For example:

```text
Block 2
Old Hash = BBB

New Hash = QQQ
```

Now Block 3 is broken because Block 3 says:

```text
Previous Hash = BBB
```

You would have to change Block 3 too.

Then the next block...

And the next...

And the next...

So:

```text
Change Block 1
     ↓
Block 1 hash changes
     ↓
Block 2 becomes invalid
     ↓
Block 2 hash changes
     ↓
Block 3 becomes invalid
     ↓
Block 3 hash changes
     ↓
Block 4 becomes invalid
     ↓
...
```

> Changing information in an earlier block changes all the blocks after it.

---

# 13. Why is this difficult for an attacker?

Imagine there are thousands or millions of blocks after the block you want to modify.

You can't simply change:

```text
Block 100
```

and walk away.

You would need to produce a consistent chain after it.

And in a real blockchain, there is an additional major problem:

> **You aren't controlling just one copy of the blockchain.**

---

# 14. This connects directly to blockchain nodes

This is something you've been asking about in your previous questions.

Ethereum has many independent nodes.

Conceptually:

```text
             Ethereum Network

        ┌───────────┐
        │   Node A  │
        └───────────┘
              │
        ┌───────────┐
        │   Node B  │
        └───────────┘
              │
        ┌───────────┐
        │   Node C  │
        └───────────┘
              │
        ┌───────────┐
        │   Node D  │
        └───────────┘
```

These nodes maintain and verify the blockchain's state according to the Ethereum protocol.

So suppose an attacker changes something in their local copy.

Their version might say:

```text
Block 100
Hash = XYZ
```

while other nodes have:

```text
Block 100
Hash = ABC
```

The attacker cannot simply declare:

> "Everyone, use my version."

The network follows its consensus rules to determine the canonical chain/state.

---

# 15. Very important: Hashing alone is not what makes Ethereum secure

This is an important improvement to the transcript's simplified explanation.

Hashing is **one fundamental component** of blockchain security, but it isn't the only one.

Ethereum's security also depends on things such as:

```text
Cryptographic hashing
+
Digital signatures
+
Consensus mechanism
+
Validators
+
Peer-to-peer networking
+
Economic incentives
```

So don't think:

> "Blockchain is secure only because of hashing."

Instead think:

> **Hashing helps make blockchain data tamper-evident, while consensus and cryptography help the network agree on valid state and transactions.**

---

# 16. Hashing vs encryption

Beginners often confuse these.

They are different.

### Encryption

Purpose:

> Hide information.

Conceptually:

```text
Original data
     ↓
Encryption
     ↓
Encrypted data
     ↓
Decryption
     ↓
Original data
```

You can decrypt it with the appropriate key.

### Hashing

Purpose:

> Create a fixed-size fingerprint of data.

```text
Original data
     ↓
Hash
     ↓
Digest
```

You don't normally "decrypt" a hash.

So:

```text
Encryption → can be decrypted

Hashing → designed to be one-way
```

---

# 17. Hashing in a blockchain: simple example

Let's create a tiny blockchain.

### Block 1

```text
Transactions:
A → B : 2 ETH

Previous Hash:
000

Hash:
AAA
```

### Block 2

```text
Transactions:
B → C : 1 ETH

Previous Hash:
AAA

Hash:
BBB
```

### Block 3

```text
Transactions:
C → D : 0.5 ETH

Previous Hash:
BBB

Hash:
CCC
```

So:

```text
Block 1
   │
   │ AAA
   ↓
Block 2
   │
   │ BBB
   ↓
Block 3
   │
   │ CCC
```

Now someone changes Block 1:

```text
A → B : 2 ETH
```

to:

```text
A → B : 200 ETH
```

The hash changes:

```text
AAA → XYZ
```

Now:

```text
Block 2

Previous Hash = AAA
```

but:

```text
Actual Block 1 Hash = XYZ
```

Therefore:

```text
❌ Blockchain inconsistency detected
```

---

# 18. paint/color example

Imagine:

```text
Block 1 + Transactions
       ↓
     Green
```

Then:

```text
Green + New Transactions
       ↓
     Purple
```

Then:

```text
Purple + New Transactions
       ↓
     Gray
```

Now change something in Block 1.

The first color changes:

```text
Green → Red
```

Then the next combination changes:

```text
Purple → Blue
```

Then the next:

```text
Gray → Orange
```

So one small change at the beginning causes changes throughout the chain.

That's an analogy for the avalanche effect of cryptographic hashing.

---

# 19. But there is an important limitation

You might ask:

> "If someone changes Block 1 and recalculates all the hashes, couldn't they create a new valid chain?"

Technically, this is why **hashing alone isn't enough** to secure a blockchain.

The network doesn't simply say:

> "The hashes look correct, therefore accept it."

Ethereum also has consensus rules and validators.

The attacker would need to convince the network that their altered history is the canonical valid history.

That's much more difficult than simply editing a local database.

---

# 20. How this connects with your previous transaction lesson

Previously you learned:

```text
MetaMask
   ↓
Creates transaction
   ↓
Signs transaction
   ↓
Ethereum nodes
   ↓
Transaction verified
   ↓
Validator includes it in block
```

Now add hashing:

```text
Transaction
     ↓
Included in Block
     ↓
Block has cryptographic relationships
     ↓
Blocks are linked through hashes
     ↓
Nodes can verify the chain/state
```

So you now have **two different cryptographic concepts**:

### Digital signature

Answers:

> **Who authorized this transaction?**

```text
Private Key
    ↓
Digital Signature
    ↓
Proves control of account
```

### Hash

Answers things like:

> **Has this data changed?**

```text
Data
 ↓
Hash
 ↓
Digital fingerprint
```

These are different jobs.

---

# 21. Hash vs digital signature

This distinction is extremely important for Ethereum development.

| Concept           | Main purpose                                |
| ----------------- | ------------------------------------------- |
| Hash              | Fingerprint of data                         |
| Digital signature | Proves authorization/control                |
| Private key       | Secret used to create signatures            |
| Public key        | Used for cryptographic verification         |
| Address           | Public identifier derived from key material |

For example:

```text
I want to send 1 ETH
        ↓
Transaction
        ↓
Hash/signing process
        ↓
Signature
        ↓
Ethereum nodes verify
```

---

# 22. Final mental model

Remember this simple chain:

```text
DATA
 ↓
HASH FUNCTION
 ↓
HASH / DIGEST
```

And for blockchain:

```text
Block 1
Hash = AAA
   ↓
Block 2
Previous Hash = AAA
Hash = BBB
   ↓
Block 3
Previous Hash = BBB
Hash = CCC
```

If Block 1 changes:

```text
Block 1 hash changes
        ↓
Block 2 reference becomes wrong
        ↓
Block 2 must change
        ↓
Block 3 reference becomes wrong
        ↓
Block 3 must change
        ↓
...
```

And because blockchain data is maintained across a decentralized network, an attacker can't simply edit one computer's copy and make everyone accept it.

---

# Key takeaways

1. **Hashing converts data into a hash/digest.**
2. **The same input produces the same hash.**
3. **A tiny input change produces a dramatically different hash.**
4. **A cryptographic hash is designed to be difficult to reverse.**
5. **It should be difficult to find two different inputs with the same hash (collision resistance).**
6. **Blockchain uses hashes to connect blocks and make changes detectable.**
7. **Changing an old block changes its hash and breaks the references in later blocks.**
8. **Nodes can recalculate and verify hashes.**
9. **Hashing is different from encryption.**
10. **Hashing does not work alone—Ethereum security also depends on signatures, validators, consensus, networking, and economic incentives.**
11. **Digital signatures answer "Who authorized this?"**
12. **Hashes help answer "Has this data changed?"**
