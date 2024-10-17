<template>
  <div id="indexroom">
    <h1>Vue.js Modal Form Example</h1>
    <button @click="showModal = true">Add a forum</button>

    <!-- Modal component -->
    <MyModal v-if="showModal" @close="showModal = false" @submit="handleFormSubmit" />
  </div>
</template>

<script>
import MyModal from '../components/MyModal.vue';

export default {
  name: 'IndexRoom',
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
