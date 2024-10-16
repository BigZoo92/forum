const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.get('/messages/:forumId', messageController.getMessagesByForum);

module.exports = router;
