const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "123",
    host: "localhost",
    database: "tododb"
});

module.exports = pool;
