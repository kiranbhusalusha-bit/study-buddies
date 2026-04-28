"use strict";

// Import express.js
const express = require("express");

// Create express app
const app = express();

// Use the Pug templating engine
// This tells Express to render .pug template files
app.set("view engine", "pug");

// This tells Express where the Pug view files are stored
app.set("views", "./app/views");

// Get the functions in the db.js file to use
const db = require("./services/db");

// Allow Express to read POST form data later
app.use(express.urlencoded({ extended: true }));

// Add static files location
app.use(express.static("static"));

// Create a route for /study-buddies with JavaScript logic
// This follows the lab task: split, splice, reverse and join
app.get("/study-buddies", function(req, res) {
    // Print the requested URL in the VS Code terminal for debugging
    console.log(req.url);

    // Capture the request path in a variable
    let path = req.url;

    // Create an array of all characters in the request path
    let characters = path.split("");

    // Remove the leading "/" from the path
    characters.splice(0, 1);

    // Reverse the characters and join them back into a string
    let reversedPath = characters.reverse().join("");

    // Send the reversed route text to the browser
    res.send(reversedPath);
});


// Student profile route
// This route represents the page where a student profile will be shown
app.get("/profile", function(req, res) {
    res.send("Student Profile Page");
});

// Display all study requests using a Pug template
app.get("/study-requests", function(req, res) {
    // Debugging: print the requested URL in the terminal
    console.log(req.url);

   // Join Study_Requests with Subjects so we can display the subject name
var sql = `
    SELECT 
        Study_Requests.id,
        Study_Requests.title,
        Study_Requests.description,
        Subjects.name AS subject_name
    FROM Study_Requests
    JOIN Subjects ON Study_Requests.subject_id = Subjects.id
`;
    // Query the database
    db.query(sql).then(results => {
        // Send the database rows to the study-requests Pug template
        res.render("study-requests", {
            title: "Study Requests",
            data: results
        });
    });
});


// Create study request route
// This route represents the page where a student will create a study request
app.get("/create-request", function(req, res) {
    res.send("Create Study Request Page");
});

// Search route
// This route represents the page where students can search by subject
app.get("/search", function(req, res) {
    res.send("Search Study Buddies by Subject");
});



// Create a dynamic route for /buddy/<name>
// The name can be any value typed in the browser URL
app.get("/buddy/:name", function(req, res) {
    // req.params contains the dynamic values from the URL
    // Here it will contain the name entered after /buddy/
    console.log(req.params);

    // Send a personalised message back to the browser
    res.send("Study buddy profile for: " + req.params.name);
});

// Create a dynamic database test route for /db_test/<id>
// This will get one student from the Students table using the ID in the URL
app.get("/db_test/:id", function(req, res) {
    // Capture the id parameter from the URL
    let studentId = req.params.id;

    // SQL query to get only one student by ID
    // The ? is a placeholder, and [studentId] safely fills it
    var sql = "SELECT * FROM Students WHERE id = ?";

    // Run the SQL query
    db.query(sql, [studentId]).then(results => {
        // Print the database result in the VS Code terminal for debugging
        console.log(results);

        // Output only the student's name with simple HTML formatting
        res.send(`
            <h1>Study Buddy Student</h1>
            <p>Student name: ${results[0].name}</p>
        `);
    });
});

// Create a dynamic route for /student/<name>/<id>
// This route outputs the name and ID in an HTML table
app.get("/student/:name/:id", function(req, res) {
    // req.params contains both dynamic values from the URL
    console.log(req.params);

    // Store the name and id from the URL in variables
    let studentName = req.params.name;
    let studentId = req.params.id;

    // Send an HTML table to the browser
    res.send(`
        <h1>Study Buddy Student Details</h1>

        <table border="1">
            <tr>
                <th>Name</th>
                <th>ID</th>
            </tr>
            <tr>
                <td>${studentName}</td>
                <td>${studentId}</td>
            </tr>
        </table>
    `);
});

// Create a route for root
// This sends variables and an array from Express into the Pug template
app.get("/", function(req, res) {
    // Set up an array of Study Buddies subjects
    var test_data = ["JavaScript", "Database Systems", "Node.js", "Web Development"];

    // Send the array through to the template as a variable called data
    res.render("index", {
        title: "Study Buddies Home",
        heading: "Welcome to Study Buddies",
        data: test_data
    });
});

// Display a formatted list of Study Buddies students using a Pug template
app.get("/all-students-formatted", function(req, res) {
    // Select all rows from the Students table
    var sql = "SELECT * FROM Students";

    // Query the database
    db.query(sql).then(results => {
        // Send the database rows to the all-students Pug template
        // The rows will be available in the template as a variable called data
        res.render("all-students", {
            title: "All Study Buddies Students",
            data: results
        });
    });
});

// Display one student profile using a Pug template
app.get("/student-single/:id", function(req, res) {
    // Capture the student ID from the URL
    let studentId = req.params.id;

    // Select one student from the Students table by ID
    var sql = "SELECT * FROM Students WHERE id = ?";

    // Query the database using the ID
    db.query(sql, [studentId]).then(results => {
        // Send the first matching student to the Pug template
        res.render("student-single", {
            title: "Study Buddy Profile",
            student: results[0]
        });
    });
});

// Display one study request using a Pug template
app.get("/study-request/:id", function(req, res) {
    // Capture the study request ID from the URL
    let requestId = req.params.id;

    // Join Study_Requests with Subjects and Students
    // so the page can show request details, subject name, and student name
    var sql = `
        SELECT 
            Study_Requests.id,
            Study_Requests.title,
            Study_Requests.description,
            Subjects.name AS subject_name,
            Students.name AS student_name
        FROM Study_Requests
        JOIN Subjects ON Study_Requests.subject_id = Subjects.id
        JOIN Students ON Study_Requests.student_id = Students.id
        WHERE Study_Requests.id = ?
    `;

    // Query the database using the request ID
    db.query(sql, [requestId]).then(results => {
        // Send the first matching request to the Pug template
        res.render("study-request-single", {
            title: "Study Request Details",
            request: results[0]
        });
    });
});

// Static Pug page for About / Contact details
app.get("/about", function(req, res) {
    res.render("about", {
        title: "About Study Buddies"
    });
});

// Start server on port 3000
// This must stay at the bottom of the file
app.listen(3000, function() {
    console.log("Server running at http://127.0.0.1:3000/");
});