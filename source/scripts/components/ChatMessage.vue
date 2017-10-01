<template>
  <div>
    <v-card class="cyan darken-2 white--text">
      <v-card-title primary-title>
        <div>{{ message.user }}</div>
        <div>{{ message.text }}</div>
      </v-card-title>
    </v-card>
    <div class="message-time">{{ message.time }}</div>
  </div>
</template>

<script>
export default {
  props: ['message']
}
</script>
