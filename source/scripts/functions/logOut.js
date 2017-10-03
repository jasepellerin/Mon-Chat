import Cookies from 'js-cookie'

const logOut = (store) => {
  store.commit('changeUsername', '')
  Cookies.set('username', '')
}

export default logOut
