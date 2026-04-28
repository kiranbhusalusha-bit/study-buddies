const db = require('../services/db');

class Programme {
    id;
    pName;

    constructor(id) {
        this.id = id;
    }

    async getProgrammeName() {
        var sql = "SELECT * FROM Programmes WHERE id = ?";
        const results = await db.query(sql, [this.id]);

        this.pName = results[0].name;
    }
}

module.exports = {
    Programme
};