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

/// ------------------------------------------------
// Study request list route
// URL: http://localhost:3000/study-requests
// ------------------------------------------------
app.get("/study-requests", function(req, res) {
    // Debugging: print the requested URL in the terminal
    console.log(req.url);

    res.send(
        "<h1>Study Requests</h1>" +
        "<p>This page will show study requests created by students.</p>" +
        "<table border='1'>" +
            "<tr><th>Title</th><th>Subject</th><th>Action</th></tr>" +
            "<tr><td>Need help with JavaScript loops</td><td>JavaScript</td><td><a href='/study-request/1'>View Details</a></td></tr>" +
            "<tr><td>Looking for CSS practice partner</td><td>CSS</td><td><a href='/study-request/2'>View Details</a></td></tr>" +
            "<tr><td>Need help with Node.js routes</td><td>Node.js</td><td><a href='/study-request/3'>View Details</a></td></tr>" +
        "</table>" +
        "<p><a href='/'>Back to Home</a></p>"
    );
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

// Start server on port 3000
// This must stay at the bottom of the file
app.listen(3000, function() {
    console.log("Server running at http://127.0.0.1:3000/");
});