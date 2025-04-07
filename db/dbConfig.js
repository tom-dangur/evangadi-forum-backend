const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const db = mysql.createPool({
	host: "102.218.50.130",
	user: "tomdanha_evangadi-admin",
	password: process.env.DB_PASSWORD,
	database: "tomdanha_evangadi-forum",
});

module.exports = db.promise();
