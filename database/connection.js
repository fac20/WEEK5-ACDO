const dotenv = require("dotenv");
const pg = require("pg");
dotenv.config();
console.log(process.env.DATABASE_URL);
const connectStr = process.env.DATABASE_URL;

const db = new pg.Pool({ connectStr });

// db.query("SELECT * FROM users").then((result)=> console.log(result));

module.exports = db;