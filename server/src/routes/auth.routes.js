const express = require('express');
const router = express.Router();
// const controller = require('../controllers/authController'); 

router.get('/', (req, res) => {
    res.json({ message: 'auth route working' });
});

module.exports = router;
