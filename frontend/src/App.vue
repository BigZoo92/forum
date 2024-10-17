<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { fetchMessagesByForum } from '../services/messageService';

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
      const data = await fetchMessagesByForum(1);
      this.messages = data;
      console.log(data)
    } catch (err) {
      this.error = 'Erreur lors du chargement des messages';
      console.error(err);
    }
  }
}
</script>

<style>
/* Votre style ici */
</style>