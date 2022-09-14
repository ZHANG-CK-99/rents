import storage from '@/utils/storage.js'

const state = () => {
  return {
    token: storage.get('token')
  }
}

const mutations = {
  setToken(state, token) {
    storage.set('token', token)
    state.token = storage.get('token')
  },
  removeToken(state) {
    state.token = null
    storage.remove('token')
  }
}

export const user = {
  namespaced: true,
  mutations,
  state
}
