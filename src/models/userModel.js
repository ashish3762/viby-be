const pool = require('../db');

const createUser = async (first_name, last_name, email, password) => {
    const result = await pool.query(
        'INSERT INTO Users (first_name, last_name, email, password) VALUES ($1, $2, $3) RETURNING *',
        [first_name, last_name, email, password]
    );
    return result.rows[0];
};

const findUserByEmail = async (email) => {
    const result = await pool.query(
        'SELECT * FROM Users WHERE email = $1',
        [email]
    );
    return result.rows[0];
};

const findUserByUsername = async (username) => {
    const result = await pool.query(
        'SELECT * FROM Users WHERE username = $1',
        [username]
    );
    return result.rows[0];
};

module.exports = {
    createUser,
    findUserByEmail,
    findUserByUsername
};