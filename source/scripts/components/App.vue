<template>
  <v-app id="chat" :dark="dark" toolbar footer>
    <v-toolbar fixed>
      <v-toolbar-title>Mon Chat</v-toolbar-title>
      <v-spacer />
      <v-switch label="Dark mode" v-model="dark" />
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view :username="username"></router-view>
      </v-container>
    </main>
    <v-footer fixed>
      <span>Jase Pellerin 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: ['username'],
  data: function() {
    return { dark: false }
  }
}
</script>
