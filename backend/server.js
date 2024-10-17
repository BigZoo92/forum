require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Utiliser le middleware CORS
app.use(cors());
app.use(express.json()); // Middleware pour parser le corps des requêtes JSON

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:8080", // Remplacez par l'origine de votre client
    methods: ["GET", "POST"]
  }
});

// Configurer Nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587, // Utiliser le port 587 pour TLS (STARTTLS)
  secure: false, // Ne pas utiliser SSL directement (secure doit être false pour le port 587)
  auth: {
    user: 'rejoinsMaSuperRoom@outlook.com', // Ton email Outlook
    pass: 'azerty123!' // Le mot de passe de ton compte Outlook
  },
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false // Autoriser les certificats non reconnus
  }
});

app.post('/invite', async (req, res) => {
  const { email, room } = req.body;
  const inviteLink = `http://localhost:8080/join?room=${room}`;

  const mailOptions = {
    from: 'rejoinsMaSuperRoom@outlook.com',
    to: email,
    subject: 'Vous avez été invité à rejoindre un forum !',
    text: `Acceptez l'invitation en cliquant sur ce lien : ${inviteLink}`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.send('Invitation sent');
    console.log('Email sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

io.on('connection', (socket) => {
  console.log('User connected');
  
  socket.on('joinRoom', ({ room }) => {
    socket.join(room);
    console.log(`User joined room: ${room}`);
    socket.to(room).emit('message', `A new user has joined the room: ${room}`);
  });

  socket.on('message', (msg) => {
    console.log("Message reçu du client :", msg);
    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});