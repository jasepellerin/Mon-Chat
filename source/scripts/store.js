import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    username: '',
    time: 1
  },
  mutations: {
    changeUsername(state, newUsername) {
      state.username = newUsername
    },
    changeTime(state, newTime) {
      state.time = newTime
    }
  }
})

export default store
