<template>
  <v-app id="chat" :dark="dark" toolbar footer>
    <!-- Closeable nav drawer -->
    <v-navigation-drawer persistent v-model="drawer" disable-route-watcher fixed>
      <v-list dense>
        <!-- Theme toggle -->
        <v-list-tile @click.stop="dark = !dark">
          <v-list-tile-action>
            <v-icon>lightbulb_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{dark ? 'Light Mode' : 'Dark Mode'}}
          </v-list-tile-content>
        </v-list-tile>
        <!-- Share chat button -->
        <v-list-tile @click.stop="share = !share" v-if="chatID">
          <v-list-tile-action>
            <v-icon>link</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            Share chat link
          </v-list-tile-content>
        </v-list-tile>
        <!-- Change chat button -->
        <v-list-tile @click.stop="chatSelect()" v-if="chatID">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            Change Chatroom
          </v-list-tile-content>
        </v-list-tile>
        <!-- Logout button -->
        <v-list-tile @click.stop="logOut()" v-if="username">
          <v-list-tile-action>
            <v-icon>power_settings_new</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            Logout
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- Share dialog -->
    <v-dialog v-model="share" lazy absolute>
      <v-card>
        <v-card-title>
          <div class="headline">Share Chat Link</div>
        </v-card-title>
        <v-card-text>
          <p contenteditable="true">
            {{url}}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="blue--text darken-1" flat="flat" @click.native="share = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Top bar -->
    <v-toolbar fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Mon Chat{{chatID ? ' - ' + chatID : ''}}</v-toolbar-title>
    </v-toolbar>
    <!-- Main content section -->
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
    <!-- Bottom bar -->
    <v-footer fixed>
      <span>Jase Pellerin 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import logOut from '../functions/logOut'

export default {
  data: function() {
    return {
      dark: false,
      drawer: false,
      share: false
    }
  },
  computed: {
    chatID: function() {
      return this.$route.params.chatID
    },
    url: function() {
      return window.location.href
    },
    username: function() {
      this.checkUsername()
      return this.$store.state.username
    }
  },
  methods: {
    logOut: function() {
      logOut(this.$store)
    },
    chatSelect: function() {
      this.$router.replace({ name: 'chatSelect' })
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
