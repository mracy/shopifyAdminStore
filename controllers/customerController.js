const axios = require('axios');
const https = require('https');
require('dotenv').config();

// Create an HTTPS agent (optional, remove if not needed)
const agent = new https.Agent({ rejectUnauthorized: true });

const shopifyBaseUrl = `https://${process.env.SHOPIFY_STORE_URL}/admin/api/2024-07`;

// Controller function to get the most valuable customers
const getMostValuableCustomers = async (req, res) => {
  try {
    // Fetch customers
    const customersResponse = await axios.get(`${shopifyBaseUrl}/customers.json`, {
      headers: {
        'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
      },
      httpsAgent: agent  // Remove if you are not using the HTTPS agent
    });

    const customers = customersResponse.data.customers;

    // Fetch orders
    const ordersResponse = await axios.get(`${shopifyBaseUrl}/orders.json?status=any`, {
      headers: {
        'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
      },
      httpsAgent: agent  // Remove if you are not using the HTTPS agent
    });

    const orders = ordersResponse.data.orders;

    // Calculate total purchase value per customer
    const customerPurchases = {};
    orders.forEach(order => {
      const customerId = order.customer ? order.customer.id : null;
      if (customerId) {
        customerPurchases[customerId] = (customerPurchases[customerId] || 0) + parseFloat(order.total_price);
      }
    });

    // Add total purchase value to customers
    customers.forEach(customer => {
      customer.totalPurchaseValue = customerPurchases[customer.id] || 0;
    });

    // Sort customers by total purchase value and return top 5
    const sortedCustomers = customers
      .sort((a, b) => b.totalPurchaseValue - a.totalPurchaseValue)
      .slice(0, 5);

    console.log('Top 5 Customers:', sortedCustomers);  // Log top 5 customers

    res.json(sortedCustomers);
  } catch (error) {
    console.error('Error fetching customers:', error.message);
    res.status(500).json({ message: 'Error fetching customers', error: error.message });
  }
};

module.exports = { getMostValuableCustomers };
