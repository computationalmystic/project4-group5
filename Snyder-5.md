# To-Do List
## Top items on the list should be created first

## System Needs
1. Create a web server
2. Setup a DBMS

### Create a student class
#### In the student class
1. A login function that has username and password as parameters
2. A logout function
3. A read assignment function that grabs assignment instructions from the database
4. A submit function that allows students to upload a file to the server under a certain assignment. The student can also input their own comments under the submission
5. A re-submit function that overrides the submit function so the student can re-upload the assignment to the database

### Create a TA class
#### In the TA class
1. A login function that has username and password as parameters
2. A function that will grab all course assignments from the database and display them
3. A function that will grab a certain assignment submission from a student
4. A search function that a TA can use to search for a student
5. A function that can download a file to the TAs local machine to view a students work

### Create an instructor class
#### In the instructor class
1. A login function that had username and password as parameters
2. A function that will grab all course assignments from the database and display them
3. A function that will grab a certain assignment submission from a student
4. A search function that an instructor can use to search for a student
5. A function that can download a file to the instructors local machine to view a students work
6. A function that will create or remove a course from the database
7. A function that will add or remove a TA from a course in the database
8. A function that will add or remove a students from a course in the database
9. A function that will allow the instructor to create, edit, or delete and assignment

### Create a system admin class
#### In the system admin class
1. A function to add or remove an instructor from a course