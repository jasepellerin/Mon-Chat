<template>
  <v-card class="darken-2 white--text mb-3" :class="self()">
    <v-card-title primary-title>
      <div>{{ message.user }}</div>
      <div>{{ message.text }}</div>
    </v-card-title>
    <div class="message-time">{{ friendlyTime }}</div>
  </v-card>
</template>

<script>
var ta = require('../../../node_modules/time-ago/timeago.js')()
export default {
  props: ['message'],
  computed: {
    friendlyTime: function() { return ta.ago(this.message.time) }
  },
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
