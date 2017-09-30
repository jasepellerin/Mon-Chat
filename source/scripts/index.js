import Vue from 'vue'
import Vuetify from 'vuetify'
const ChatApp = require('./components/ChatApp.vue')

Vue.component('chatApp', ChatApp)

Vue.use(Vuetify)
const app = new Vue({ // eslint-disable-line no-unused-vars
  el: '#app',
  data: {
    username: '',
    message: '',
    messages: []
  },
  methods: {
    onSubmit: function (msg) {
      this.messages.push(msg)
      this.message = ''
    }
  }
})
