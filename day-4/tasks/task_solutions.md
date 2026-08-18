```markdown
# Solidity Practice Tasks — Easy (10) Solutions
```

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// 1. Bool Flip
contract BoolFlip {
    bool public isActive = false;

    function toggleStatus() external {
        isActive = !isActive;
    }
}
```

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// 2. Address Storage
contract AddressStorage {
    address public storedAddress;

    function setAddress(address _addr) external {
        storedAddress = _addr;
    }

    function isCaller(address _addr) external view returns (bool) {
        return _addr == msg.sender;
    }
}
```

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// 3. Mapping of Balances
contract BalanceMapping {
    mapping(address => uint256) public balances;

    function addBalance(uint256 amount) external {
        balances[msg.sender] += amount;
    }
}
```

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// 4. Even or Odd Checker
contract EvenOddChecker {
    function isEven(uint256 num) external pure returns (bool) {
        if (num % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }
}
```

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// 5. Loop Sum
contract LoopSum {
    function sumUpTo(uint256 n) external pure returns (uint256 total) {
        for (uint256 i = 1; i <= n; i++) {
            total += i;
        }
    }
}
```

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// 6. Mapping with Bool Flag
contract Registration {
    mapping(address => bool) public hasRegistered;

    function register() external {
        require(!hasRegistered[msg.sender], "Already registered");
        hasRegistered[msg.sender] = true;
    }
}
```

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// 7. Age Category
contract AgeCategory {
    function getCategory(uint256 age) external pure returns (string memory) {
        if (age < 13) {
            return "Child";
        } else if (age >= 13 && age <= 19) {
            return "Teen";
        } else {
            return "Adult";
        }
    }
}
```

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// 8. Count Positive Numbers (Above Threshold)
contract CountAbove {
    uint256[] public numbers;

    function addNumber(uint256 num) external {
        numbers.push(num);
    }

    function countAbove(uint256 threshold) external view returns (uint256 count) {
        for (uint256 i = 0; i < numbers.length; i++) {
            if (numbers[i] > threshold) {
                count++;
            }
        }
    }
}
```

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// 9. Owner Check
contract OwnerCheck {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function isOwner() external view returns (bool) {
        return msg.sender == owner;
    }
}
```

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// 10. Mapping Loop Counter
contract MemberRegistry {
    mapping(address => bool) public members;
    address[] public memberList;

    function addMember(address _addr) external {
        require(!members[_addr], "Already a member");
        members[_addr] = true;
        memberList.push(_addr);
    }

    function countMembers() external view returns (uint256 count) {
        for (uint256 i = 0; i < memberList.length; i++) {
            if (members[memberList[i]]) {
                count++;
            }
        }
    }
}
```
