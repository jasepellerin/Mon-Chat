<template>
  <v-card class="darken-2 white--text mb-3" :class="self()">
    <v-card-title primary-title>
      <div>{{ message.user }}</div>
      <div>{{ message.text }}</div>
    </v-card-title>
    <div class="message-time">{{ message.time }}</div>
  </v-card>
</template>

<script>
export default {
  props: ['message'],
  data: function() {
    return {
      self: function() {
        // If current user posted a message, align end
        if (this.message.user === this.$store.state.username) {
          return 'self-message purple'
        } else return 'other-message cyan'
      }
    }
  }
}
</script>
