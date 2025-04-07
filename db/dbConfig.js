const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const db = mysql.createPool({
	host: "102.218.50.130",
	user: "evangadi-admin",
	password: process.env.DB_PASSWORD,
	database: "evangadi-forum",
});

module.exports = db.promise();
