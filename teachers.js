const express = require('express');
const teachers = express.Router();

// logic for our endpoints

const teachersList = ['BJ', 'Blair', 'Tiia', 'Joe', "April"];

teachers.get('/', (req, res) => {
    const name = req.query.name; // B

    if (name) {
        // search for teacher by name
        const teacher = teachersList.filter((teacher) => {
            return teacher.toLowerCase().includes(name.toLowerCase()); // BJ, Blair
        })

        res.json(teacher);
    } else {
        // return the whole list
        res.json(teachersList);
    }

	// the actual functionality
	// go to the database

	// set the data from the database to a variable

	// transform

});

// accept POST request at URI: /teachers
teachers.post('/', (req, res) => {
	// teachers.push(newStudent)
	res.json('Adding a student..');
});

// accept PUT request at URI: /teachers
teachers.put('/', (req, res) => {
	//removes 1 item from the array, starting at the index provided,
	// then adds newStudent in its place
	// teachers.splice(index, 1, newStudent);

	res.json('Updating a student..');
});

// accept DELETE request at URI: /teachers
teachers.delete('/', (req, res) => {
	// teachers.splice(index, 1);
	res.json('Deleting a student..');
});

// export module so it's usable in other files
module.exports = teachers;
