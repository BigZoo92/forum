const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topicController');

router.get('/topics', topicController.getTopics);
router.get('/topic/:topicId', topicController.getTopicsById);

module.exports = router;
