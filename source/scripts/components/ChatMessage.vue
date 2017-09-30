<template>
  <v-card class="cyan darken-2 white--text">
    <v-card-title primary-title>
      <div>{{ message }}</div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: ['message']
}
</script>
