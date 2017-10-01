<template>
  <div>
    <v-text-field @keyup.enter="onSubmit" :rules="rules" name="new-message" :append-icon-cb="onSubmit" v-model="message" :label="label" single-line :append-icon="icon" />
  </div>
</template>

<script>
export default {
  props: ['submit-message', 'label', 'rules', 'icon'],
  data: function() { return { message: '' } },
  methods: {
    onSubmit: function(e) {
      // Remove focus from element
      if (e) {
        e.target.blur()
      }
      // Call store mutator
      this.$store.commit('changeUsername', this.message)
      // Remove message
      this.message = ''
    }
  }
}
</script>
