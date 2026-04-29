// Get the functions in the db.js file to use
const db = require("./../services/db");

class Student {
    id;
    note;
    name;
    subjects = [];

    constructor(id) {
        this.id = id;
    }

    setStudentName(name) {
        this.name = name;
    }

    async getStudentDetails() {
        if (typeof this.name !== "string") {
            var sql = "SELECT * FROM Students WHERE id = ?";
            const results = await db.query(sql, [this.id]);

            this.name = results[0].name;
            this.note = results[0].note;
        }
    }

    async getStudentSubjects() {
        if (this.subjects.length === 0) {
            var sql = `
                SELECT 
                    Subjects.id,
                    Subjects.name
                FROM Subjects
                JOIN Student_Subject ON Subjects.id = Student_Subject.subject_id
                WHERE Student_Subject.student_id = ?
            `;

            const results = await db.query(sql, [this.id]);
            this.subjects = results;
        }
    }

    async addStudentNote(note) {
        var sql = "UPDATE Students SET note = ? WHERE id = ?";
        const result = await db.query(sql, [note, this.id]);

        this.note = note;
        return result;
    }
}

async function getAllStudents() {
    var sql = "SELECT id, name FROM Students";
    const results = await db.query(sql);

    var students = [];

    for (var row of results) {
        var student = new Student(row.id);
        student.setStudentName(row.name);
        students.push(student);
    }

    return students;
}

module.exports = {
    Student,
    getAllStudents
};