

export default {
  namespaced: true,
  state: {
    token: '',
    code: '',
    UserInfo: {},
    ggyyList: {}
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
    },

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
      //获取用户信息
      context.commit('setgetUserInfo', payload)
    },
    logout(context) {
      // 退出清空
      context.commit('setgetUserInfo', {})
      context.commit('setToken', '')
    },

  }
}
