1. Final Project: Database Application
   2-3. Team #24: Nicholas Miklaucic, Jia Mu
   Section 37322

4. For our project, we wanted to model a simple library, with users having the capability to make reservations
   for books through an online book reservation system.

5. UML: https://drive.google.com/file/d/1KamzgKCLNIAj-VdTNQU4eyCDUd9_tBRO/view?usp=sharing

6.
The User data model holds a first name, last name, username, password, email, and date of birth, and represents
a user making reservations in our system.

7.
The Book data model holds a title and genre, and represents a book.
The Author data model holds a first name and last name, and represents an author.

The Reservation data model bridges the User and Book models, and holds a reservation date. Represents a reservation
made by some user for some book.

8.
The Book and Author domain objects have a many-to-many relationship. Since our project uses MongoDB, the convention
for implementing many-to-many is through arrays, rather than through a junction table.

9. The User and Book domain objects also have a many-to-many relationship, but are bridged by the Reservation object.
   A user may reserve many books, and a book may be reserved by many users. We found it more intuitive to have a reservation
   that holds the references to its specific user and book.

10. The Genre enumeration can be one of fantasy, nonfiction, or rom-com, and represents the three genres a book can hold.

11. Library index.html -> lists all users, books, authors, and reservations. Enables access to all edit 
    screens. 