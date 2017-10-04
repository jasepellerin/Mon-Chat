<template>
  <v-layout column justify-end class="mb-5">
    <chat-message :key="message.text" v-for="message in messages" :message="message" />
  </v-layout>
</template>

<script>
export default {
  props: ['messages']
}
</script>
