<template>
  <div>
    <chatContainer :messages="messages" />
    <v-input @submit-message="onSubmit" />
  </div>
</template>

<script>
export default {
  data: function() { return { messages: [] } },
  methods: {
    onSubmit: function(msg) {
      this.messages.push(msg)
    }
  }
}
</script>
