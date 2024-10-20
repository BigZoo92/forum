<template>
  <div id="app">
    <h1>Navbar</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import { inviteUserIfMentioned } from './services/sendMail';

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
      const data = await inviteUserIfMentioned('test', 'Salut @test', 'https://example.com/sujet/123');
      this.messages = data;
      console.log(this.messages)
    } catch (err) {
      this.error = 'Erreur lors du chargement des messages';
      console.error(err);
    }
  }
}
</script>
