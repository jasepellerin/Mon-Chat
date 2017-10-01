<template>
  <v-layout column justify-space-between>
    <chatContainer :messages="messages" />
    <v-input @submit-message="onSubmit" :done="done" label="Send a message" icon="send" />
  </v-layout>
</template>

<script>
import postMessage from '../functions/postMessage'
import getMessages from '../functions/getMessages'
export default {
  props: ['chatID'],
  data: function() {
    return {
      done: true,
      messages: []
    }
  },
  methods: {
    onSubmit: function(msg) {
      // Add message to array
      const message = {
        user: this.$store.state.username,
        time: new Date().toLocaleTimeString(),
        text: msg
      }
      // Post message
      postMessage(this.chatID, message)
      // Get messages
      this.updateMessages()
    },
    updateMessages: function() {
      // Get messages
      getMessages(this.chatID)
        // Update local messages
        .then(messages => { this.messages = messages })
    }
  },
  created() {
    // Initialize messages when created
    this.updateMessages()
  }
}
</script>
