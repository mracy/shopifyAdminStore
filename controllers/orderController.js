// server/controllers/orderController.js
const axios = require('axios');

const shopifyUrl = `${process.env.SHOPIFY_STORE_URL}/admin/api/2024-07/orders.json`;

exports.getOrders = async (req, res) => {
    try {
        const response = await axios.get(shopifyUrl, {
            headers: {
                'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
            },
        });

        const orders = response.data.orders;

        // Sort orders by total_price
        const sortedOrders = orders
            .sort((a, b) => parseFloat(b.total_price) - parseFloat(a.total_price));

        res.json(sortedOrders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
    }
};
