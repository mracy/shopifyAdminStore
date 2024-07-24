// server/index.js
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || "your_port";

// Middleware
app.use(express.json());

// Routes
const productRoutes = require('./routes/productRoutes');
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use('/api', productRoutes);
app.use('/api', customerRoutes);
app.use('/api', orderRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
