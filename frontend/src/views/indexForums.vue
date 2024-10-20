<template>
    <div id="app">
      <div class="navbar">
        <h1>Forums</h1>
        <button class="button" @click="showModal = true">+</button>
      </div>
      <div class="card__wrapper">
        <ul style="gap: 50px; display: flex; flex-direction: column; width: 100%;">
          <div class="card__data-flex" v-for="room in rooms_list" :key="room.id">
            <li class="card__name">{{ room.title }}</li>
            <div style="gap: 25px; display: flex; justify-content: center;">
              <p class="card__date">2 hours ago</p>
              <button class="button" @click="goToRoom(room.id)">Voir</button>
            </div>
          </div>
        </ul>
      </div>
      <MyModal v-if="showModal" @close="showModal = false" @submit="handleFormSubmit" />
    </div>
  </template>
  
  
  <script>
  import MyModal from '../components/MyModal.vue';
  import { fetchRooms } from '../services/topicService';
  import { createRoom } from '../services/createRoom';
  
  export default {
    name: 'IndexForums',
    components: {
      MyModal
    },
    data() {
      return {
        rooms_list: [],
        showModal: false
      };
    },
    mounted() {
      this.getRooms();
    },
    methods: {
      goToRoom(roomId) {
        this.$router.push(`/chat-room/${roomId}`);
      },
      async getRooms() {
        try {
          const response = await fetchRooms();
          this.rooms_list = response;
        } catch (error) {
          console.error("Erreur lors de la récupération des forums :", error);
        }
      },
      async handleFormSubmit(formData) {
        try {
          await createRoom(formData);
  
          await this.getRooms();
  
          this.showModal = false;
        } catch (error) {
          console.error("Erreur lors de la création du forum :", error);
        }
      },
    },
  };
  
  </script>
  
  <style scoped>
  html {
      background-color: #1E252B;
    }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
    color: #F7F7F7;
    background-color: #1E252B;
  }
  
  #app{
    min-height: 100dvh;
  }
  
  .card__wrapper {
      margin-left: auto;
      margin-right: auto;
      width: 1200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #262D34;
      padding: 24px;
      gap: 24px;
      margin-top: 24px;
      border-radius: 12px;
  }
  
  .card__data-flex {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  
  .card__name {
    font-size: 18px;
  }
  
  .card__date {
    font-size: 16px;
    font-weight: 300;
    color: #C5D0E6;
  }
  
  @media (max-width: 1280px) {
    .card__wrapper {
        width: 90%;
  
    }
    .card__date {
        font-size: 14px;
    }
  }
  
  .card__button {
      padding: 12px 24px;
      font-size: 12px;
      font-weight: 500;
      background: #FF6934;
  }
  
  .button {
    height: fit-content;
    padding: 4px 12px;
    border:0;
    background-color: #FF6934;
    color: #fff;
    border-radius: 6px;
    width: fit-content;
    font-size: 16px;
    cursor: pointer;
    font-weight: bolder;
    &:hover {
        background-color: rgb(255, 111, 71);
    }
    &:active {
        background-color: #FF5B2C;
    }
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2c3e50;
    padding: 15px 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    color: #fff;
    border-radius: 4px;
  }
  
  /* Style pour le titre */
  .navbar h1 {
    background-color: #FF6934;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
  }
  
  @media (max-width: 768px) {
    .navbar {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .navbar h1 {
      margin-bottom: 15px;
    }
  }
  
  </style>
  