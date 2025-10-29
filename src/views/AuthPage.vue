<template>
  <div class="min-h-screen flex flex-col">
    <!-- 提示组件 -->
    <Toast
      :message="toastMessage"
      :type="toastType"
      :show="toastShow"
    />

    <!-- 主内容区 -->
    <main class="flex-1 flex items-center justify-center py-12">
      <div class="container">
        <div class="auth-container flex gap-8 items-center">
          <!-- 左侧插图 -->
          <div class="auth-illustration w-1/2 hidden lg:block">
            <div class="rounded-2xl overflow-hidden relative">
              <img alt="Hip hop culture illustration" class="w-full h-full object-cover rounded-2xl" src="https://www.baidu.com/img/flexible/logo/pc/result.png"/>
              <div class="absolute inset-0 bg-gradient-to-tr from-dark to-transparent opacity-70"></div>
              <div class="absolute bottom-8 left-8 right-8">
                <h2 class="text-3xl font-bold text-white mb-4 font-['Exo 2']">加入嘻哈社区</h2>
                <p class="text-gray-custom mb-6">与全球说唱爱好者一起分享、发现和创作最棒的嘻哈音乐</p>
                <div class="flex items-center space-x-4">
                  <div class="flex -space-x-2">
                    <img alt="Community member" class="w-10 h-10 rounded-full border-2 border-dark" src="https://www.baidu.com/img/flexible/logo/pc/result.png"/>
                    <img alt="Community member" class="w-10 h-10 rounded-full border-2 border-dark" src="https://www.baidu.com/img/flexible/logo/pc/result.png"/>
                    <img alt="Community member" class="w-10 h-10 rounded-full border-2 border-dark" src="https://www.baidu.com/img/flexible/logo/pc/result.png"/>
                  </div>
                  <p class="text-sm text-gray-dark">已有 <span class="text-primary">10,000+</span> 嘻哈爱好者加入</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧表单 -->
          <div class="w-full lg:w-1/2 max-w-md mx-auto">
            <div class="card-bg p-8">
              <!-- 标签切换 -->
              <div class="mb-8">
                <div class="flex relative">
                  <button
                    class="flex-1 py-2 text-center font-medium"
                    :class="isLoginActive ? 'text-white' : 'text-gray-dark'"
                    @click="switchForm(true)"
                  >
                    登录
                  </button>
                  <button
                    class="flex-1 py-2 text-center font-medium"
                    :class="!isLoginActive ? 'text-white' : 'text-gray-dark'"
                    @click="switchForm(false)"
                  >
                    注册
                  </button>
                  <div class="tab-indicator absolute bottom-0" :style="{ left: isLoginActive ? '0' : '50%' }"></div>
                </div>
              </div>

              <!-- 登录表单 -->
              <LoginForm
                v-if="isLoginActive"
                :form="loginForm"
                :errors="loginErrors"
                @validate="validateLoginField"
                @submit="handleLogin"
                @switch-to-register="switchForm(false)"
              />

              <!-- 注册表单 -->
              <RegisterForm
                v-else
                :form="registerForm"
                :errors="registerErrors"
                @validate="validateRegisterField"
                @submit="handleRegister"
                @switch-to-login="switchForm(true)"
              />
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- 底部区域 -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Footer from '../components/layout/Footer.vue';
import LoginForm from '../components/auth/LoginForm.vue';
import RegisterForm from '../components/auth/RegisterForm.vue';
import Toast from '../components/common/MessageToast.vue';
import { useAuth } from '../composables/useAuth';

// 表单切换状态
const isLoginActive = ref(true);

// 表单数据
const loginForm = ref({ account: '', password: '' });
const registerForm = ref({
  username: '', phone: '', email: '',
  password: '', confirmPassword: '', agreeTerms: false
});

// 错误信息
const loginErrors = ref({ account: '', password: '' });
const registerErrors = ref({
  username: '', phone: '', email: '',
  password: '', confirmPassword: ''
});

