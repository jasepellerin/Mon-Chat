<template>
  <v-layout column justify-space-between>
    <chatContainer :messages="messages" />
    <v-input @submit-message="onSubmit" :done="done" label="Send a message" icon="send" />
  </v-layout>
</template>

<script>
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
      // Add message to local messages
      this.messages.push(message)
      // Patch message array
      fetch('/chat/' + this.chatID, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: this.messages })
      }).then(res => res.json()).then(res => {
        if (res && res.messages) {
          this.messages = res.messages
        }
      })
    }
  }
}
</script>
