const db = require("../services/db");
const bcrypt = require("bcryptjs");

class User {
    id;
    email;

    constructor(email) {
        this.email = email;
    }

    async getIdFromEmail() {
        var sql = "SELECT id FROM Users WHERE email = ?";
        const result = await db.query(sql, [this.email]);

        if (result.length > 0) {
            this.id = result[0].id;
            return this.id;
        }

        return false;
    }

    async setUserPassword(password) {
        const pw = await bcrypt.hash(password, 10);
        var sql = "UPDATE Users SET password = ? WHERE id = ?";
        await db.query(sql, [pw, this.id]);
        return true;
    }

    async addUser(password) {
        const pw = await bcrypt.hash(password, 10);
        var sql = "INSERT INTO Users (email, password) VALUES (?, ?)";
        const result = await db.query(sql, [this.email, pw]);

        this.id = result.insertId;
        return true;
    }

    async authenticate(submitted) {
        var sql = "SELECT password FROM Users WHERE id = ?";
        const result = await db.query(sql, [this.id]);

        if (result.length === 0 || !result[0].password) {
            return false;
        }

        const match = await bcrypt.compare(submitted, result[0].password);
        return match;
    }
}

module.exports = {
    User
};