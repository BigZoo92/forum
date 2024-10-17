const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.get('/messages/:forumId', messageController.getMessagesByForum);
router.post('/messages', messageController.createMessage);
router.patch('/messages/:id', messageController.updateMessage);
router.delete('/messages/:id', messageController.deleteMessage);

module.exports = router;
