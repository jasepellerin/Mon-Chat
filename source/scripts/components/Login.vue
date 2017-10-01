<template>
  <v-layout column justify-center align-center>
    <v-input @submit-message="onSubmit" label="Enter Username" :rules=[rules.length] icon="play_arrow" />
  </v-layout>
</template>


<script>
export default {
  data: function() {
    return {
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
    onSubmit: function(msg) {
      // Update store username
      this.$store.commit('changeUsername', msg)
      this.$router.replace({ name: 'chat', params: { chatID: 10 } })
    }
  }
}
</script>
