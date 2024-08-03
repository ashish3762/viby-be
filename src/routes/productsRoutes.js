const express = require("express");
const { getProducts, getSubscriptions, getGoods } = require("../controllers/productsController");
const router = express.Router();

router.get("/products", getProducts);
router.get("/subscriptions", getSubscriptions);
router.get("/goods", getGoods);

module.exports = router;