<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { fetchUsers } from '../services/userService';
export default {
  name: 'App',
  data() {
    return {
      users: [],
      error: null
    };
  },
  async mounted() {
    try {
      this.users = await fetchUsers();
    } catch (err) {
      this.error = 'Erreur lors du chargement des utilisateurs';
      console.error(err);
    }
  }
}
</script>

<style>
/* Votre style ici */
</style>