## 1. Library Book Tracker

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LibraryBook {

    string public bookTitle;
    uint public bookId;
    bool public available;
    address public librarian;

    constructor(string memory _title, uint _id) {
        bookTitle = _title;
        bookId = _id;
        available = true;
        librarian = msg.sender;
    }

    function issueBook() public {
        available = false;
    }

    function returnBook() public {
        available = true;
    }
}
```

---

## 2. Website Ownership

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Website {

    string public websiteName;
    string public websiteURL;
    address public owner;
    bool public active;

    constructor(
        string memory _name,
        string memory _url
    ) {
        websiteName = _name;
        websiteURL = _url;
        owner = msg.sender;
        active = true;
    }

    function deactivateWebsite() public {
        active = false;
    }

    function isOwner() public view returns (bool) {
        return msg.sender == owner;
    }
}
```

**Important line:**

```solidity
return msg.sender == owner;
```

It returns `true` if the caller is the owner.

---

## 3. Temperature Converter

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Temperature {

    int public temperature;
    string public unit;

    constructor(int _temperature, string memory _unit) {
        temperature = _temperature;
        unit = _unit;
    }

    function updateTemperature(int _temperature) public {
        temperature = _temperature;
    }

    function updateUnit(string memory _unit) public {
        unit = _unit;
    }

    function getTemperature() public view returns (int) {
        return temperature;
    }
}
```

Here `int` is used because temperature can be negative.

Example:

```text
-10
"Celsius"
```

---

## 4. Parcel Tracking

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Parcel {

    uint public parcelId;
    string public receiverName;
    string public status;
    bool public delivered;
    address public receiver;

    constructor(
        uint _id,
        string memory _name,
        address _receiver
    ) {
        parcelId = _id;
        receiverName = _name;
        receiver = _receiver;
        status = "Processing";
        delivered = false;
    }

    function updateStatus(string memory _status) public {
        status = _status;
    }

    function markDelivered() public {
        delivered = true;
        status = "Delivered";
    }
}
```

Example deployment:

```text
101
"Rahul"
0x123...
```

---

## 5. Digital Certificate

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Certificate {

    string public studentName;
    uint public certificateNumber;
    string public courseName;
    bytes public certificateData;
    bool public valid;

    constructor(
        string memory _studentName,
        uint _certificateNumber,
        string memory _courseName
    ) {
        studentName = _studentName;
        certificateNumber = _certificateNumber;
        courseName = _courseName;
        certificateData = "Certificate Data";
        valid = true;
    }

    function invalidateCertificate() public {
        valid = false;
    }

    function updateCertificateData(bytes memory _data) public {
        certificateData = _data;
    }
}
```

Example bytes value:

```text
0x48656c6c6f
```

---

## 6. Mobile Recharge

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MobileRecharge {

    uint public mobileNumber;
    uint public rechargeAmount;
    bool public successful;
    address public user;

    constructor(uint _mobileNumber) {
        mobileNumber = _mobileNumber;
        successful = false;
    }

    function recharge() public payable {
        user = msg.sender;
        rechargeAmount = msg.value;
        successful = true;
    }
}
```

Suppose you call:

```text
recharge()
```

and enter:

```text
Value: 1 ether
```

Then:

```solidity
msg.sender
```

is the person making the recharge.

And:

```solidity
msg.value
```

is the Ether sent with the transaction.

---

## 7. Online Exam

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract OnlineExam {

    string public examName;
    uint public duration;
    bool public active;
    address public examiner;

    constructor(
        string memory _name,
        uint _duration
    ) {
        examName = _name;
        duration = _duration;
        examiner = msg.sender;
        active = false;
    }

    function startExam() public {
        active = true;
    }

    function endExam() public {
        active = false;
    }

    function checkExaminer() public view returns (bool) {
        return msg.sender == examiner;
    }
}
```

For example:

```text
examName = "Solidity Exam"
duration = 60
```

---

## 8. Restaurant Order

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract RestaurantOrder {

    string public customerName;
    string public foodName;
    uint public foodPrice;
    string public orderStatus;
    bool public delivered;
    address public customer;

    constructor(
        string memory _customerName,
        string memory _foodName,
        uint _price
    ) {
        customerName = _customerName;
        foodName = _foodName;
        foodPrice = _price;
        orderStatus = "Preparing";
        delivered = false;
        customer = msg.sender;
    }

    function updateStatus(string memory _status) public {
        orderStatus = _status;
    }

    function markDelivered() public {
        delivered = true;
        orderStatus = "Delivered";
    }
}
```

---

## 9. Event Ticket

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract EventTicket {

    string public eventName;
    uint public ticketPrice;
    uint public amountPaid;
    address public ticketOwner;
    bool public valid;

    constructor(
        string memory _eventName,
        uint _ticketPrice
    ) {
        eventName = _eventName;
        ticketPrice = _ticketPrice;
        valid = true;
    }

    function purchaseTicket() public payable {
        ticketOwner = msg.sender;
        amountPaid = msg.value;
    }

    function invalidateTicket() public {
        valid = false;
    }
}
```

### Important

If the user sends:

```text
Value = 2 ether
```

then:

```solidity
amountPaid = msg.value;
```

stores the amount sent.

And:

```solidity
ticketOwner = msg.sender;
```

stores the buyer's address.

---

## 10. Digital Notice Board

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract NoticeBoard {

    string public notice;
    uint public noticeNumber;
    bytes public noticeData;
    bool public active;
    address public publisher;

    constructor(
        string memory _notice,
        uint _number
    ) {
        notice = _notice;
        noticeNumber = _number;
        noticeData = "Initial Data";
        active = true;
        publisher = msg.sender;
    }

    function changeNotice(string memory _notice) public {
        notice = _notice;
    }

    function changeNoticeData(bytes memory _data) public {
        noticeData = _data;
    }

    function changeActiveStatus(bool _status) public {
        active = _status;
    }

    function getCaller() public view returns (address) {
        return msg.sender;
    }
}
```
