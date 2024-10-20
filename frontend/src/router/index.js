import { createRouter, createWebHistory } from 'vue-router'
import ChatRoom from '../views/ChatRoom.vue'
import IndexForums from '../views/indexForums.vue'

const routes = [
  { path: '/', name: 'IndexForums', component: IndexForums },
  { path: '/chat-room/:id', name: 'ChatRoom', component: ChatRoom }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
