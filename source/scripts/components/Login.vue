<template>
  <v-layout column justify-center align-center>
    <v-input @submit-message="onSubmit" label="Enter Username" :done="done" :rules="[rules.length, rules.required]" icon="play_arrow" />
  </v-layout>
</template>


<script>
export default {
  data: function() {
    return {
      done: false,
      rules: {
        length: (value) => {
          // Check that username is 20 characters or less
          return value.length <= 20 ||
            'Username should be 20 characters or less'
        },
        required: (value) => {
          if (!value) {
            return 'Username is required'
          } else return true
        }
      }
    }
  },
  methods: {
    onSubmit: function(name) {
      // Update store username
      if (this.rules.length(name) === true) {
        this.$store.commit('changeUsername', name)
        this.$router.replace({ name: 'chat', params: { chatID: 10 } })
        this.done = true
      }
    }
  }
}
</script>
