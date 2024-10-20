<template>
  <div id="app">
    <div class="navbar">
      <h1>Forums</h1>
      <button class="button" @click="showModal = true">+</button>
    </div>
    <!-- Affichage de la liste des chambres -->
    <div class="card__wrapper">
      <ul v-if="rooms_list.length">
        <div class="card__data-flex">
          <li class="card__name" v-for="room in rooms_list" :key="room.id">{{ room.name }}</li>
        <p class="card__date">2 hours ago</p>
      </div>
      <button class="button" @click="goToRoom(room.id)">Voir</button>
    </ul>
  </div>
  <!-- Modal component -->
  <MyModal v-if="showModal" @close="showModal = false" @submit="handleFormSubmit" />
</div>
</template>

<script>
import MyModal from '../components/MyModal.vue';
import { fetchRooms } from '../services/topicService';
import { createRoom } from '../services/createRoom';
import { fetchRoomsById } from '../services/topicService';

export default {
  name: 'App',
  components: {
    MyModal
  },
  data() {
    return {
      rooms_list: [],
      showModal: false
    };
  },
  created() {
    this.getRooms();
  },
  methods: {
    async getRooms() {
      try {
        const response = await fetchRooms();
        this.rooms_list = response;
      } catch (error) {
        console.error("Erreur lors de la récupération des forums :", error);
      }
    },
    // async getRoomById(id) {
    //   try {
    //     const response = await fetchRoomsById(id);
    //     this.room = response;

    //     // Redirection vers la page de la room
    //     this.$router.push({ name: 'ChatRoom', params: { id } });
    //   } catch (error) {
    //     console.error('Erreur lors de la récupération des forums :', error);
    //   }
    // },
    // goToRoom(id) {
    //   this.getRoomById(id);
    // }
  // },
    async handleFormSubmit(formData) {
      try {
        await createRoom(formData);
        console.log("Room created:", formData);

        await this.getRooms();

        // Fermer le modal après la soumission
        this.showModal = false;
      } catch (error) {
        console.error("Erreur lors de la création du forum :", error);
      }
    },
  },
};

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Source Sans Pro', sans-serif;
  color: #F7F7F7;
  background-color: #1E252B;
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
