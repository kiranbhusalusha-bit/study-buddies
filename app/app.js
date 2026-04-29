"use strict";

// Import express.js
const express = require("express");
const session = require("express-session");
const { User } = require("./models/user");

// Create express app
const app = express();

app.use(session({
    secret: "study-buddies-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Use the Pug templating engine
// This tells Express to render .pug template files
app.set("view engine", "pug");

// This tells Express where the Pug view files are stored
app.set("views", "./app/views");

// Get the functions in the db.js file to use
const db = require("./services/db");

// Get the models
const { Student, getAllStudents } = require("./models/student");
const { Subject } = require("./models/subject");
const { StudyRequest } = require("./models/studyRequest");
const { getAllProgrammes } = require("./models/programmes");
const { DateTime } = require("luxon");

// Allow Express to read POST form data later
app.use(express.urlencoded({ extended: true }));

// Add static files location
app.use(express.static("static"));

// Display Study Buddies students using a Pug template
app.get("/study-buddies", function(req, res) {
    // Debugging: print the requested URL in the terminal
    console.log(req.url);

    // Select all students from the database
    var sql = "SELECT * FROM Students";

    // Query the database
    db.query(sql).then(results => {
        // Send the student rows to the all-students Pug template
        res.render("all-students", {
            title: "Study Buddies",
            data: results
        });
    });
});

// Student profile route
// This renders a simple profile page using Pug
app.get("/profile", function(req, res) {
    res.render("profile", {
        title: "Student Profile",
        heading: "Student Profile Page"
    });
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
// This renders a simple create request page using Pug
app.get("/create-request", function(req, res) {
    res.render("create-request", {
        title: "Create Study Request",
        heading: "Create Study Request"
    });
});

// Search route
// This renders a simple search page using Pug
app.get("/search", function(req, res) {
    res.render("search", {
        title: "Search Study Buddies",
        heading: "Search Study Buddies by Subject"
    });
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
        res.render("db-test-single", {
    title: "Database Test Student",
    student: results[0]
});
    });
});

// Create a dynamic route for /student/<name>/<id>
// This sends the name and ID to a Pug template
app.get("/student/:name/:id", function(req, res) {
    // req.params contains both dynamic values from the URL
    console.log(req.params);

    // Render the Pug template and pass name and id as variables
    res.render("student-dynamic", {
        title: "Dynamic Student Details",
        studentName: req.params.name,
        studentId: req.params.id
    });
});


// Create a route for root
// This sends variables and an array from Express into the Pug template
app.get("/", async function(req, res) {
    var students = await getAllStudents();

    res.render("index", {
        title: "Study Buddies Home",
        heading: "Welcome to Study Buddies",
        students: students
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

app.get("/single-student/:id", async function (req, res) {
    var stId = req.params.id;

    var student = new Student(stId);

    await student.getStudentDetails();
    await student.getStudentSubjects();


    console.log(student);

    res.render("student", {
        student: student,
    });
});


// Static Pug page for About / Contact details
app.get("/about", function(req, res) {
    res.render("about", {
        title: "About Study Buddies"
    });
});

// Display a formatted list of subjects using a Pug template
app.get("/subjects", function(req, res) {
    // Select all subjects from the Subjects table
    var sql = "SELECT * FROM Subjects";

    // Query the database
    db.query(sql).then(results => {
        // Send the subject rows to the subjects Pug template
        res.render("subjects", {
            title: "Study Subjects",
            data: results
        });
    });
});


// Display one study request using model
app.get("/study-request/:id", async function(req, res) {
    let requestId = req.params.id;

    // Create object
    var request = new StudyRequest(requestId);

    // Get data from DB
    await request.getRequestDetails();

    console.log(request);

    res.render("study-request-single", {
        title: "Study Request",
        request: request
    });
});

// Display one subject and the students linked to it using the Subject model
app.get("/subject/:id", async function(req, res) {
    let subjectId = req.params.id;

    var subject = new Subject(subjectId);

    await subject.getSubjectName();
    await subject.getSubjectStudents();

    console.log(subject);

    res.render("subject-single", {
        title: "Subject Details",
        subject: subject,
        students: subject.students
    });
});

// Add note to student
app.post('/add-note', async function (req, res) {
    let params = req.body;

    var student = new Student(params.id);

    try {
        await student.addStudentNote(params.note);

        // Redirect back to student page
        res.redirect('/single-student/' + params.id);


    } catch (err) {
        console.error("Error adding note:", err.message);
        res.send("Error");
    }
});

app.post('/allocate-programme', async function (req, res) {
    let params = req.body;

    var student = new Student(params.id);

    try {
        await student.updateStudentProgramme(params.programme);

        res.redirect('/single-student/' + params.id);

    } catch (err) {
        console.error("Error updating programme:", err.message);
        res.send("Error");
    }
});

app.post('/student-select', function(req, res) {
    let id = req.body.studentParam;
    res.redirect('/single-student/' + id);
});

app.get('/register', function(req, res) {
    res.render('register', {
        title: 'Register'
    });
});

app.get('/login', function(req, res) {
    res.render('login', {
        title: 'Login'
    });
});

app.post('/set-password', async function(req, res) {
    let params = req.body;
    var user = new User(params.email);

    try {
        let uId = await user.getIdFromEmail();

        if (uId) {
            await user.setUserPassword(params.password);
            res.send("Password set successfully. You can now login.");
        } else {
            await user.addUser(params.password);
            res.send("New user created. You can now login.");
        }

    } catch (err) {
        console.error("Error while setting password:", err.message);
        res.send("Error setting password");
    }
});

app.post('/authenticate', async function(req, res) {
    let params = req.body;
    var user = new User(params.email);

    try {
        let uId = await user.getIdFromEmail();

        if (uId) {
            let match = await user.authenticate(params.password);

            if (match) {
                req.session.uid = uId;
                req.session.loggedIn = true;
                res.redirect('/welcome');
            } else {
                res.send("Invalid password");
            }
        } else {
            res.send("Invalid email");
        }

    } catch (err) {
        console.error("Error while logging in:", err.message);
        res.send("Error logging in");
    }
});

app.get('/welcome', async function(req, res) {
    if (req.session.loggedIn) {
        res.send("Welcome back, student ID " + req.session.uid + "! <br><a href='/single-student/" + req.session.uid + "'>View your student page</a><br><a href='/logout'>Logout</a>");
    } else {
        res.redirect('/login');
    }
});

app.get('/logout', function(req, res) {
    req.session.destroy();
    res.redirect('/login');
});

// Start server on port 3000
// This must stay at the bottom of the file
app.listen(3000, function() {
    console.log("Server running at http://127.0.0.1:3000/");
});