<template>
  <v-layout column justify-space-between>
    <h1>Chat #{{chatID}}</h1>
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
      this.messages.push({ user: this.$store.state.username, time: new Date().toLocaleTimeString(), text: msg })
    }
  }
}
</script>
