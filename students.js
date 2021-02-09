const express = require('express');
const students = express.Router();

// logic for our endpoints 

const studentsList = ["Suguna", "Kim", "Stacey", "Carol", "Liz"];
 
students.get("/", (req, res) => {
  // the actual functionality
  // go to the database

  // set the data from the database to a variable

  // transform
  res.json(studentsList);
});

// accept POST request at URI: /students
students.post("/", (req, res) => {
  // students.push(newStudent)
  res.json("Adding a student..");
});

// accept PUT request at URI: /students
students.put("/", (req, res) => {
  //removes 1 item from the array, starting at the index provided,
  // then adds newStudent in its place
  // students.splice(index, 1, newStudent);

  res.json("Updating a student..");
});

// accept DELETE request at URI: /students
students.delete("/", (req, res) => {
  // students.splice(index, 1);
  res.json("Deleting a student..");
});

// export module so it's usable in other files
module.exports = students;