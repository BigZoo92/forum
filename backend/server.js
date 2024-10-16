const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose'); // ou sequelize si tu utilises une base SQL
const { v4: uuidv4 } = require('uuid'); // pour générer un id unique

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Connexion à MongoDB (par exemple)
mongoose.connect('mongodb://localhost/chatDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const chatSchema = new mongoose.Schema({
  username: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});

const userSchema = new mongoose.Schema({
  username: String,
  userId: String,
  joinedAt: { type: Date, default: Date.now },
});

const ChatMessage = mongoose.model('ChatMessage', chatSchema);
const User = mongoose.model('User', userSchema);

// Gérer les connexions WebSocket
io.on('connection', (socket) => {
  console.log('User connected');

  // Envoyer les messages stockés à l'utilisateur qui se connecte
  ChatMessage.find().then((messages) => {
    socket.emit('initialMessages', messages);
  });

  socket.on('sendMessage', (data) => {
    const newMessage = new ChatMessage(data);
    newMessage.save().then(() => {
      io.emit('newMessage', data);
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Route pour ajouter un nouvel utilisateur avec un ID personnalisé
app.get('/new-user', (req, res) => {
  const userId = uuidv4(); // Générer un ID unique
  const newUser = new User({ username: 'User' + userId.slice(0, 5), userId }); // Username basé sur l'id

  newUser.save().then(() => {
    res.send(`Nouveau user est arrivé ! ID: ${newUser.userId}, Nom: ${newUser.username}`);
    console.log(`Nouveau user est arrivé: ${newUser.username}`);
  }).catch(err => {
    res.status(500).send('Erreur lors de la création de l\'utilisateur');
    console.error(err);
  });
});

app.get('/', (req, res) => {
  res.send('salut pelo')
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
