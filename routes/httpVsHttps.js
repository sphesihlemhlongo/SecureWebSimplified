const express = require('express');
const path = require('path');
const crypto = require('crypto');

const router = express.Router();

require('dotenv').config();
const secretKey = process.env.SECRET_KEY;

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
    if (!secretKey) {
        return res.status(500).send('Encryption key is missing!');
    }

    const cipher = crypto.createCipher('aes-256-cbc', secretKey);
    let encrypted = cipher.update('This is HTTPS data transfer: Encrypted!', 'utf8', 'hex');
    encrypted += cipher.final('hex');

    res.send(`Encrypted Data: ${encrypted}`);
});


module.exports = router;
