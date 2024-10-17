<template>
  <div id="room_nav">
    <h1>Forum n°1</h1> 
    <ul>
      <li v-for="(room, index) in rooms" :key="index" :class="'room-' + index">
        <a class="rooms" :href="'/chat-room/' +(index+1)">{{room.name}}</a>
      </li> 
    </ul>
  </div>
  <div class="main" ref="messages">
    <div id="scroll">
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
// import { io } from 'socket.io-client';

export default {
  name: 'ChatRoom',
  mounted() {
    document.body.classList.add('bodyClass');
    this.scrollToBottom();
    this.checkScrollDivs(); 
  },
  unmounted() {
    document.body.classList.remove('bodyClass')
  },
  data() {
    return {
      socket: null,
      newMessage: '', 
      messages: [] 
    };
  },
  mounted() {
    document.body.classList.add('bodyClass');
    // this.socket = io('http://localhost:3000');

    // this.socket.on('connect', () => {
    //   console.log('Connecté au serveur Socket.IO');
    // });

    // this.socket.on('disconnect', () => {
    //   console.log('Déconnecté du serveur Socket.IO');
    // });

    // this.socket.on('message', (msg) => {
    //   console.log('Message reçu:', msg);
    //   this.messages.push(msg);
    // });
  },
  unmounted() {
    document.body.classList.remove('bodyClass');
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim()) {
        this.socket.emit('message', this.newMessage);
        this.messages.push(`Vous : ${this.newMessage}`);
        this.newMessage = '';
      }
    },
    scrollToBottom() {
      const messagesDiv = this.$refs.messages;
      console.log('scrollHeight:', messagesDiv.scrollHeight, 'scrollTop:', messagesDiv.scrollTop);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    },
  },
  beforeUnmount() {
    if (this.socket) {
      this.socket.disconnect();
    },
  }
}
</script>

<style>

html, .bodyClass {
  height: 100%;
  margin: 0;
}

.bodyClass {
  background-color: #1E252b;
  margin-left: 250px;
}

#room_nav {
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 60px;
  background-color: #1E252B;
  color: white;
  border-radius: 10px;
}

#room_nav h1, ul {
  text-align: center;
  list-style: none;
  padding: 0;

}

#room_nav h1 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
  color: white; 
}

#room_nav ul {
  padding: 10px;
  margin: 10px;
  border-radius: 10px;

  background-color: #262D34;
}
#room_nav li {
  margin-bottom: 20px;
  padding: 10px;
  transition: background-color 0.3s ease;
}

#room_nav li:hover {
  background-color: #292945; 
  border-radius: 10px;
}

.rooms {
  font-size: 18px;
  text-decoration: none;
  color: #b1b1b1;
}

.rooms:hover {
  color: white;
}

.message__container {
    margin-top: 15px;
    background-color: #262D34;;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    width: 1200px;
    border-radius: 12px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

@media (max-width: 1280px) {
    .message__container {
        width: 90%;
    }
}

.message__infos-user {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.message__infos-user__name {
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
}

.message__infos-user__date {
    font-size: 16px;
    font-weight: 400;
    color: #b1b1b1;
}

@media (max-width: 768px) {
    .message__infos-user__date {
        font-size: 14px;
    }
}

.message__text {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    color: #F7F7F7;
}

@media (max-width: 768px) {
    .message__text {
        font-size: 14px;
    }
}

#messageForm {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1E252B;
  border-radius: 10px;
  padding: 10px 20px;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: calc(100% - 307px);
  left: 250px;
  bottom: 0;
  z-index: 1;
  margin: 0;
}

#message {
  flex-grow: 1;
  background-color: #262D34;
  border: none;
  border-radius: 6px;
  padding: 12px;
  color: white;
  font-size: 16px;
}

#message::placeholder {
  color: #8a8a9b; 
}

#messageForm button {
  background-color: #ff652f;
  border: none;
  border-radius: 6px;
  padding: 12px 20px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-left: 15px;
  transition: background-color 0.3s ease;
}

#messageForm button:hover {
  background-color: #e65523;
}

.main {

  height: 625px;
  overflow-y: auto;
  padding-bottom: 80px;
}

#scroll {
  padding: 10px;
}
</style>
