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
    };
  },
  mounted() {
    // Se connecter au serveur Socket.IO sur localhost:3000
    this.socket = io('http://localhost:3000');

    // Gérer les événements de connexion et déconnexion
    this.socket.on('connect', () => {
      console.log('Connecté au serveur Socket.IO');
      // Émettre un événement de connexion
      this.socket.emit('connection', { message: 'User connected' });
    });

    this.socket.on('disconnect', () => {
      console.log('Déconnecté du serveur Socket.IO');
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