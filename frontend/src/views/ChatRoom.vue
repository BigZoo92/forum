<template>
  <h1>Forum n°1</h1>
  <div id="content">  
    <div id="room_list">
      <ul>
        <li v-for="(room, index) in rooms" :key="index" :class="'room-' + index">
          <a :href="'/chat-room/' +(index+1)">{{room.name}}</a>
        </li> 
      </ul>
    </div>
    <div class="message__container">
      <div class="message__infos-user">
          <p class="message__infos-user__name">User#974456</p>
          <p class="message__infos-user__date">2 hours ago</p>
      </div>
      <p class="message__text">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
    </div>
    <form id="messageForm" @submit.prevent="handleSubmit">
        <input type="text" id="message" name="name" v-model="message" required placeholder="Écrivez votre message...">
        <button type="submit">Soumettre</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ChatRoom',
  data() {
    return {
      message: '', // Variable to store the message
      rooms: [
        { name: 'Room 1'},
        { name: 'Room 2' },
        { name: 'Room 3' }
      ]
    };
  },
  methods: {
    handleSubmit() {
    }
  }
}
</script>

<style scoped>

#app {
  width: 100%;
  height: 100%;
}

#content {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
}
#room_list {
  display: flex;
  height: 100%;
  width: 100%;
  border-right: solid  black 2px ;
}

.message__container {
    margin-top: 36px;
    background-color: #262D34;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    width: 1200px;
    border-radius: 6px;
    margin-left: auto;
    margin-right: auto;
}

@media (max-width: 1280px) {
    .message__container {
        width: 90%;
    }
}

.message__infos-user {
    display: flex;
    justify-content: space-between;
}

.message__infos-user__name {
    font-size: 18px;
    font-weight: 400;
}

.message__infos-user__date {
    font-size: 16px;
    font-weight: 300;
    color: #C5D0E6;
}

@media (max-width: 768px) {
    .message__infos-user__date {
        font-size: 14px;
    }
}

.message__text {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
    color: #F7F7F7;
}

@media (max-width: 768px) {
    .message__text {
        font-size: 16px;
    
    }
}

#messageForm {
  
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  margin-left: 5%;
  margin-right: 5%;
  width: 100%;
}

#message {
  width: 80%;
  height: 30px;
}
</style>
