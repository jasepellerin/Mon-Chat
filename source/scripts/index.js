import Vue from 'vue'
import Vuetify from 'vuetify'
const ChatApp = require('./components/ChatApp.vue')
const ChatContainer = require('./components/ChatContainer.vue')
const ChatMessage = require('./components/ChatMessage.vue')

Vue.component('chatApp', ChatApp)
Vue.component('chatContainer', ChatContainer)
Vue.component('chatMessage', ChatMessage)

Vue.use(Vuetify)
const app = new Vue({
  el: '#app',
  data: {
    username: '',
    messages: ['hi']
  },
  methods: {
    submitMessage: function (msg) {
      this.messages.push(msg)
    }
  }
})

export default app
