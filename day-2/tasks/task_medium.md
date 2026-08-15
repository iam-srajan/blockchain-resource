### 1. Library Book Tracker

Create a `LibraryBook` contract.

- Store book title using `string`.
- Store book ID using `uint`.
- Store whether the book is available using `bool`.
- Store librarian's `address`.
- Set the librarian in the constructor using `msg.sender`.
- Create a function to issue the book.
- Create a function to return the book.

---

### 2. Website Ownership

Create a `Website` contract.

- Store website name.
- Store website URL as `string`.
- Store website owner as `address`.
- Store whether the website is active.
- Constructor should set the deployer as owner.
- Create a function to deactivate the website.
- Create a function that returns whether the caller is the owner.

---

### 3. Temperature Converter

Create a `Temperature` contract.

- Store the temperature as an `int`.
- Store the unit as a `string`.
- Constructor should set the initial temperature and unit.
- Create a function to update the temperature.
- Create a function to update the unit.
- Create a function that returns the current temperature.

---

### 4. Parcel Tracking

Create a `Parcel` contract.

- Store parcel ID using `uint`.
- Store receiver name using `string`.
- Store parcel status using `string`.
- Store whether the parcel has been delivered using `bool`.
- Store the receiver's `address`.
- Create a function to update the parcel status.
- Create a function to mark the parcel as delivered.

---

### 5. Digital Certificate

Create a `Certificate` contract.

- Store student's name.
- Store certificate number as `uint`.
- Store course name.
- Store certificate data using `bytes`.
- Store whether the certificate is valid.
- Constructor should initialize the certificate.
- Create a function to invalidate the certificate.
- Create a function to update certificate data.

---

### 6. Mobile Recharge

Create a `MobileRecharge` contract.

- Store mobile number as `uint`.
- Store recharge amount as `uint`.
- Store whether the recharge is successful using `bool`.
- Store the user's wallet `address`.
- Create a payable `recharge()` function.
- Use `msg.value` as the recharge amount.
- Store `msg.sender` as the user's address.

---

### 7. Online Exam

Create an `OnlineExam` contract.

- Store exam name.
- Store exam duration using `uint`.
- Store whether the exam is active.
- Store examiner's address.
- Constructor should set the examiner.
- Create a function to start the exam.
- Create a function to end the exam.
- Create a function to check whether the caller is the examiner.

---

### 8. Restaurant Order

Create a `RestaurantOrder` contract.

- Store customer name.
- Store food name.
- Store food price.
- Store order status.
- Store whether the order is delivered.
- Store customer's address using `msg.sender`.
- Constructor should initialize the order.
- Create a function to update the order status.
- Create a function to mark the order as delivered.

---

### 9. Event Ticket

Create an `EventTicket` contract.

- Store event name.
- Store ticket price.
- Store ticket owner's address.
- Store whether the ticket is valid.
- Constructor should set the ticket owner using `msg.sender`.
- Create a payable function to purchase the ticket.
- Use `msg.value` to store the amount paid.
- Create a function to invalidate the ticket.

---

### 10. Digital Notice Board

Create a `NoticeBoard` contract.

- Store a notice using `string`.
- Store notice number using `uint`.
- Store notice data using `bytes`.
- Store whether the notice is active.
- Store the publisher's address.
- Constructor should store the initial notice and publisher.
- Create a function to change the notice.
- Create a function to activate/deactivate the notice.
- Create a function that returns the current caller using `msg.sender`.
