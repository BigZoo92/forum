<template>
  <div id="app">
      <!-- As a link -->
      <div>
  <!-- As a link -->
  <b-navbar variant="dark" type="dark">
    <b-navbar-brand href="#">BootstrapVue</b-navbar-brand>
  </b-navbar>
</div>
      <router-view></router-view>
  </div>
</template>

<script>
import { fetchUsersById } from '../services/userService';

export default {
  name: 'App',
  data() {
    return {
      messages: [],
      error: null
    };
  },
  async mounted() {
    try {
      const data = await fetchUsersById("2b2c28f8-5d2f-4d40-8eb1-ac9b02ef1454");
      this.messages = data;
      console.log(this.messages)
    } catch (err) {
      this.error = 'Erreur lors du chargement des messages';
      console.error(err);
    }
  }
}
</script>

<style>
  body {
    background-color: #1E252B;
  }
</style>
