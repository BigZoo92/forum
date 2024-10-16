<template>
  <div id="app">
    <div>
      <h2>Chat Simple</h2>
      <input
        v-model="newMessage"
        placeholder="Tapez votre message ici"
        @keyup.enter="sendMessage"
      />
      <button @click="sendMessage">Envoyer</button>
    </div>
    <div>
      <h3>Messages envoyés :</h3>
      <ul>
        <li v-for="(message, index) in messages" :key="index">{{ message }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { io } from 'socket.io-client';

export default {
  name: 'App',
  data() {
    return {
      socket: null,
      newMessage: '', 
      messages: [] 
    };
  },
  mounted() {
    this.socket = io('http://localhost:3000');

    this.socket.on('connect', () => {
      console.log('Connecté au serveur Socket.IO');
    });

    this.socket.on('disconnect', () => {
      console.log('Déconnecté du serveur Socket.IO');
    });

    this.socket.on('message', (msg) => {
      console.log('Message reçu:', msg);
      this.messages.push(msg);
    });
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim()) {
        this.socket.emit('message', this.newMessage);
        this.messages.push(`Vous : ${this.newMessage}`);
        this.newMessage = '';
      }
    }
  },
  beforeUnmount() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
};
</script>