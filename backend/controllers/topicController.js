const axios = require('axios');
const { getAccessToken } = require('../utils/getAccessToken');

const directusApiUrl = 'https://directus-ucmn.onrender.com/items/forum_rooms';

exports.getRooms = async (req, res) => {
  try {
    const jwtToken = await getAccessToken();
    const response = await axios.get(directusApiUrl, {
      headers: { Authorization: `Bearer ${jwtToken}` }
    });
    res.json(response.data.data);
  } catch (error) {
    console.error('Error fetching rooms:', error);
    res.status(500).json({ error: 'Failed to fetch rooms' });
  }
};

exports.createRoom = async (req, res) => {
  const { title } = req.body;
  const jwtToken = await getAccessToken();
  try {
    const response = await axios.post(directusApiUrl, { title }, {
      headers: { Authorization: `Bearer ${jwtToken}` }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error creating room:', error);
    res.status(500).json({ error: 'Failed to create room' });
  }
};

exports.deleteRoom = async (req, res) => {
  const { id } = req.params;
  const jwtToken = await getAccessToken();
  try {
    const response = await axios.delete(`${directusApiUrl}/${id}`, {
      headers: { Authorization: `Bearer ${jwtToken}` }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error deleting room:', error);
    res.status(500).json({ error: 'Failed to delete room' });
  }
};

exports.getRoomById = async (req, res) => {
  const roomId = req.params.id;
  const jwtToken = await getAccessToken();
  try {
    const response = await axios.get(directusApiUrl, {
      headers: { Authorization: `Bearer ${jwtToken}` }
    });

    const rooms = response.data.data;
    const room = rooms.find(r => r.id === roomId);

    if (room) {
      res.json(room);
    } else {
      res.status(404).json({ error: 'Room not found' });
    }
  } catch (error) {
    console.error('Error fetching room by ID:', error);
    res.status(500).json({ error: 'Failed to fetch room by ID' });
  }
};