import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

let initialState = {
  darkTheme: false,
  time: 0,
  username: ''
}

// Check for cookies
const userCookie = Cookies.get('username')
const darkCookie = Cookies.get('darkTheme')
// If cookies exist, set initial state values
if (userCookie && userCookie.length <= 20) {
  initialState.username = userCookie
}
// Only check for true, as default is false
if (darkCookie === 'true') {
  initialState.darkTheme = true
}

const store = new Vuex.Store({
  state: Object.assign({}, initialState),
  mutations: {
    changeUsername(state, newUsername) {
      state.username = newUsername
    },
    changeTime(state, newTime) {
      state.time = newTime
    },
    toggleTheme(state) {
      state.darkTheme = !state.darkTheme
    }
  }
})

export default store
