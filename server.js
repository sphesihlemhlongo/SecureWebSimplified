const express = require('express');
const path = require('path');
const httpVsHttpsRoutes = require('./routes/httpVsHttps'); // Import the HTTP/HTTPS route handler

const app = express();
const PORT = 3000;




// Serve static files from the public folder
app.use(express.static('public'));

// Use the HTTP vs HTTPS routes
app.use(httpVsHttpsRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
