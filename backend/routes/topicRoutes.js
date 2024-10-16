const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topicController');

router.get('/topics', topicController.getTopics);

module.exports = router;
