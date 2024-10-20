import { createRouter, createWebHistory } from 'vue-router'
import ChatRoom from '../views/ChatRoom.vue'
import App from '../App.vue'

const routes = [
  { path: '/', name: 'App', component: App },
  { path: '/chat-room/:id', name: 'ChatRoom', component: ChatRoom }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
