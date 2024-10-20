<template>
  <div id="app">
    <h1>Forums</h1>

    <!-- Affichage de la liste des chambres -->
    <ul v-if="rooms_list.length">
      <li v-for="room in rooms_list" :key="room.id">{{ room.name }}</li>
    </ul>
    <button class="button" @click="showModal = true">Add a forum</button>
    <!-- Modal component -->
    <MyModal v-if="showModal" @close="showModal = false" @submit="handleFormSubmit" />
    <TitleRoom />
  </div>
</template>

<script>
import MyModal from '../components/MyModal.vue';
import { fetchRooms } from '../../services/topicService.js';

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
    handleFormSubmit(formData) {
      console.log("Form submitted:", formData);
      this.showModal = false; // Close the modal after submission
    },
  },
  async getRooms() {
      try {
        const response = await fetchRooms(); // Appel à la fonction fetchRooms qui récupère les données
        this.rooms_list = response; // Assigner les données récupérées à rooms_list
      } catch (error) {
        console.error("Erreur lors de la récupération des chambres :", error);
      }
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
}

</style>
