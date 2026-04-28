// Get the functions in the db.js file to use
const db = require('./../services/db');

class Student {
    // Student ID
    id;

    // Student note
    note;

    // Student name
    name;
    // Student subjects (Study Buddies version)
    subjects = [];

    constructor(id) {
        this.id = id;
    }

    // Get student name
    // Get student name from the database
async getStudentDetails() {
    if (typeof this.name !== "string") {
        var sql = "SELECT * FROM Students WHERE id = ?";
        const results = await db.query(sql, [this.id]);

        this.name = results[0].name;
        this.note = results[0].note;
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

async addStudentNote(note) {
    var sql = "UPDATE Students SET note = ? WHERE id = ?";
    const result = await db.query(sql, [note, this.id]);

    this.note = note;
    return result;
}

async deleteStudentProgramme() {
    var sql = "DELETE FROM Student_Programme WHERE id = ?";
    await db.query(sql, [this.id]);
    this.programme = null;
}

async addStudentProgramme(programme) {
    var sql = "INSERT INTO Student_Programme (id, programme) VALUES (?, ?)";
    await db.query(sql, [this.id, programme]);
    this.programme = programme;
}

async updateStudentProgramme(programme) {
    await this.getStudentProgramme();

    if (this.programme) {
        await this.deleteStudentProgramme();
    }

    await this.addStudentProgramme(programme);
}
async getStudentProgramme() {
    var sql = `
        SELECT Programmes.id, Programmes.name
        FROM Programmes
        JOIN Student_Programme ON Programmes.id = Student_Programme.programme
        WHERE Student_Programme.id = ?
    `;

    const results = await db.query(sql, [this.id]);

    if (results.length > 0) {
        this.programme = {
            id: results[0].id,
            pName: results[0].name
        };
    } else {
        this.programme = null;
    }
}
}
module.exports = {
    Student
};