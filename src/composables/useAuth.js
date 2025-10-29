// 认证相关工具函数和逻辑
import userService from '../services/userService'

export const useAuth = () => {
  // 验证工具
  const Validator = {
    // 验证用户名
    username: function (value) {
      const regex = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/
      return value.length >= 6 && value.length <= 16 && regex.test(value)
    },
    // 验证手机号（允许为空）
    phone: function (value) {
      if (!value) return true
      const regex = /^1[3-9]\d{9}$/
      return regex.test(value)
    },
    // 验证邮箱（允许为空）
    email: function (value) {
      if (!value) return true
      const regex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      return regex.test(value)
    },
    // 验证注册密码
    passwordRegister: function (value) {
      const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+=-]).+$/
      return value.length >= 8 && value.length <= 20 && regex.test(value)
    },
    // 验证登录密码
    passwordLogin: function (value) {
      const regex = /^(?=.*[A-Za-z])(?=.*\d).+$/
      return value.length >= 8 && value.length <= 32 && regex.test(value)
    },
    // 验证登录账号（非空）
    account: function (value) {
      return value.trim().length > 0
    },
  }

  // 显示提示信息
  const showToast = (message, isSuccess = true, callback) => {
    callback(message, isSuccess ? 'success' : 'error')
    // 3秒后自动关闭（由父组件控制显示状态）
  }

  // 用户注册
  const registerUser = async (userData) => {
    try {
      const response = await userService.register(userData)

      if (response.code === 200) {
        // 注册成功，保存token
        localStorage.setItem('authentication', response.data.token)
        return { success: true, message: '注册成功', data: response.data }
      } else {
        // 处理错误响应
        return { success: false, message: response.message || '注册失败' }
      }
    } catch (error) {
      // 处理网络错误或其他异常
      let message = '注册失败，请稍后重试'
      if (error.response && error.response.data) {
        message = error.response.data.message || message
      }
      return { success: false, message }
    }
  }

  // 用户登录
  const loginUser = async (loginData) => {
    try {
      const response = await userService.login(loginData)

      if (response.code === 200) {
        // 登录成功，保存token
        localStorage.setItem('authentication', response.data.token)
        return { success: true, message: '登录成功', data: response.data }
      } else {
        // 处理错误响应
        return { success: false, message: response.message || '登录失败' }
      }
    } catch (error) {
      // 处理网络错误或其他异常
      let message = '登录失败，请稍后重试'
      if (error.response && error.response.data) {
        message = error.response.data.message || message
      }
      return { success: false, message }
    }
  }

  return {
    Validator,
    showToast,
    registerUser,
    loginUser,
  }
}
