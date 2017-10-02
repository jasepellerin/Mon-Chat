<template>
  <v-card class="darken-2 white--text mb-3 pa-1" :class="self()">
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
    friendlyTime: function() {
      // Get the new friendly time whenever the store time updates
      const newTime = ta.ago(this.message.time)
      // eslint-disable-next-line no-unused-vars
      const curTime = this.$store.state.time
      return newTime
    }
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
