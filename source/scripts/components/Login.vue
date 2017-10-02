<template>
  <v-layout column justify-center align-center>
    <v-input @submit-message="onSubmit" label="Enter Username" :done="done" :rules="[rules.length, rules.required]" icon="play_arrow" />
  </v-layout>
</template>


<script>
import Cookies from 'js-cookie'
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
          return (value !== undefined && value !== '') ||
            'Username is required'
        }
      }
    }
  },
  methods: {
    onSubmit: function(name) {
      // Update store username
      if (this.rules.length(name) === true) {
        this.$store.commit('changeUsername', name)
        this.$router.replace({ name: 'chatSelect' })
        this.done = true
        // Set username cookie
        Cookies.set('username', name)
      }
    }
  },
  created() {
    // Check if username is already available
    if (this.$store.state.username) {
      this.$router.replace({ name: 'chatSelect' })
    }
  }
}
</script>
