"use strict";

// Import express.js
const express = require("express");

// Create express app
const app = express();

// Get the functions in the db.js file to use
const db = require("./services/db");

// Allow Express to read POST form data later
app.use(express.urlencoded({ extended: true }));

// Add static files location
app.use(express.static("static"));

// Root route
app.get("/", function(req, res) {
   res.send(
        "<h1>Study Buddies</h1>" +
        "<p>Welcome to Study Buddies. This app helps students find study partners.</p>" +
        "<ul>" +
            "<li><a href='/study-buddies'>View Study Buddies</a></li>" +
            "<li><a href='/study-requests'>View Study Requests</a></li>" +
        "</ul>"
    );
});

// Study buddies list route
// This route represents the page where students will view available study buddies
app.get("/study-buddies", function(req, res) {
    // Lab instruction: practise debugging by printing the request URL
    console.log(req.url);

    res.send("Study Buddies List Page");
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

// Create a route for testing the database
app.get("/db_test", function(req, res) {
    // Select all students from the Students table in the Study-Buddies database
    var sql = "SELECT * FROM Students";

    // Run the SQL query using the db.js query function
    db.query(sql).then(results => {
        // Show results in VS Code terminal for checking
        console.log(results);

        // Send the results to the browser as JSON
        res.json(results);
    });
});

// Start server on port 3000
// This must stay at the bottom of the file
app.listen(3000, function() {
    console.log("Server running at http://127.0.0.1:3000/");
});