<template>
  <div class="register-form">
    <h3 class="text-2xl font-bold text-white mb-6">创建账号</h3>
    <p class="text-gray-dark mb-6">加入我们的社区，发现更多嘻哈音乐和文化</p>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="register-username">用户名</label>
        <input
          class="input-field"
          id="register-username"
          :value="form.username"
          @input="$emit('update:form', { ...form, username: $event.target.value })"
          placeholder="设置你的用户名"
          type="text"
          required
          @blur="$emit('validate', 'username')"
        />
        <div class="error-message" :class="errors.username ? 'show' : ''">
          {{ errors.username }}
        </div>
      </div>

      <div class="form-group">
        <label for="register-phone">手机号（选填）</label>
        <input
          class="input-field"
          id="register-phone"
          :value="form.phone"
          @input="$emit('update:form', { ...form, phone: $event.target.value })"
          placeholder="输入手机号（可选）"
          type="tel"
          @blur="$emit('validate', 'phone')"
        />
        <div class="error-message" :class="errors.phone ? 'show' : ''">{{ errors.phone }}</div>
      </div>

      <div class="form-group">
        <label for="register-email">邮箱（选填）</label>
        <input
          class="input-field"
          id="register-email"
          :value="form.email"
          @input="$emit('update:form', { ...form, email: $event.target.value })"
          placeholder="输入邮箱（可选）"
          type="email"
          @blur="$emit('validate', 'email')"
        />
        <div class="error-message" :class="errors.email ? 'show' : ''">{{ errors.email }}</div>
      </div>

      <div class="form-group">
        <label for="register-password">密码</label>
        <input
          class="input-field"
          id="register-password"
          :value="form.password"
          @input="$emit('update:form', { ...form, password: $event.target.value })"
          placeholder="设置密码（至少8位，需包含字母、数字和特殊字符）"
          type="password"
          required
          @blur="$emit('validate', 'password')"
        />
        <div class="error-message" :class="errors.password ? 'show' : ''">
          {{ errors.password }}
        </div>
      </div>

      <div class="form-group">
        <label for="register-confirm">确认密码</label>
        <input
          class="input-field"
          id="register-confirm"
          :value="form.confirmPassword"
          @input="$emit('update:form', { ...form, confirmPassword: $event.target.value })"
          placeholder="再次输入密码"
          type="password"
          required
          @blur="$emit('validate', 'confirmPassword')"
        />
        <div class="error-message" :class="errors.confirmPassword ? 'show' : ''">
          {{ errors.confirmPassword }}
        </div>
      </div>

      <div class="terms-group">
        <input
          type="checkbox"
          id="agree-terms"
          :checked="form.agreeTerms"
          @change="$emit('update:form', { ...form, agreeTerms: $event.target.checked })"
          required
        />
        <label for="agree-terms">
          我已阅读并同意<a href="#">用户协议</a>和<a href="#">隐私政策</a>
        </label>
      </div>

      <button type="submit" class="main-btn mb-6 w-full" :disabled="loading">
        {{ loading ? '注册中...' : '创建账号' }}
      </button>

      <div class="form-footer">
        <span>已有账号? <a href="javascript:;" @click="$emit('switch-to-login')">立即登录</a></span>
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
const emit = defineEmits(['submit', 'validate', 'switch-to-login', 'update:form'])
const handleSubmit = () => {
  emit('submit')
}
</script>

<style scoped>
/* 注册表单专属样式 */
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

.terms-group {
  margin-bottom: 24px;
  font-size: 14px;
  color: #808080;
  display: flex;
  align-items: flex-start;
}

.terms-group input {
  margin-right: 8px;
  margin-top: 2px;
}

.terms-group input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.terms-group a {
  color: #ffd700;
  text-decoration: none;
}

.terms-group a:hover {
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
