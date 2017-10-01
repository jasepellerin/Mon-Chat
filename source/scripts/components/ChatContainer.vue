<template>
  <v-layout column align-baseline justify-end>
    <chat-message class="mt-1" :key="message.text" v-for="message in messages" :message="message" />
  </v-layout>
</template>

<script>
export default {
  props: ['messages']
}
</script>
