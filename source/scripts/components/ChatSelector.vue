<template>
  <v-layout column justify-center align-center>
    <v-input @submit-message="onSubmit" label="Enter Chat ID" :done="done" :rules="[rules.length, rules.required]" icon="play_arrow" />
  </v-layout>
</template>


<script>
export default {
  data: function() {
    return {
      done: false,
      rules: {
        length: (value) => {
          // Check that username is 5 - 20 characters
          return (value.length >= 5 && value.length <= 20) ||
            'Chat ID should be 5-20 characters long'
        },
        required: (value) => {
          if (!value) {
            return 'Please enter a chat ID'
          } else return true
        }
      }
    }
  },
  methods: {
    onSubmit: function(chatID) {
      // Check chatID length
      if (this.rules.length(chatID) === true) {
        // Reroute if appropriate
        this.$router.replace({ name: 'chat', params: { chatID: chatID } })
        this.done = true
      }
    }
  }
}
</script>
