<template>
  <v-app id="chat" toolbar footer>
    <v-toolbar class="indigo" dark fixed>
      <v-toolbar-title>Mon Chat</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
    <v-footer class="indigo">
      <span class="white--text">© 2017</span>
    </v-footer>
  </v-app>
</template>
