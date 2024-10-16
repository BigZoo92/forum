// room.js
const ChatMessage = require('./models/ChatMessage');

function handleRoom(socket, io) {
  // Joindre un utilisateur à une room
  socket.on('joinRoom', ({ username, room }) => {
    socket.join(room);
    console.log(`${username} a rejoint la room ${room}`);

    // Récupérer les messages stockés pour la room
    ChatMessage.find({ room }).then((messages) => {
      socket.emit('previousMessages', messages);
    });

    // Notifier les autres utilisateurs de la room
    socket.broadcast.to(room).emit('userJoined', `${username} a rejoint la room`);
  });

  // Gérer l'envoi de messages
  socket.on('sendMessage', ({ username, room, message }) => {
    const newMessage = new ChatMessage({ username, room, message });
    newMessage.save().then(() => {
      io.to(room).emit('newMessage', { username, message });
    });
  });
}

module.exports = { handleRoom };