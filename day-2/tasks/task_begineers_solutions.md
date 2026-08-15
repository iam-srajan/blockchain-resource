### 1. Store and Read a Name — String

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract NameStorage {
    string public name;

    function setName(string memory _name) public {
        name = _name;
    }
}
```

### 2. Store and Read an Age — Integer

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract AgeStorage {
    int public age;

    function setAge(int _age) public {
        age = _age;
    }
}
```

### 3. Store a Wallet Address

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract AddressStorage {
    address public wallet;

    function setWallet(address _wallet) public {
        wallet = _wallet;
    }
}
```

### 4. Student Information

Store a student's **name and age**.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract Student {
    string public name;
    int public age;

    function setStudent(string memory _name, int _age) public {
        name = _name;
        age = _age;
    }
}
```

### 5. Student Name and Wallet

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract StudentWallet {
    string public studentName;
    address public studentAddress;

    function setStudent(string memory _name, address _address) public {
        studentName = _name;
        studentAddress = _address;
    }
}
```

### 6. Employee Information

Store **employee name, salary, and wallet address**.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract Employee {
    string public name;
    int public salary;
    address public employeeAddress;

    function setEmployee(
        string memory _name,
        int _salary,
        address _employeeAddress
    ) public {
        name = _name;
        salary = _salary;
        employeeAddress = _employeeAddress;
    }
}
```

### 7. Change Your Name

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract ChangeName {
    string public name;

    function setName(string memory _name) public {
        name = _name;
    }

    function changeName(string memory _newName) public {
        name = _newName;
    }
}
```

### 8. Store Account Details

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract Account {
    string public username;
    int public accountNumber;
    address public owner;

    function setAccount(
        string memory _username,
        int _accountNumber,
        address _owner
    ) public {
        username = _username;
        accountNumber = _accountNumber;
        owner = _owner;
    }
}
```

### 9. Store Owner Address Using `msg.sender`

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract Owner {
    address public owner;

    function setOwner() public {
        owner = msg.sender;
    }
}
```

### 10. Simple Product Information

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract Product {
    string public productName;
    int public price;
    address public seller;

    function setProduct(
        string memory _productName,
        int _price,
        address _seller
    ) public {
        productName = _productName;
        price = _price;
        seller = _seller;
    }
}
```
