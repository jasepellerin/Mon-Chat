<template>
  <v-layout column justify-space-between>
    <chatContainer :messages="messages" />
    <v-input @submit-message="onSubmit" />
  </v-layout>
</template>

<script>
export default {
  data: function() { return { messages: [] } },
  methods: {
    onSubmit: function(msg) {
      this.messages.push(msg)
    }
  }
}
</script>
