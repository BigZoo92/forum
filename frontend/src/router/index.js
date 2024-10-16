import { createRouter, createWebHistory } from 'vue-router'
import ChatRoom from '../views/ChatRoom.vue'

const routes = [
  { path: '/chat-room/1', name: 'ChatRoom', component: ChatRoom }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router