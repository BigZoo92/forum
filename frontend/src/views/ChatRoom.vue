<template>
  <div>
    <h1>Forum n°1</h1>
    <p>Regarde la console pour voir les événements de connexion.</p>
    <div>
      <ul>
        <li v-for="(msg, index) in messages" :key="index">{{ msg }}</li>
      </ul>
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type your message here..." />
      <button @click="sendMessage">Send</button>
    </div>
    <div>
      <h2>Invite someone to the room</h2>
      <input v-model="inviteEmail" placeholder="Enter email" />
      <button @click="sendInvite">Send Invite</button>
    </div>
  </div>
</template>

<script>
import { io } from 'socket.io-client';
import axios from 'axios';

export default {
  name: 'ChatRoom',
  data() {
    return {
      socket: null,
      room: 'room1', // Nom de la room à rejoindre
      messages: [],
      newMessage: '',
      inviteEmail: 'rejoinsMaSuperRoom@outlook.com'
    };
  },
  mounted() {
    // Se connecter au serveur Socket.IO sur localhost:3000
    this.socket = io('http://localhost:3000');

    // Gérer les événements de connexion et déconnexion
    this.socket.on('connect', () => {
      console.log('Connecté au serveur Socket.IO');
      // Rejoindre automatiquement la room "room1"
      this.socket.emit('joinRoom', { room: this.room });
    });

    this.socket.on('disconnect', () => {
      console.log('Déconnecté du serveur Socket.IO');
    });

    // Écouter les messages de la room
    this.socket.on('message', (message) => {
      console.log(`Message from room: ${message}`);
      this.messages.push(message);
    });
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.socket.emit('message', { room: this.room, message: this.newMessage });
        this.newMessage = '';
      }
    },
    sendInvite() {
      axios.post('http://localhost:3000/invite', {
        email: this.inviteEmail,
        room: this.room
      }).then(response => {
        console.log('Invitation sent:', response.data);
      }).catch(error => {
        console.error('Error sending invitation:', error);
      });
    }
  },
  beforeUnmount() {
    // Déconnecter proprement lorsque le composant est détruit
    if (this.socket) {
      this.socket.disconnect();
    }
  }
};
</script>

<style scoped>
/* Styles spécifiques à la page */
</style>