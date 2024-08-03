const { products } = require("../models/productsModel");

const getProducts = async (req, res) => {
  try {
    const allProducts = await products();
    res
      .status(200)
      .json({ success: true, message: "All products", products: allProducts });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching products", error });
  }
};

const getSubscriptions = async (req, res) => {
  try {
    const allSubscriptions = await subscriptions();
    res.status(200).json({
      success: true,
      message: "All Subscriptions",
      subscriptions: allSubscriptions,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching subscriptions", error });
  }
};

const getGoods = async (req, res) => {
  try {
    const allGoods = await goods();
    res.status(200).json({
      success: true,
      message: "All Goods",
      goods: allGoods,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching goods", error });
  }
};

module.exports = {
  getProducts,
  getSubscriptions,
  getGoods,
};
