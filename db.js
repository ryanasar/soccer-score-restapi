const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'soccer-score-db.cd64e0e6k491.us-east-1.rds.amazonaws.com',
    database: 'postgres',
    password: 'matuidipsg',
    port: 9816,
    ssl: {
        rejectUnauthorized: false
    }
})

pool.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to the database!');
})

module.exports = pool;