// 提示信息
const toastMessage = ref('');
const toastType = ref('');
const toastShow = ref(false);

// 引入认证逻辑
const { Validator, showToast } = useAuth();

// 切换表单
const switchForm = (isLogin) => {
  isLoginActive.value = isLogin;
};

// 登录表单验证
const validateLoginField = (field) => {
  const value = loginForm.value[field].trim();
  let isValid = true;
  let errorMessage = '';

  if (field === 'account') {
    isValid = Validator.account(value);
    errorMessage = '请输入用户名、手机号或邮箱';
  } else if (field === 'password') {
    isValid = Validator.passwordLogin(value);
    errorMessage = '密码长度必须在8-32个字符之间，且包含字母和数字';
  }

  loginErrors.value[field] = isValid ? '' : errorMessage;
  return isValid;
};

// 注册表单验证
const validateRegisterField = (field) => {
  const value = registerForm.value[field].trim();
  let isValid = true;
  let errorMessage = '';

  if (field === 'username') {
    isValid = Validator.username(value);
    errorMessage = '用户名长度必须为6-16位，只能包含中文、字母、数字和下划线';
  } else if (field === 'phone') {
    isValid = Validator.phone(value);
    errorMessage = '请输入有效的手机号';
  } else if (field === 'email') {
    isValid = Validator.email(value);
    errorMessage = '请输入有效的邮箱地址';
  } else if (field === 'password') {
    isValid = Validator.passwordRegister(value);
    errorMessage = '密码长度必须为8-20位，且包含字母、数字和特殊字符';
  } else if (field === 'confirmPassword') {
    isValid = value === registerForm.value.password;
    errorMessage = '两次输入的密码不一致';
  }

  registerErrors.value[field] = isValid ? '' : errorMessage;
  return isValid;
};

// 处理登录
const handleLogin = () => {
  let isFormValid = true;
  Object.keys(loginForm.value).forEach(field => {
    if (!validateLoginField(field)) isFormValid = false;
  });

  if (!isFormValid) {
    showToast('请检查输入的信息是否正确', false, (msg, type) => {
      toastMessage.value = msg;
      toastType.value = type;
      toastShow.value = true;
    });
    return;
  }

  // 模拟登录成功
  showToast('登录成功！（模拟）', true, (msg, type) => {
    toastMessage.value = msg;
    toastType.value = type;
    toastShow.value = true;
  });
};

// 处理注册
const handleRegister = () => {
  let isFormValid = true;
  Object.keys(registerForm.value).forEach(field => {
    if (field !== 'agreeTerms' && !validateRegisterField(field)) isFormValid = false;
  });

  // 验证手机号和邮箱不能同时为空
  if (!registerForm.value.phone && !registerForm.value.email) {
    showToast('手机号和邮箱至少填写一个', false, (msg, type) => {
      toastMessage.value = msg;
      toastType.value = type;
      toastShow.value = true;
    });
    isFormValid = false;
  }

  // 验证协议勾选
  if (!registerForm.value.agreeTerms) {
    showToast('请同意用户协议和隐私政策', false, (msg, type) => {
      toastMessage.value = msg;
      toastType.value = type;
      toastShow.value = true;
    });
    isFormValid = false;
  }

  if (!isFormValid) return;

  // 模拟注册成功
  showToast('注册成功！（模拟）', true, (msg, type) => {
    toastMessage.value = msg;
    toastType.value = type;
    toastShow.value = true;
  });

  // 切换到登录表单
  setTimeout(() => switchForm(true), 1500);
};
</script>

<style scoped>
/* 仅保留页面级样式 */
.auth-container {
  width: 100%;
}

.tab-indicator {
  width: 50%;
  height: 2px;
  background: linear-gradient(to right, #FFD700, #FFA500);
  transition: left 0.3s ease;
}

/* 适配移动端 */
@media (max-width: 768px) {
  .auth-container {
    flex-direction: column;
  }
  .card-bg {
    padding: 20px;
    margin-top: 20px;
  }
}
</style>
