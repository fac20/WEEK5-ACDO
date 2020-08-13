require("dotenv").config();
const pg = require("pg");

const connectStr = process.env.DATABASE_URL;

const db = new pg.Pool({ connectionString: connectStr });

// db.query("SELECT * FROM users").then((result)=> console.log(result));

module.exports = db;