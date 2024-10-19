<template>
  <div id="room_nav">
    <button class="burger" aria-label="Toggle menu" @click="toggleMenu">&#9776;</button>
    <h1>Forum n°1</h1> 
    <ul>
      <li v-for="(room, index) in rooms" :key="index" :class="'room-' + index">
        <a class="rooms" :href="'/chat-room/' +(index+1)">{{room.name}}</a>
      </li> 
    </ul>
  </div>
  <div class="main">
    <div id="scroll" ref="messages">
      <div class="message__container">
      <div class="message__infos-user">
        <p class="message__infos-user__name">User#974456</p>
        <p class="message__infos-user__date">2 hours ago</p>
      </div>
      <p class="message__text">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
      </div>
      <div class="message__container">
        <div class="message__infos-user">
          <p class="message__infos-user__name">User#974456</p>
          <p class="message__infos-user__date">2 hours ago</p>
        </div>
        <p class="message__text">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
      </div>
      <div class="message__container">
        <div class="message__infos-user">
          <p class="message__infos-user__name">User#974456</p>
          <p class="message__infos-user__date">2 hours ago</p>
        </div>
        <p class="message__text">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
      </div>
    </div>
    
    <form id="messageForm" @submit.prevent="handleSubmit">
        <input type="text" id="message" name="name" v-model="message" required placeholder="Écrivez votre message...">
        <button type="submit">Soumettre</button>
    </form>
  </div> 
</template>

<script>
import { io } from 'socket.io-client';
import { fetchRooms } from '../../services/topicService.js';

export default {
  name: 'ChatRoom',
  unmounted() {
    document.body.classList.remove('bodyClass');
  },
  data() {
    return {
      socket: null,
      room_id: null,
      newMessage: '', 
      messages: [] 
    };
  },
  beforeMount(){
    const response = fetchRooms();

    response.then(result => {
      console.log(result.name)
    });
  },
  mounted() {
    document.body.classList.add('bodyClass');
    this.scrollToBottom();

    // TODO DECOMMENT
      // const room_id = this.$route.params.id ;
      // TODO DECOMMENT

      // TODO REMOVE
      const room_id = "1";

      this.room_id = room_id
      // TODO REMOVE


    // TODO: REMOVE
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
    // TODO: REMOVE
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.socket.emit('message', { room: this.room, message: this.newMessage });
        this.newMessage = '';
      }
    },
    scrollToBottom() {
      const messagesDiv = this.$refs.messages;
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    },
  
  beforeUnmount() {
    // Déconnecter proprement lorsque le composant est détruit
    if (this.socket) {
      this.socket.disconnect();
    }
  },

    toggleMenu() {
        const menu = document.querySelector('#room_nav');
        const menu_ul = document.querySelector('#room_nav ul');
        const button = document.querySelector('.burger');

      if (menu.style.width === '100%' && menu.style.width === '100%' ) {
        button.innerHTML = '&#9776;';
        menu.style.width='0';
        menu.style.height='0';
        menu_ul.style.width='0';
        menu_ul.style.height='0';
      } else {
        button.innerHTML = '&#10006;';
        menu.style.width='100%';
        menu.style.height='100%';
        menu_ul.style.width='auto';
        menu_ul.style.height='auto';
      }
    }
  }
}
</script>