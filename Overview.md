# Overview

### System Needs
  #### Set up a database that holds all info needed such as student information, course information, assignments, TAs, and instructors

## Functionality

### Login Class
  1. Has login function that checks the inputted username and password with the database
  2. Has logout function
  
### File Upload Class
  1. Has a function that allows students to upload a file to the database along with a file submission comment. Also stores all relevant info like time of upload, owner of the file, file size, and file type
  2. Has functions that allow for re-upload and for downloading the upload filr. Downloading the file allows for instructors and/or TAs to view assignments
  
### Grade Class
  1. Has a grade function where the instructor or TA can assign a grade to a student. The info will be saved in the database. THe grade will be attached to the student attribute
  2. Has a average grade function. The instructor or TA can run this function to add all of the student grades for a particular assignnent and return the average grade of the class
  
### Add/Remove person from course class
  1. Has a function to add a student or a TA to a course. Adds student to the cours in the database
  2. Has a function to remove a student or TA from a course. Removes the student from the course in the database

## Next steps:
First, we need to create a list of tasks, then distribute the task to each person. Second, we need to build the web server and database. We also need to design the UI interface. At the same time, we should complete the code of the class and function which we listed. In the whole process，we also need to do the test for the things. If there are mistakes, we should fix them.
