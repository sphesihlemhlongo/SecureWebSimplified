const express = require('express');
const path = require('path');
const crypto = require('crypto');

const router = express.Router();

// Route to serve the HTTP vs HTTPS comparison page
router.get('/http-vs-https', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/http-vs-https.html'));
});

// Route to simulate HTTP (plaintext data transfer)
router.get('/simulate-http', (req, res) => {
    res.send('This is HTTP data transfer: No encryption!');
});

// Route to simulate HTTPS (encrypted data transfer)
router.get('/simulate-https', (req, res) => {
    const secureData = crypto.createCipher('aes-256-cbc', 'password').update(
        'This is HTTPS data transfer: Encrypted!',
        'utf8',
        'hex'
    );
    res.send(secureData);
});

module.exports = router;
