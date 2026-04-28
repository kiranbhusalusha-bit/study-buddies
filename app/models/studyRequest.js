// Get the functions in the db.js file to use
const db = require("./../services/db");

class StudyRequest {
    // Request ID
    id;

    // Request fields
    title;
    subject;
    description;

    constructor(id) {
        this.id = id;
    }

    // Get study request details from database
async getRequestDetails() {
    var sql = `
        SELECT 
            Study_Requests.id,
            Study_Requests.title,
            Study_Requests.description,
            Subjects.name AS subject
        FROM Study_Requests
        JOIN Subjects ON Study_Requests.subject_id = Subjects.id
        WHERE Study_Requests.id = ?
    `;

    const results = await db.query(sql, [this.id]);
    console.log(results);

    
    this.title = results[0].title;
    this.subject = results[0].subject;
    this.description = results[0].description;
}
}

module.exports = {
    StudyRequest
};