<template>
  <v-layout column justify-center align-center>
    <v-input @submit-message="onSubmit" label="Enter Username" :done="done" :rules=[rules.length] icon="play_arrow" />
  </v-layout>
</template>


<script>
export default {
  data: function() {
    return {
      done: false,
      rules: {
        length: (name) => {
          if (name.length >= 20) {
            return 'Username should be 20 characters or less'
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
