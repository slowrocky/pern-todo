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

const pooll = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});



module.exports = {
  query: (text, params) => pool.query(text, params),
};
