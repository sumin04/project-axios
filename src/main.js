import axios from 'axios'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import getData from "./components/getData.vue"
import UserDatail from "./components/UserDatail.vue"
import homeData from './components/UserList.vue'
import UserProfile from './components/UserDatail.vue'
import UserList from './components/UserList.vue'

const routes = [
  { name: 'getData', path:'/getData',component: getData},
  { name: 'UserDatail', path:'/datail',component: UserDatail},
  { name: 'home', path:'/',component: homeData},
  { name: 'profile', path:'/user/:userId?',component: UserProfile},
  { name: 'list', path:'/user',component: UserList},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)

app.mount('#app')

app.config.globalProperties.$axios = axios
