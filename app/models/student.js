// Get the functions in the db.js file to use
const db = require("./../services/db");

class Student {
    id;
    note;
    name;
    subjects = [];
    picture;
    bio;
    availability;
    needs;

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
            this.picture = results[0].picture;
            this.bio = results[0].bio;
            this.availability = results[0].availability;
            this.needs = results[0].needs;
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

    async updateProfile(name, bio, availability, needs) {
        var sql = "UPDATE Students SET name = ?, bio = ?, availability = ?, needs = ? WHERE id = ?";
        const result = await db.query(sql, [name, bio, availability, needs, this.id]);

        this.name = name;
        this.bio = bio;
        this.availability = availability;
        this.needs = needs;
        return result;
    }

    async deleteAccount() {
        // Remove dependent data first to avoid foreign key constraint errors
        await db.query("DELETE FROM Student_Subject WHERE student_id = ?", [this.id]);
        await db.query("DELETE FROM Study_Requests WHERE student_id = ?", [this.id]);
        return await db.query("DELETE FROM Students WHERE id = ?", [this.id]);
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