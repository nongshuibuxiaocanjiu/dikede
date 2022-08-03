// import { getUserInfo } from '@/api/user'

export default {
  namespaced: true,
  state: {
    token: '',
    code: '',
    UserInfo:{}
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    setCode(state, payload) {
      state.code = payload
    },
    setgetUserInfo(state, payload) {
      state.UserInfo = payload
    }
  },
  actions: {
    getToken(context, payload) {
      // console.log(payload)
      context.commit('setToken', payload)
    },
    getCode(context, payload) {
      context.commit('setCode', payload)
    },
    getUserInfo(context, payload) {
      context.commit('setgetUserInfo', payload)
    }
  }
}
