const express = require('express');
const { getProducts } = require('../controllers/productsController');
const router = express.Router();

router.get('/products', getProducts);

module.exports = router;