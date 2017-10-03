<template>
  <v-app id="chat" :dark="dark" toolbar footer>
    <v-toolbar fixed>
      <v-toolbar-title>Mon Chat</v-toolbar-title>
      <v-vtn @click="logOut()" flat v-if="username">Logout</v-vtn>
      <v-switch label="Dark mode" v-model="dark" />
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
    <v-footer fixed>
      <span>Jase Pellerin 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import logOut from '../functions/logOut'

export default {
  data: function() {
    return { dark: false, drawer: false }
  },
  computed: {
    username: function() {
      this.checkUsername()
      return this.$store.state.username
    }
  },
  methods: {
    logOut: function() {
      logOut(this.$store)
    },
    checkUsername: function() {
      const username = this.$store.state.username
      if (username === undefined || username === '') {
        this.$router.replace({ name: 'login' })
      }
    }
  },
  created() {
    this.checkUsername()
  }
}
</script>
