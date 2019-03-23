import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    user: {},
    permission: {},
    activities: {
      ongoing: [],
      preparing: []
    }
  },
  mutations: {
    login (state) {
      state.isLogin = true
      console.log('store login')
    }
  },
  actions: {

  }
})
