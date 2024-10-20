<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h2>Create your own forum</h2>

      <!-- Simple form inside the modal -->
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="name">Name of your forum:</label>
          <input type="text" v-model="formData.name" required />
        </div>

        <div>
          <label for="message">Type your message here:</label>
          <textarea v-model="formData.message" required></textarea>        </div>

        <button class="button" type="submit">Submit</button>
        <button type="button" @click="$emit('close')">Close</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      // Emit the form data back to the parent component
      this.$emit('submit', this.formData);
    }
  }
};
</script>

<!-- Optional: Styling for the modal -->
<style scoped>

h2 {
  color: #ff6027;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure it stays on top of other content */
}

/* Modal content styling */
.modal-content {
  background-color: #2C353D;
  padding: 30px;
  border-radius: 8px;
  width: 400px;
  max-width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Soft shadow */
  position: relative;
}

/* Form styling */
form div {
  margin-bottom: 20px; /* Space between input fields */
}

/* Label styling */
label {
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
  color: white;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

textarea {
  min-height: 100px;
  resize: vertical; /* Permet de redimensionner la hauteur du textarea */
}

input[type="text"]:focus,
textarea:focus {
  border-color: #FF6934; /* Blue border on focus */
  outline: none;
}

button[type="submit"] {
  background-color: #FF6934; /* Blue background */
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;
}

button[type="submit"]:hover {
  background-color: #e05422;
}

/* Close button styling */
button[type="button"] {
  background-color: #ccc;
  color: #333;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
}

/* Close button hover effect */
button[type="button"]:hover {
  background-color: #bbb;
}

/* Media queries for responsiveness */
@media (max-width: 500px) {
  .modal-content {
    width: 90%; /* Make modal more responsive on small screens */
  }
}
</style>
