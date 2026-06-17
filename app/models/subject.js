// Get the functions in the db.js file to use
const db = require("./../services/db");

class Subject {
    id;
    name;
    students = [];

    constructor(id) {
        this.id = id;
    }

    async getSubjectName() {
        var sql = "SELECT * FROM Subjects WHERE id = ?";
        const results = await db.query(sql, [this.id]);

        if (results.length > 0) {
            this.name = results[0].name;
        }
    }

    async getSubjectStudents() {
        var sql = `
            SELECT 
                Students.id,
                Students.name
            FROM Students
            JOIN Student_Subject ON Students.id = Student_Subject.student_id
            WHERE Student_Subject.subject_id = ?
        `;

        const results = await db.query(sql, [this.id]);
        this.students = results;
    }
}

module.exports = {
    Subject
};