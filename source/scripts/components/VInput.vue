<template>
  <div>
    <v-text-field @keyup.enter="onSubmit" :rules="rules" :append-icon-cb="onSubmit" v-model="message" :label="label" :append-icon="icon" />
  </div>
</template>

<script>
export default {
  props: ['submit-message', 'label', 'rules', 'icon', 'done'],
  data: function() { return { message: '' } },
  methods: {
    onSubmit: function(e) {
      // Remove focus from element
      if (e) {
        e.target.blur()
      }
      // Pass message to parent component
      this.$emit('submit-message', this.message)
      if (this.done) {
        // Remove message if it was handled successfully
        this.message = ''
      }
    }
  }
}
</script>
