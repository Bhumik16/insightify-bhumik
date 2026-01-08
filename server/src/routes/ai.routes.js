const express = require('express');
const router = express.Router();
// const controller = require('../controllers/aiController'); 

router.get('/', (req, res) => {
    res.json({ message: 'ai route working' });
});

module.exports = router;
