// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
// import store from '@/store'
import axios from 'axios'
import store from '@/store'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
}) // 创建一个axios的实例

service.interceptors.request.use(
  // 想在发送请求前做什么
  // config本次请求的配置
  // 必须要返回出去。

  (config) => {
    const token = store.state.user.token
    if (token) {
      config.headers.Authorization = token
    }
    // console.log(config)
    return config
  },
  // 请求错误的时候,处理的方法
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use() // 响应拦截器

export default service // 导出axios实例
