### What is SHA-256?

SHA-256 is a **hashing algorithm**. It takes any input:

```text
Hello
```

and produces a fixed-size output:

```text
185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969
```

That output is always **256 bits**, or **64 hexadecimal characters**.

For example:

```text
"Hello"
    ↓
 SHA-256
    ↓
185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969
```

If you change even one character:

```text
"Hello"
```

to:

```text
"hello"
```

you get a completely different hash.

---

### Why do we need it in a blockchain?

In your code, every block has a hash:

```text
Block 1
data: "Genesis Block"
previousHash: "0"
        ↓
      SHA-256
        ↓
hash: ABC123...
```

Then Block 2 stores that hash:

```text
Block 2
data: "Block 2"
previousHash: ABC123...
        ↓
      SHA-256
        ↓
hash: XYZ789...
```

And Block 3 stores Block 2's hash:

```text
Block 3
data: "Block 3"
previousHash: XYZ789...
        ↓
      SHA-256
        ↓
hash: DEF456...
```

So the hashes **link the blocks together**.

---

### What happens if someone changes a block?

Suppose Block 2 originally contains:

```text
data = "Block 2"
```

and its hash is:

```text
ABC123...
```

Someone changes it to:

```text
data = "I stole $100"
```

The SHA-256 hash changes:

```text
Original:
"Block 2" → ABC123...

Changed:
"I stole $100" → 7F91D2...
```

But Block 3 still has:

```text
previousHash = ABC123...
```

Now there's a mismatch:

```text
Block 2
hash = 7F91D2...
       ❌
       ↓
Block 3
previousHash = ABC123...
```

You can therefore detect that **Block 2 was modified**.

---

### Why not just store the data?

Because a hash gives you a convenient way to check whether the data has changed.

It's similar to a fingerprint:

```text
Person → fingerprint
File   → hash
Block  → hash
```

If the fingerprint changes, something changed.

---

### 3 important properties of SHA-256

**1. Same input → same hash**

```text
SHA256("Hello")
→ always the same result
```

**2. Tiny change → completely different hash**

```text
SHA256("Hello")
≠
SHA256("hello")
```

**3. One-way**

It's designed to be computationally infeasible to take:

```text
hash → original input
```

So hashing is **not the same as encryption**.

### In your blockchain

The simplest way to remember it is:

> **SHA-256 gives each block a unique-looking fingerprint, and the blocks use those fingerprints to connect to each other.**

That's why hashes are fundamental to your blockchain example.

UTF-8 stands for:

Unicode Transformation Format – 8-bit

Unicode → a universal system for representing characters from different languages.
Transformation Format → a method for converting those characters into bytes.
8-bit → UTF-8 works with units of 8 bits (1 byte).

So simply:

UTF-8 = a standard way to convert Unicode text into bytes and back.
