# Solidity Practice Tasks

1. **Bool Flip**  
   Create a contract with a `bool public isActive` state variable set to `false`.  
   Write a function `toggleStatus()` that flips its value every time it's called.

2. **Address Storage**  
   Create a contract with a state variable `address public storedAddress`.  
   Write a function `setAddress(address _addr)` to update it, and a function `isCaller(address _addr)` that returns `true` if `_addr` matches `msg.sender`.

3. **Mapping of Balances**  
   Create a `mapping(address => uint256) public balances`.  
   Write a function `addBalance(uint256 amount)` that adds `amount` to `msg.sender`'s balance.

4. **Even or Odd Checker**  
   Write a function `isEven(uint256 num)` that returns `true` if the number is even, `false` if odd, using an `if/else` condition.

5. **Loop Sum**  
   Write a function `sumUpTo(uint256 n)` that uses a `for` loop to calculate the sum of all numbers from `1` to `n`.

6. **Mapping with Bool Flag**  
   Create `mapping(address => bool) public hasRegistered`.  
   Write a function `register()` that sets `hasRegistered[msg.sender] = true`, but only if not already registered (use `require`).

7. **Age Category**  
   Write a function `getCategory(uint256 age)` that returns a string:
   - `"Child"` if age < 13
   - `"Teen"` if age is 13–19
   - `"Adult"` if age >= 20  
     Use `if/else if/else`.

8. **Count Positive Numbers**  
   Given a `uint256[] public numbers` array, write a function `countAbove(uint256 threshold)` that loops through the array and counts how many numbers are greater than `threshold`.

9. **Owner Check**  
   Create `address public owner` set in the constructor to `msg.sender`.  
   Write a function `isOwner()` that returns `true` or `false` depending on whether `msg.sender` is the owner.

10. **Mapping Loop Counter**  
    Create `mapping(address => bool) public members` and `address[] public memberList`.  
    Write a function `addMember(address _addr)` to add a new member, and a function `countMembers()` that loops through `memberList` and returns how many addresses have `members[addr] == true`.
