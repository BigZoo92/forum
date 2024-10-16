const { log } = require('console');
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors'); // Importer le middleware CORS


const app = express();
const server = http.createServer(app);

app.use(cors({
  origin: 'http://localhost:8080', // Autorise uniquement localhost:8080
  methods: ['GET', 'POST']
}));

// Configurer Socket.IO avec CORS
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:8080", // Autoriser localhost:8080
    methods: ["GET", "POST"]
  }
});
// Connexion à MongoDB (par exemple)
app.get('/', (req,res) => {
  res.send('hello world')
})

io.on('connection', (socket) => {
  console.log("yes anthonin")
})

server.listen(3000, () => {
  console.log("listening to 3000")
})