<template>
  <div id="app">
    <h1>Les forums</h1>
    <button class="button" @click="showModal = true">Add a forum</button>

    <!-- Modal component -->
    <MyModal v-if="showModal" @close="showModal = false" @submit="handleFormSubmit" />
    <TitleRoom />
  </div>
</template>

<script>
import MyModal from '../components/MyModal.vue';
import TitleRoom from '../components/TitleRoom.vue';

export default {
  name: 'App',
  components: {
    TitleRoom,
    MyModal
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    handleFormSubmit(formData) {
      console.log("Form submitted:", formData);
      this.showModal = false; // Close the modal after submission
    }
  }
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

body {
  background-color: #1E252B;
}
</style>
