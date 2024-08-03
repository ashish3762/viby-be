const pool = require("../db");

const createUser = async (firstName, lastName, email, password) => {
  const result = await pool.query(
    "INSERT INTO users (firstName, lastName, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
    [firstName, lastName, email, password]
  );
  return result.rows[0];
};

const findUserByEmail = async (email) => {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return result.rows[0];
};

const findUserByUsername = async (username) => {
  const result = await pool.query("SELECT * FROM uers WHERE username = $1", [
    username,
  ]);
  return result.rows[0];
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserByUsername,
};
