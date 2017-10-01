import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import store from './store'

// Import components
const App = require('./components/App.vue')
const ChatApp = require('./components/ChatApp.vue')
const ChatContainer = require('./components/ChatContainer.vue')
const ChatMessage = require('./components/ChatMessage.vue')
const Login = require('./components/Login.vue')
const VInput = require('./components/VInput.vue')

// Register components
Vue.component('app', App)
Vue.component('chatContainer', ChatContainer)
Vue.component('chatMessage', ChatMessage)
Vue.component('vInput', VInput)
Vue.component('login', Login)

Vue.use(VueRouter)
Vue.use(Vuetify)

const routes = [{ path: '/', component: Login },
{ path: '/chat/:chatID', name: 'chat', component: ChatApp, props: true }]
const router = new VueRouter({ routes })

const app = new Vue({
  router,
  store,
  el: '#app'
})

export default app
