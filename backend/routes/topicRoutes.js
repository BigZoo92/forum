const express = require('express');
const router = express.Router();
const roomController = require('../controllers/topicController');

router.get('/rooms', roomController.getRooms);
router.get('/rooms/:id', roomController.getRoomById);
router.post('/rooms', roomController.createRoom);
router.delete('/rooms/:id', roomController.deleteRoom);

module.exports = router;
