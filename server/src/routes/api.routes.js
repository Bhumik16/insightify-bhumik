const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// App Data
router.get('/apps/:id', apiController.getAppDetails);
router.get('/apps/:id/reviews', apiController.getReviews);

// Chat / AI
router.get('/chat/history', apiController.getChatHistory);
router.post('/chat/message', apiController.saveChatMessage);

module.exports = router;
