<template>
  <v-card class="cyan darken-2 white--text mt-1" :class="self ? 'align-self-end' : 'align-self-start'">
    <v-card-title primary-title>
      <div>{{ message.user }}</div>
      <div>{{ message.text }}</div>
    </v-card-title>
    <div class="message-time">{{ message.time }}</div>
  </v-card>
</template>

<script>
export default {
  data: function() {
    return {
      self: function() {
        if (this.message.user === this.$store.state.username) {
          return true
        } else return false
      }
    }
  },
  props: ['message']
}
</script>
