const { products } = require('../models/productsModel');

const getProducts = async (req, res) => {
    try {
        const allProducts = await products();
        res.status(200).json({ success: true, message: 'All products', products: allProducts });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching products', error });
    }
};

module.exports = {
    getProducts
};