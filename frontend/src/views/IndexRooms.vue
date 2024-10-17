<template>
  <div id="app">
    <h1>Les forums</h1>
    <button @click="showModal = true">Add a forum</button>

    <!-- Modal component -->
    <MyModal v-if="showModal" @close="showModal = false" @submit="handleFormSubmit" />
  </div>
</template>

<script>
import MyModal from '../components/MyModal.vue';

export default {
  name: 'App',
  components: {
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
