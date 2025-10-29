import axios from 'axios'

// 创建axios实例
const api = axios.create({
  baseURL: '/api', // 基础URL，可以根据环境进行配置
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    // 如果有token，则添加到请求头
    const token = localStorage.getItem('authentication')
    if (token) {
      config.headers.authentication = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    // 直接返回数据部分
    return response.data
  },
  (error) => {
    if (error.response) {
      // 根据状态码处理错误
      switch (error.response.status) {
        case 401:
          // 未授权，清除token并跳转到登录页
          localStorage.removeItem('authentication')
          window.location.href = '/auth'
          break
        case 403:
          console.error('拒绝访问')
          break
        case 404:
          console.error('请求地址出错')
          break
        case 500:
          console.error('服务器内部错误')
          break
        default:
          console.error(`连接错误:${error.response.status}`)
      }
    } else {
      console.error('网络错误')
    }
    return Promise.reject(error)
  },
)

export default api
