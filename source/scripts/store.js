import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    username: ''
  },
  mutations: {
    changeUsername(state, newUsername) {
      state.username = newUsername
    }
  }
})

export default store
