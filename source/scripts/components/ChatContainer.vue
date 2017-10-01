<template>
  <v-layout column justify-end>
    <chat-message :key="message.text" v-for="message in messages" :message="message" />
  </v-layout>
</template>

<script>
export default {
  props: ['messages']
}
</script>
