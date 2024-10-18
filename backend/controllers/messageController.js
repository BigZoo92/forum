const axios = require('axios');

const directusApiUrl = 'https://directus-ucmn.onrender.com/items/forum_messages';
const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1YzdiNmJlLTVlYTktNGQ4YS05ODExLWZjOTY1Y2U3Y2QyYyIsInJvbGUiOiIxZDliYmYzNC04Njg0LTQ5MjctODdlYS0yOGVmMWU2ZTAzYzQiLCJhcHBfYWNjZXNzIjp0cnVlLCJhZG1pbl9hY2Nlc3MiOnRydWUsImlhdCI6MTcyOTI1OTcyMywiZXhwIjoxNzI5Nzc4MTIzLCJpc3MiOiJkaXJlY3R1cyJ9.4M3SoZXrwBrdv8cqh_4AJSmqg9_9gojK2wMWkfkEULQ';

exports.getMessagesByForum = async (req, res) => {
  try {
    const forumId = parseInt(req.params.forumId);

    const response = await axios.get(directusApiUrl, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    });

    const messages = response.data.data;

    const forumMessages = messages.filter(message => message.room === forumId);

    res.json(forumMessages);
  } catch (error) {
    console.error('Error fetching messages from Directus:', error);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};

exports.createMessage = async (req, res) => {
  const { content, room } = req.body;
  try {
    const response = await axios.post(messageApiUrl, { content, room }, {
      headers: { Authorization: `Bearer ${jwtToken}` }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error creating message:', error);
    res.status(500).json({ error: 'Failed to create message' });
  }
};

exports.updateMessage = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.patch(`${directusApiUrl}/${id}`, req.body, {
      headers: { Authorization: `Bearer ${jwtToken}` }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error updating message:', error);
    res.status(500).json({ error: 'Failed to update message' });
  }
};

exports.deleteMessage = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.delete(`${directusApiUrl}/${id}`, {
      headers: { Authorization: `Bearer ${jwtToken}` }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error deleting message:', error);
    res.status(500).json({ error: 'Failed to delete message' });
  }
};
