import Cookies from 'js-cookie'

const logOut = (store) => {
  store.commit('changeUsername', undefined)
  Cookies.remove('username')
}

export default logOut
