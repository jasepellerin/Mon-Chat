<template>
  <v-app id="chat" toolbar footer dark>
    <v-toolbar dark fixed>
      <v-toolbar-title>Mon Chat</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
    <v-footer dark fixed>
      <span class="white--text">Jase Pellerin 2017</span>
    </v-footer>
  </v-app>
</template>
