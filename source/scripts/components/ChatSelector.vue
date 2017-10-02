<template>
  <v-layout column justify-center align-center>
    <v-input @submit-message="onSubmit" label="Enter Chat ID" :done="done" :rules="[rules.required, rules.chatID]" icon="play_arrow" />
  </v-layout>
</template>


<script>
import testChatID from '../functions/testChatID'
export default {
  data: function() {
    return {
      done: false,
      rules: {
        required: (value) => {
          return (value !== undefined && value !== '') ||
            'Please enter a chat ID'
        },
        chatID: (value) => {
          return testChatID(value) ||
            'Chat ID should be between 5 and 16 numerical digits [0-9]'
        }
      }
    }
  },
  methods: {
    onSubmit: function(chatID) {
      // Check chatID length
      if (this.rules.chatID(chatID) === true) {
        // Reroute if appropriate
        this.$router.replace({ name: 'chat', params: { chatID: chatID } })
        this.done = true
      }
    }
  }
}
</script>
