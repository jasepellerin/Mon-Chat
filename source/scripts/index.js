import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import store from './store'
import logOut from './helperFunctions/logOut'

// Import components
const App = require('./components/App.vue')
const ChatApp = require('./components/ChatApp.vue')
const MessageContainer = require('./components/MessageContainer.vue')
const ChatMessage = require('./components/ChatMessage.vue')
const ChatSelector = require('./components/ChatSelector.vue')
const Login = require('./components/Login.vue')
const VInput = require('./components/VInput.vue')

// Register components
Vue.component('app', App)
Vue.component('messageContainer', MessageContainer)
Vue.component('chatMessage', ChatMessage)
Vue.component('chatSelector', ChatSelector)
Vue.component('vInput', VInput)
Vue.component('login', Login)

Vue.use(VueRouter)
Vue.use(Vuetify)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/chat/',
    name: 'chatSelect',
    component: ChatSelector,
    beforeEnter: (to, from, next) => {
      // Check username validity
      if (!store.state.username || store.state.username.length > 20) {
        // Reset username
        logOut(store)
        // Reroute to login
        router.replace({ name: 'login' })
      } else next()
    }
  },
  {
    path: '/chat/:chatID',
    name: 'chat',
    component: ChatApp,
    props: true
  }]
const router = new VueRouter({ routes })
let interval

const app = new Vue({
  router,
  store,
  el: '#app',
  created() {
    // Update store time every 5 seconds
    interval = setInterval(() => {
      store.commit('changeTime', Date.now())
    }, 5000)
  },
  beforeDestroy() {
    window.clearInterval(interval)
  }
})

export default app
