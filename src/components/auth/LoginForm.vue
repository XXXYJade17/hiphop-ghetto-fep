<template>
  <div class="login-form">
    <h3 class="text-2xl font-bold text-white mb-6">欢迎回来</h3>
    <p class="text-gray-dark mb-6">登录你的账号，继续探索嘻哈世界</p>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="login-account">用户名/手机号/邮箱</label>
        <input
          class="input-field"
          id="login-account"
          :value="form.account"
          @input="$emit('update:form', { ...form, account: $event.target.value })"
          placeholder="输入用户名、手机号或邮箱"
          type="text"
          required
          @blur="$emit('validate', 'account')"
        />
        <div class="error-message" :class="errors.account ? 'show' : ''">{{ errors.account }}</div>
      </div>

      <div class="form-group">
        <label for="login-password">密码</label>
        <input
          class="input-field"
          id="login-password"
          :value="form.password"
          @input="$emit('update:form', { ...form, password: $event.target.value })"
          placeholder="输入密码"
          type="password"
          required
          @blur="$emit('validate', 'password')"
        />
        <div class="error-message" :class="errors.password ? 'show' : ''">
          {{ errors.password }}
        </div>
        <div class="forgot-password">
          <a href="#">忘记密码?</a>
        </div>
      </div>

      <button type="submit" class="main-btn mb-6 w-full" :disabled="loading">
        {{ loading ? '登录中...' : '登录账号' }}
      </button>

      <div class="form-footer">
        <span
          >还没有账号?
          <a href="javascript:;" @click="$emit('switch-to-register')">立即注册</a></span
        >
      </div>
    </form>
  </div>
</template>

<script setup>
// 接收父组件参数
defineProps({
  form: {
    type: Object,
    required: true,
  },
  errors: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

// 提交表单
const emit = defineEmits(['submit', 'validate', 'switch-to-register', 'update:form'])

const handleSubmit = () => {
  emit('submit')
}
</script>

<style scoped>
/* 登录表单专属样式 */
.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
}

.input-field {
  width: 100%;
  background: #1f1f1f;
  border: 1px solid #333;
  border-radius: 6px;
  padding: 12px 16px;
  color: #ffffff;
  font-size: 14px;
}

.input-field:focus {
  border-color: #ffd700;
  outline: none;
}

.input-field:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error-message {
  color: #dc143c;
  font-size: 12px;
  margin-top: 4px;
  display: none;
}

.error-message.show {
  display: block;
}

.forgot-password {
  text-align: right;
  margin-top: 4px;
  font-size: 14px;
}

.forgot-password a {
  color: #ffd700;
  text-decoration: none;
}

.forgot-password a:hover {
  text-decoration: underline;
}

.form-footer {
  margin-top: 24px;
  font-size: 14px;
  color: #808080;
  text-align: center;
}

.form-footer a {
  color: #ffd700;
  text-decoration: none;
}

.form-footer a:hover {
  text-decoration: underline;
}

.main-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
