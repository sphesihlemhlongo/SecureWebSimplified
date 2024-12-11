const express = require('express');
const morgan = require('morgan');
const httpVsHttpsRoutes = require('./routes/httpVsHttps'); // Import the HTTP/HTTPS route handler

const app = express();
const PORT = 3000;


// Middleware: Use Morgan to log HTTP requests
app.use(morgan('combined'));

// Serve static files from the public folder
app.use(express.static('public'));

// Use the HTTP vs HTTPS routes
app.use(httpVsHttpsRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(`Error occurred: ${err.message}`);
    res.status(500).send('Something went wrong!');
});
