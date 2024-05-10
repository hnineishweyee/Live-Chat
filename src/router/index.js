import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '@/views/WelcomePage.vue'
import ChatroomPage from '@/views/ChatroomPage.vue'
import { auth } from '@/firebase/config'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomePage,
    beforeEnter(to,from,next){
      let user = auth.currentUser
      if(!user){
        next()
      }
      else{
        next({name:'Chatroom'})
      }
    }
  },

  {
    path: '/chatroom',
    name: 'Chatroom',
    component: ChatroomPage,
    beforeEnter(to,from,next){
      let user = auth.currentUser
      if(user){
        next()
      }
      else{
        next({name:'Welcome'})
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
