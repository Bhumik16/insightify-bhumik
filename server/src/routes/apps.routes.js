const express = require('express');
const router = express.Router();
// const controller = require('../controllers/appsController'); 

router.get('/', (req, res) => {
    res.json({ message: 'apps route working' });
});

module.exports = router;
