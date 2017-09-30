import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
const App = require('./components/App.vue')
const ChatApp = require('./components/ChatApp.vue')
const ChatContainer = require('./components/ChatContainer.vue')
const ChatMessage = require('./components/ChatMessage.vue')
const VInput = require('./components/VInput.vue')

Vue.component('app', App)
Vue.component('chatContainer', ChatContainer)
Vue.component('chatMessage', ChatMessage)
Vue.component('vInput', VInput)

Vue.use(Vuetify)
Vue.use(VueRouter)

const routes = [{ path: '/', component: ChatApp }]
const router = new VueRouter({ routes, component: ChatApp })

const app = new Vue({
  router,
  el: '#app'
})

export default app
