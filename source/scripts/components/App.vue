<template>
  <v-app id="chat" :dark="dark" toolbar footer>
    <!-- Closeable drawer -->
    <v-navigation-drawer persistent v-model="drawer" disable-route-watcher fixed>
      <v-subheader class="mt-3 grey--text text--darken-1">Settings</v-subheader>
      <v-divider></v-divider>
      <v-list dense>
        <!-- Create list items-->
        <template v-for="item in listItems">
          <v-list-tile :key="item.title" @click.stop="item.click()" v-if="item.show()">
            <v-list-tile-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              {{item.title}}
            </v-list-tile-content>
          </v-list-tile>
          <!-- Add divider after dark mode button -->
          <v-divider :key="item.title" v-if="item.title === 'Dark Mode'"></v-divider>
        </template>
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
      <v-spacer></v-spacer>
      <img class="top-bar-icon" :src="icon" alt="cat" title="meow" />
    </v-toolbar>
    <!-- Main content section -->
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
    <!-- Bottom bar -->
    <v-footer fixed>
      <a href="https://github.com/jasepellerin/Mon-Chat" target="none">Jase Pellerin 2017</a>
    </v-footer>
  </v-app>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  data: function() {
    return {
      drawer: false,
      // Nav drawer items
      listItems: [
        {
          click: () => { this.share = !this.share },
          icon: 'link',
          show: () => this.chatID !== undefined,
          title: 'Share chat link'
        },
        {
          click: () => { this.$store.commit('toggleTheme') },
          icon: 'lightbulb_outline',
          show: () => true,
          title: 'Dark Mode'
        },
        {
          click: this.chatSelect,
          icon: 'compare_arrows',
          show: () => this.chatID,
          title: 'Change Chatroom'
        },
        {
          click: this.logOut,
          icon: 'power_settings_new',
          show: () => this.username,
          title: 'Logout'
        }
      ],
      share: false
    }
  },
  computed: {
    chatID: function() {
      return this.$route.params.chatID
    },
    icon: function() {
      return this.dark ? 'static/images/cat-dark.png' : 'static/images/cat.png'
    },
    // Set cookie when theme changes
    dark: function() {
      const darkTheme = this.$store.state.darkTheme
      Cookies.set('darkTheme', darkTheme, { expires: 7 })
      return this.$store.state.darkTheme
    },
    url: function() {
      return window.location.href
    },
    // Set cookie when username is updated
    username: function() {
      const newUsername = this.$store.state.username
      // Route to login if username blank or undefined
      this.checkUsername()
      // Check that username is not blank or too long, then set cookie
      if (newUsername && newUsername.length < 20) {
        Cookies.set('username', newUsername, { expires: 7 })
      }
      return newUsername
    }
  },
  methods: {
    logOut: function() {
      this.$store.commit('changeUsername', '')
    },
    chatSelect: function() {
      this.$router.replace({ name: 'chatSelect' })
    },
    checkUsername: function() {
      const username = this.$store.state.username
      if (!username) {
        this.$router.replace({ name: 'login' })
      }
    }
  },
  created() {
    this.checkUsername()
  },
  updated() {
    this.checkUsername()
  }
}
</script>
