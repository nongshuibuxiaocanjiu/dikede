import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import createVuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user
  },
  getters,
  // 插件配置
  plugins: [
    // 自动本地存储持久化
    createVuexPersisted({
      reducer(state) {
        return {
          token: state.user
        }
      }
    })
  ]
})

export default store
