<template>
  <v-layout column justify-center align-center>
    <v-input label="Enter Username" :rules="[(name) => {if(name.length >= 20) {return 'Username should be 20 characters or less'} return true}]" icon="play_arrow" />
  </v-layout>
</template>
