require("dotenv").config();
const pg = require("pg");
const connectStr = process.env.DATABASE_URL;

const db = new pg.Pool({ connectionString: connectStr });

module.exports = db;