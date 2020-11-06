import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/user'
import messages from './modules/messages'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: [
    User,messages
  ]
})
