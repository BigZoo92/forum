const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const topicRoutes = require('./routes/topicRoutes');
const messageRoutes = require('./routes/messageRoutes');

const app = express();

app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: ["http://localhost:8080","http://localhost:8081","https://forum-1-x9pn.onrender.com"],
    methods: ["GET", "POST"]
  }

});

app.get('/', (req, res) => {
  res.send('hello world');
});

io.on('connection', (socket) => {
  console.log('User connected');
  
  socket.on('joinRoom', ({ room }) => {
    socket.join(room);
    console.log(`User joined room: ${room}`);
    socket.to(room).emit('message', `A new user has joined the room: ${room}`);
  })

  socket.on('message', (msg) => {
    console.log("Message reçu du client :", msg);
    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

app.get('/', (req, res) => {
  res.send('salut pelo')
});
})

app.use('/api', userRoutes);
app.use('/api', topicRoutes);
app.use('/api', messageRoutes);

server.listen(3000, () => {
  console.log("listening to 3000");
});