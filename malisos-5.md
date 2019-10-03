# Design Document
https://github.com/kylemalisos/kmvk6/blob/master/assignment-four/Software%20Engineering%20group%20project%201.pdf

# To Do
## Database
1. Set up database to store student submissions, grade information and submission details.
2. Get access to Mizzou's login database and users table.
3. Create database queries for login and pawprint accessors. 

## Login
1. After connecting to Mizzou's login system we should make a login class with methods login, logout.
2. This will connect to a pawprint accessor that will determine the level of access they get.
3. They will then be able to logout anytime after that in the program.

## Access Level
1. After logging in a users pawprint will be sent to Mizzou's database to determine whether they are a student or ta or professor.
2. It will then use this information to determine how much of the application they can interact with.
3. This will allow a professor to manipulate anything for his class while a ta may only be able to grade the assignments of students he is assigned to.

## File Upload
- Create a file upload class that will allow students to upload a file to our database and store information about when it was uploaded, by who, how big the file is, the file type and more.
- Have methods that would upload the physical file to the database and allow the student to re download their submission and allow the professor or ta to preview the file.