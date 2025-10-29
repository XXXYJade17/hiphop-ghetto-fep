<template>
  <div
    :class="['toast', type, show ? 'show' : '']"
    :style="customStyle"
  >
    {{ message }}
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// 接收提示参数
defineProps({
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'success', // success/error
  },
  show: {
    type: Boolean,
    default: false
  },
  // 可选：自定义样式
  customStyle: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped>
.toast {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  border-radius: 8px;
  color: #0A0A0A;
  font-weight: 600;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.toast.success {
  background: #FFD700;
}

.toast.error {
  background: #DC143C;
  color: #FFFFFF;
}

.toast.show {
  opacity: 1;
}
</style>
