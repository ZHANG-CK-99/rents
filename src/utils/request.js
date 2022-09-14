import axios from 'axios'
import store from '@/store'
const request = axios.create({
  baseURL: 'http://liufusong.top:8080',
  timeout: 5000
})

// 设置请求头
request.interceptors.request.use(
  function (config) {
    const { token } = store.state.user
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default request
