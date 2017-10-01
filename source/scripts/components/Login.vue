<template>
  <v-layout column justify-center align-center>
    <v-input @submit-message="onSubmit" label="Enter Username" :rules="[(name) => {if(name.length >= 20) {return 'Username should be 20 characters or less'} return true}]" icon="play_arrow" />
  </v-layout>
</template>

<script>
export default {
  props: ['username'],
  methods: {
    onSubmit: function(msg) {
      alert(msg)
    }
  }
}
</script>
