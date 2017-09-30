import Vue from 'vue'

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
