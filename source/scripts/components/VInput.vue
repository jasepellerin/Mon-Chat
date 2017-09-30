<template>
  <div>
    <v-text-field @keyup.enter="onSubmit" name="new-message" :append-icon-cb="onSubmit" v-model="message" label="Send a message" single-line append-icon="phone" />
  </div>
</template>

<script>
export default {
  props: ['submit-message'],
  data: function() { return { message: '' } },
  methods: {
    onSubmit: function(e) {
      e.target.blur()
      this.$emit('submit-message', this.message)
      this.message = ''
    }
  }
}
</script>
