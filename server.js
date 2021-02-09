// [x] separate the students endpoint into its own file
// [x] import and use the students route in our app

// [x] create second route/path/url/endpoint called teachers
// [x] add to our GET method, to search for teacher by their name

// require the Express module
const express = require("express");
const students = require('./students');
const teachers = require('./teachers');

// creates an instance of an Express server
const app = express();

// allows us to use query strings params,
// path params, and body, all in the req object
app.use(express.json());


// define the port
const port = 3000;

app.use("/students/", students);
app.use("/teachers/", teachers);

// run the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));

console.log("http://localhost:" + port + "/students");
