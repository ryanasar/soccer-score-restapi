const { database } = require('pg/lib/defaults');

const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'soccer-score-db.cd64e0e6k491.us-east-1.rds.amazonaws.com',
    database: 'postgres',
    password: 'matuidipsg',
    port: 9816
})

module.exports = pool;
