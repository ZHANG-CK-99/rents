import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem, removeItem } from '@/utils/storage.js'
const TOKEN = 'TOUTIAO_USER'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getItem(TOKEN)
  },
  getters: {},
  mutations: {
    setUser(state, data) {
      state.user = data
      setItem(TOKEN, data)
    },
    removeUser(state) {
      state.user = null
      removeItem(TOKEN)
    }
  },
  actions: {},
  modules: {}
})
