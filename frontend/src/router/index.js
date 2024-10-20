import { createRouter, createWebHistory } from 'vue-router'
import ChatRoom from '../views/ChatRoom.vue'
import IndexRooms from '../views/IndexRooms.vue'

const routes = [
  { path: '/', name: 'IndexRooms', component: IndexRooms },
  { path: '/chat-room/:id', name: 'ChatRoom', component: ChatRoom }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
