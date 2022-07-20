const Pool = require("pg").Pool;

const {
  db: { USER, PASSWORD, HOST, PORT, NAME },
} = require("../config");

const pool = new Pool({
  user: USER,
  password: PASSWORD,
  host: HOST,
  port: PORT,
  database: NAME,
});

module.exports = pool;
