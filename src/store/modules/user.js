// import { login } from '@/api/user'

export default {
  namespaced: true,
  state: {
    token: ''
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    }
  },
  actions: {
    getToken(context, payload) {
      // console.log(payload)
      context.commit('setToken', payload)
    }
  }
}
