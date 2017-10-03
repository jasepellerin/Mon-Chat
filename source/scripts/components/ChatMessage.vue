<template>
  <v-flex class="message mb-1" :class="containerClass()">
    <v-card class="darken-2 white--text pa-2" :class="cardClass()">
      <p class="body-2 mb-0">{{ message.user }}</p>
      <v-divider></v-divider>
      <p class="body-1 pa-2 mb-0">{{ message.text }}</p>
    </v-card>
    <p class="caption">{{ friendlyTime }}</p>
  </v-flex>
</template>

<script>
var ta = require('../../../node_modules/time-ago/timeago.js')()
export default {
  props: ['message'],
  computed: {
    friendlyTime: function() {
      // Get the new friendly time whenever the store time updates
      let newTime = ta.ago(this.message.time)
      if (newTime.includes('ms')) {
        newTime = 'Just now'
      }
      // Tie to store time so this updates at interval
      // eslint-disable-next-line no-unused-vars
      const curTime = this.$store.state.time
      return newTime
    }
  },
  data: function() {
    return {
      isCurrent: this.message.user === this.$store.state.username,
      containerClass: function() {
        // If current user posted a message, align end
        if (this.isCurrent) {
          return 'self-message'
        } else return 'other-message'
      },
      cardClass: function() {
        // Get appropriate card class
        if (this.isCurrent) {
          return 'blue'
        } else return 'cyan'
      }
    }
  }
}
</script>
