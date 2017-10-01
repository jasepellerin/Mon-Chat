<template>
  <v-layout column justify-space-between>
    <h1>Chat #{{chatID}}</h1>
    <chatContainer :messages="messages" />
    <v-input @submit-message="onSubmit" label="Send a message" icon="send" />
  </v-layout>
</template>

<script>
export default {
  props: ['chatID'],
  data: function() { return { messages: [] } },
  methods: {
    onSubmit: function(msg) {
      this.messages.push(msg)
    }
  }
}
</script>
