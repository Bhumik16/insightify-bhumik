const express = require('express');
const router = express.Router();
// const controller = require('../controllers/reviewsController'); 

router.get('/', (req, res) => {
    res.json({ message: 'reviews route working' });
});

module.exports = router;
