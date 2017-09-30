<template>
  <v-app>
    <main>
      <v-container>
        <chatContainer :messages="messages" />
        <form v-on:submit.prevent="onSubmit()">
          <input type="text" v-model="message" placeholder="Send a message..." />
          <input type="Submit" value="-->" />
        </form>
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  props: ['messages'],
  data: function() { return { message: '' } },
  methods: {
    onSubmit: function() {
      this.$emit('submit-message', this.message)
      this.message = ''
    }
  }
}
</script>
