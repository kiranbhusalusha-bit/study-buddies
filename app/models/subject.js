// Get the functions in the db.js file to use
const db = require("./../services/db");

class Subject {
    // Subject ID
    id;

    // Subject name
    name;

    // Students linked to this subject
    students = [];

    constructor(id) {
        this.id = id;
    }

    // Get subject name from the database
    async getSubjectName() {
        if (typeof this.name !== "string") {
            var sql = "SELECT * FROM Subjects WHERE id = ?";
            const results = await db.query(sql, [this.id]);
            this.name = results[0].name;
        }
    }

    // Get students linked to this subject from the database
    async getSubjectStudents() {
        if (this.students.length === 0) {
            var sql = `
                SELECT 
                    Students.id,
                    Students.name,
                    Students.course,
                    Students.study_year
                FROM Students
                JOIN Student_Subject ON Students.id = Student_Subject.student_id
                WHERE Student_Subject.subject_id = ?
            `;

            const results = await db.query(sql, [this.id]);
            this.students = results;
        }
    }
}

module.exports = {
    Subject
};