// Load environment variables from the .env file
require("dotenv").config();

// Import mysql2 promise version so we can use async / await
const mysql = require("mysql2/promise");

// Database configuration.
// Values come from .env, not directly written here.
const config = {
  db: {
    host: process.env.DB_CONTAINER,
    port: process.env.DB_PORT,
    user: process.env.MYSQL_ROOT_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 2,
    queueLimit: 0,
  },
};

// Create a pool of database connections
const pool = mysql.createPool(config.db);

// Utility function to query the database
async function query(sql, params) {
  const [rows, fields] = await pool.execute(sql, params);

  return rows;
}

// Export the query function so app.js can use it
module.exports = {
  query,
};