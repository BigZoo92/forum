<template>
  <div>
    <h1>Forum n°1</h1>
    <p>Regarde la console pour voir les événements de connexion.</p>
  </div>
</template>

<script>
import { io } from 'socket.io-client';

export default {
  name: 'ChatRoom',
  data() {
    return {
      socket: null,
      room: 'room1', // Nom de la room à rejoindre
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
    });
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