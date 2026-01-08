const express = require('express');
const router = express.Router();
// const controller = require('../controllers/analysisController'); 

router.get('/', (req, res) => {
    res.json({ message: 'analysis route working' });
});

module.exports = router;
