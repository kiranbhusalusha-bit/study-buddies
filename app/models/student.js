// Get the functions in the db.js file to use
const db = require('./../services/db');

class Student {
    // Student ID
    id;
    // Student name
    name;
    // Student subjects (Study Buddies version)
    subjects = [];

    constructor(id) {
        this.id = id;
    }

    // Get student name
    // Get student name from the database
async getStudentName() {
    if (typeof this.name !== "string") {
        var sql = "SELECT * FROM Students WHERE id = ?";
        const results = await db.query(sql, [this.id]);
        this.name = results[0].name;
    }
}

    // Get student subjects
    // Get subjects linked to this student from the database
async getStudentSubjects() {
    if (this.subjects.length === 0) {
        var sql = `
            SELECT Subjects.id, Subjects.name
            FROM Subjects
            JOIN Student_Subject ON Subjects.id = Student_Subject.subject_id
            WHERE Student_Subject.student_id = ?
        `;

        const results = await db.query(sql, [this.id]);
        this.subjects = results;
    }
}

}
module.exports = {
    Student
};