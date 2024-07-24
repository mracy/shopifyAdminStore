// server/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { getBestSellingProducts } = require('../controllers/productController');

router.get('/best-selling-products', getBestSellingProducts);

module.exports = router;
