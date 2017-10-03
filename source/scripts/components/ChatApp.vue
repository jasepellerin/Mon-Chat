<template>
  <v-layout column justify-space-between>
    <chatContainer :messages="messages" />
    <v-input class="chatSend" @submit-message="onSubmit" :done="done" label="Send a message" icon="send" />
  </v-layout>
</template>

<script>
// Helper functions
import getMessages from '../functions/getMessages'
import postMessage from '../functions/postMessage'
import makeRoom from '../functions/makeRoom'

// Socket
const socket = require('socket.io-client')()

export default {

  props: ['chatID'],
  data: function() {
    return {
      done: true,
      messages: []
    }
  },
  watch: {
    chatID: function() {
      this.updateMessages()
    }
  },
  methods: {
    onSubmit: function(msg) {
      // Add message to array
      const message = {
        user: this.$store.state.username,
        time: Date.now(),
        text: msg
      }
      socket.emit('Message', message)
      postMessage(this.chatID, message)
    },
    updateMessages: function() {
      // Get messages
      getMessages(this.chatID)
        // Update local messages
        .then(messages => { this.messages = messages })
        .catch(err => {
          // If chat room does not exist, try creating it
          if (err.statusText === 'Chat room not found') {
            makeRoom(this.chatID)
            // Clear local messages
            this.messages = []
          }
        })
    }
  },
  created() {
    // Initialize messages when created
    this.updateMessages()
    // Start socket
    socket.on('Message', (msg) => {
      // Insert message locally
      this.messages.push(msg)
    })
  },
  updated() {
    window.scrollTo(0, document.body.scrollHeight)
  }
}
</script>
