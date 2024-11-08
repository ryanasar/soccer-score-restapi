const { database } = require('pg/lib/defaults');

const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'matuidipsg',
    port: 5433
})

module.exports = pool;
