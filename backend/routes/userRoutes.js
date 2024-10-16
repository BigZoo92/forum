const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users/:userId', userController.getUsersById);
router.get('/users/message/:messageId', userController.getUserByMessageId);

module.exports = router;
