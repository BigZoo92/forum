require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

// Utiliser le middleware CORS
app.use(cors());
app.use(express.json()); // Middleware pour parser le corps des requêtes JSON

const server = http.createServer(app);
const io = socketIo(server);

// Configurer Nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false, // Utilisez false pour STARTTLS
  auth: {
    user: 'rejoinsMaSuperRoom@outlook.com',
    pass: process.env.EMAIL_APP_PASSWORD // Stocke le mot de passe dans un fichier .env pour plus de sécurité
  },
  connectionTimeout: 10000, // Délai d'attente de 10 secondes
  logger: true, // Active les logs
  debug: true   // Active le mode debug
});

app.post('/invite', async (req, res) => {
  const { email, room } = req.body;
  const inviteLink = `http://localhost:3000/join?room=${room}`; // Change le port vers 3000, car frontend et backend sont unifiés maintenant
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

// Servir les fichiers statiques du frontend (dist)

const frontendDir = path.join(__dirname, 'public');

app.use('/', express.static(frontendDir))

app.get('*', (req, res) => {
  res.sendFile(path.join(frontendDir, 'index.html'));
});

// WebSocket avec Socket.io
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

// Démarrage du serveur
server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
