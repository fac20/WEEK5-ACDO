const dotenv = require("dotenv");
const pg = require("pg");
dotenv.config();

const connectStr = process.env.DATABASE_URL;

const db = new pg.Pool({ connectStr });

module.exports = db;