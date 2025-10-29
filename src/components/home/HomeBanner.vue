<template>
  <section class="py-12">
    <div class="container">
      <div class="rounded-2xl overflow-hidden relative" style="background: linear-gradient(135deg, #1a1a1a 0%, #2a0a1f 100%);">
        <div class="aspect-[16/6] flex items-center justify-center relative">
          <!-- Banner背景图 -->
          <img alt="Rap music festival event background image"
               class="absolute inset-0 w-full h-full object-cover opacity-30"
               src="/assets/images/7a50b54f5b5441e5afb9ac6a04d01024.jpg"/>

          <!-- Banner内容 -->
          <div class="relative z-10 text-center px-8 max-w-3xl">
            <h2 class="text-[42px] font-bold text-white mb-4 tracking-tight font-['Exo 2']">{{ banner.title }}</h2>
            <p class="text-xl text-[#CCCCCC] mb-8">{{ banner.description }}</p>
            <button class="main-btn px-8 font-bold hover:scale-105 active:scale-95" @click="handleBannerClick">
              {{ banner.buttonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Banner数据
const banner = ref({
  title: '年度最佳说唱专辑评选开启',
  description: '参与投票支持你喜爱的作品，获年度VIP会员资格',
  buttonText: '立即参与'
})

// 点击事件处理
const handleBannerClick = () => {
  // 可以添加跳转逻辑
  alert('进入评选活动页面')
}
</script>
