const pool = require('../db');

const products = async () => {
    const result = await pool.query(
        'SELECT * FROM products'
    );
    return result.rows;
};

module.exports = {
    products
};