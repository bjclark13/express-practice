// require the Express module
const express = require("express");

// creates an instance of an Express server
const app = express();

// define the port
const port = 3000;

// run the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));

const students = ["Suguna", "Kim", "Stacey", "Carol", "Liz"];

app.get("/students", (req, res) => {
  // the actual functionality
  // go to the database

  // set the data from the database to a variable

  // transform
  res.json(students);
});

// accept POST request at URI: /students
app.post("/students", (req, res) => {
  // students.push(newStudent)
  res.json("Adding a student..");
});

// accept PUT request at URI: /students
app.put("/students", (req, res) => {
  //removes 1 item from the array, starting at the index provided,
  // then adds newStudent in its place
  // students.splice(index, 1, newStudent);

  res.json("Updating a student..");
});

// accept DELETE request at URI: /students
app.delete("/students", (req, res) => {
  // students.splice(index, 1);
  res.json("Deleting a student..");
});

console.log("http://localhost:" + port + "/students");
