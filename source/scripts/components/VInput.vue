<template>
  <div>
    <v-text-field @keyup.enter="onSubmit" name="new-message" :append-icon-cb="onSubmit" v-model="message" label="Send a message" single-line append-icon="send" />
  </div>
</template>

<script>
export default {
  props: ['submit-message'],
  data: function() { return { message: '' } },
  methods: {
    onSubmit: function(e) {
      // Remove focus from element
      e.target.blur()
      // Pass message to parent component
      this.$emit('submit-message', this.message)
      // Remove message
      this.message = ''
    }
  }
}
</script>
