import axios from 'axios'
import qs from 'qs'

const ENV = process.env.NODE_ENV
const IS_PRODUCTION = ENV === 'production'
const IS_DEVELOPMENT = ENV === 'development'

axios.defaults.baseURL = 'https://www.mengchongdingzhi.com'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

axios.interceptors.request.use(config => {
  // console.log('config======================', config)
  if (config.method === 'post' || config.method === 'POST') {
    config.data = qs.stringify(config.data)
  }
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  // console.log('response====================', response)
  // 开发环境
  if (IS_DEVELOPMENT) {
    console.log('data========================', response.data)
  }
  const data = response.data
  switch (data.status) {
    case 1:
    case '1':
      return data.data

    // 未登录
    case -1:
    case '-1':
      // 正式环境
      if (IS_PRODUCTION) {
        window.location.href = 'https://www.mengchongdingzhi.com/console/login.html'
      } else {
        return data.data
        console.log(`ENV=====================${ENV}`)
      }

    default:
  }

  const error = new Error(data.message)
  error.data = data
  error.response = response

  throw error

}, error => {
  // console.log('error=========================', error)
  console.log('error.response================', error.response)
  if (error && error.response) {
    switch (error.response.status) {
      case 404:
        error.message = `请求地址出错: ${error.response.config.url}`
        break

      case 500:
        error.message = '服务器内部错误'
    }
  }
  return Promise.reject(error)
})

axios.install = Vue => {
    Vue.prototype.$axios = axios
}

export default axios
