const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/most-valuable-customers', customerController.getMostValuableCustomers);

module.exports = router;
