const { Pool } = require('pg');
require('dotenv').config();

console.log('Connecting to database:', process.env.SUPABASE_DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.SUPABASE_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Connected to database');
  release();
});

module.exports = pool;