const pool = require("../db");

const products = async () => {
  const result = await pool.query("SELECT * FROM products");
  return result.rows;
};

const subscriptions = async () => {
  const result = await pool.query("SELECT * FROM subscriptions");
  return result.rows;
};

const goods = async () => {
  const result = await pool.query("SELECT * FROM goods");
  return result.rows;
};

module.exports = {
  products,
  subscriptions,
  goods,
};
