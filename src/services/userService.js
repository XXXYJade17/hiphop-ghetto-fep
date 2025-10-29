import api from './api'

/**
 * 用户相关API服务
 */

// 用户注册
export const register = (userData) => {
  return api.post('/user/register', userData)
}

// 用户登录
export const login = (loginData) => {
  return api.post('/user/login', loginData)
}

// 获取用户信息（可选功能）
export const getUserInfo = () => {
  return api.get('/user/info')
}

export default {
  register,
  login,
  getUserInfo,
}
