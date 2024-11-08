const { database } = require('pg/lib/defaults');

const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'appuser',
    password: 'matuidipsg',
    port: 5432
})

module.exports = pool;
