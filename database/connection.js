require("./dotenv").config();
const pg = require("pg");

const connectStr = process.env.CONNECTION;

const db = new pg.Pool({ connectStr });const db = new pg.Pool({ connectStr });

module.exports = db;