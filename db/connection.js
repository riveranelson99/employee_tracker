// This is to simply set up the sql connection for all query searches that will be utilized by the app
const mysql = require("mysql2");

const db = mysql.createConnection(
    {
    host: "localhost",
    user: "root",
    password: "n+F?RWX6QQy7dx<f",
    database: "employee_db"
    }
);

module.exports = db;