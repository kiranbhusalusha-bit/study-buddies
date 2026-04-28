"use strict";

// Import express.js
const express = require("express");

// Create express app
const app = express();

// Allow Express to read POST form data later
app.use(express.urlencoded({ extended: true }));

// Add static files location
app.use(express.static("static"));

// Root route
app.get("/", function(req, res) {
    res.send("Hello Study Buddies!");
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

// Study requests route
// This route represents the page where students will view study requests
app.get("/study-requests", function(req, res) {
    res.send("Study Requests List Page");
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

// Start server on port 3000
// This must stay at the bottom of the file
app.listen(3000, function() {
    console.log("Server running at http://127.0.0.1:3000/");
});