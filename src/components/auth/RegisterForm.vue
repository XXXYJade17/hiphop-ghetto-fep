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
          v-model="form.username"
          placeholder="设置你的用户名"
          type="text"
          required
          @blur="$emit('validate', 'username')"
        />
        <div class="error-message" :class="errors.username ? 'show' : ''">{{ errors.username }}</div>
      </div>

      <div class="form-group">
        <label for="register-phone">手机号（选填）</label>
        <input
          class="input-field"
          id="register-phone"
          v-model="form.phone"
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
          v-model="form.email"
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
          v-model="form.password"
          placeholder="设置密码（至少8位，需包含字母、数字和特殊字符）"
          type="password"
          required
          @blur="$emit('validate', 'password')"
        />
        <div class="error-message" :class="errors.password ? 'show' : ''">{{ errors.password }}</div>
      </div>

      <div class="form-group">
        <label for="register-confirm">确认密码</label>
        <input
          class="input-field"
          id="register-confirm"
          v-model="form.confirmPassword"
          placeholder="再次输入密码"
          type="password"
          required
          @blur="$emit('validate', 'confirmPassword')"
        />
        <div class="error-message" :class="errors.confirmPassword ? 'show' : ''">{{ errors.confirmPassword }}</div>
      </div>

      <div class="terms-group">
        <input type="checkbox" id="agree-terms" v-model="form.agreeTerms" required/>
        <label for="agree-terms">
          我已阅读并同意<a href="#">用户协议</a>和<a href="#">隐私政策</a>
        </label>
      </div>

      <button type="submit" class="main-btn mb-6 w-full">创建账号</button>

      <div class="form-footer">
        <span>已有账号? <a href="javascript:;" @click="$emit('switch-to-login')">立即登录</a></span>
      </div>
    </form>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// 接收父组件参数
const props = defineProps({
  form: {
    type: Object,
    required: true
  },
  errors: {
    type: Object,
    required: true
  }
});

// 提交表单
const emit = defineEmits(['submit', 'validate', 'switch-to-login']);
const handleSubmit = () => {
  emit('submit');
};
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
  background: #1F1F1F;
  border: 1px solid #333;
  border-radius: 6px;
  padding: 12px 16px;
  color: #FFFFFF;
  font-size: 14px;
}

.input-field:focus {
  border-color: #FFD700;
  outline: none;
}

.error-message {
  color: #DC143C;
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

.terms-group a {
  color: #FFD700;
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
  color: #FFD700;
  text-decoration: none;
}

.form-footer a:hover {
  text-decoration: underline;
}
</style>
