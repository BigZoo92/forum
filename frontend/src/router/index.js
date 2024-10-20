import { createRouter, createWebHistory } from 'vue-router'
import ChatRoom from '../views/ChatRoom.vue'
import IndexRooms from '../views/IndexRooms.vue'

const routes = [
  { path: '/', name: 'IndexRooms', component: IndexRooms },
<<<<<<< HEAD
  { path: '/chat-room/1', name: 'ChatRoom', component: ChatRoom }
  // { path: '/chat-room/:id', name: 'ChatRoom', component: Chatroom },
=======
  { path: '/chat-room/:id', name: 'ChatRoom', component: ChatRoom }
>>>>>>> d1524be10c0ddbf65a16c39f93a9c4c4b3e82ab9
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
