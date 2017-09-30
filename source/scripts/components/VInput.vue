<template>
  <form v-on:submit.prevent="onSubmit()">
    <input type="text" v-model="message" placeholder="Send a message..." />
    <input type="Submit" value="-->" />
  </form>
</template>

<script>
export default {
  props: ['submit-message'],
  data: function() { return { message: '' } },
  methods: {
    onSubmit: function() {
      this.$emit('submit-message', this.message)
      this.message = ''
    }
  }
}
</script>
