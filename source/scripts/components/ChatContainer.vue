<template>
  <div class="chat-container">
    <chat-message :key="message" v-for="message in messages" :message="message" />
  </div>
</template>

<script>
export default {
  props: ['messages']
}
</script>
