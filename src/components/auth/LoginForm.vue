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
          v-model="form.account"
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
          v-model="form.password"
          placeholder="输入密码"
          type="password"
          required
          @blur="$emit('validate', 'password')"
        />
        <div class="error-message" :class="errors.password ? 'show' : ''">{{ errors.password }}</div>
        <div class="forgot-password">
          <a href="#">忘记密码?</a>
        </div>
      </div>

      <button type="submit" class="main-btn mb-6 w-full">登录账号</button>

      <div class="form-footer">
        <span>还没有账号? <a href="javascript:;" @click="$emit('switch-to-register')">立即注册</a></span>
      </div>
    </form>
  </div>
</template>

<script setup>
import { defineProps, emit } from 'vue';

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
const emit = defineEmits(['submit', 'validate', 'switch-to-register']);
const handleSubmit = () => {
  emit('submit');
};
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

.forgot-password {
  text-align: right;
  margin-top: 4px;
  font-size: 14px;
}

.forgot-password a {
  color: #FFD700;
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
  color: #FFD700;
  text-decoration: none;
}

.form-footer a:hover {
  text-decoration: underline;
}
</style>
