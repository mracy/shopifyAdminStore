const axios = require('axios');
require('dotenv').config();

const shopifyBaseUrl = `https://${process.env.SHOPIFY_STORE_URL}/admin/api/2024-07`;

// Function to fetch orders from Shopify
const fetchOrders = async () => {
  try {
    const response = await axios.get(`${shopifyBaseUrl}/orders.json?status=any`, {
      headers: {
        'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
      },
    });
    return response.data.orders;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

// Function to calculate quantity sold for each variant
const calculateQuantitySold = (orders) => {
  const productSales = {};

  orders.forEach(order => {
    order.line_items.forEach(item => {
      if (productSales[item.variant_id]) {
        productSales[item.variant_id] += item.quantity;
      } else {
        productSales[item.variant_id] = item.quantity;
      }
    });
  });

  return productSales;
};

// Function to add quantity sold information to products
const addQuantitySoldToProducts = (products, productSales) => {
  products.forEach(product => {
    product.variants.forEach(variant => {
      variant.quantitySold = productSales[variant.id] || 0;
    });
  });

  return products;
};

// Controller function to get best-selling products
const getBestSellingProducts = async (req, res) => {
  try {
    // Fetch products
    const productsResponse = await axios.get(`${shopifyBaseUrl}/products.json`, {
      headers: {
        'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
      },
    });
    const products = productsResponse.data.products;

    // Fetch orders
    const orders = await fetchOrders();

    // Calculate quantity sold for each variant
    const productSales = calculateQuantitySold(orders);

    // Add quantitySold to products
    const productsWithSales = addQuantitySoldToProducts(products, productSales);

    // Sort products by quantitySold and return top 5 variants
    const sortedProducts = productsWithSales.flatMap(product =>
      product.variants.map(variant => ({
        ...variant,
        productTitle: product.title,
        quantitySold: variant.quantitySold
      }))
    ).sort((a, b) => b.quantitySold - a.quantitySold).slice(0, 5);

    res.json(sortedProducts);
  } catch (error) {
    console.error('Error fetching best-selling products:', error);
    res.status(500).json({ message: 'Error fetching best-selling products', error: error.message });
  }
};

module.exports = { getBestSellingProducts };
