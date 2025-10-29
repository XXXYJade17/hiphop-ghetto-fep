<template>
  <header class="nav-border bg-black py-4 sticky top-0 z-50">
    <div class="container flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center">
        <iconify-icon class="text-gold" height="38" icon="game-icons:boom-mic" width="40"></iconify-icon>
        <h1 class="text-white text-2xl font-bold ml-2 tracking-wider">HipHop Ghetto</h1>
      </div>

      <!-- 主导航 -->
      <nav>
        <ul class="flex space-x-8">
          <li><a :class="{ 'tab-active': $route.name === 'Home' }" class="text-[#CCCCCC] hover:text-white text-base font-medium" href="/">主页</a></li>
          <li><a :class="{ 'tab-active': $route.name === 'Recommend' }" class="text-[#CCCCCC] hover:text-white text-base font-medium" href="/recommend">推荐</a></li>
          <li><a :class="{ 'tab-active': $route.name === 'Discover' }" class="text-[#CCCCCC] hover:text-white text-base font-medium" href="/discover">发现</a></li>
          <li><a :class="{ 'tab-active': $route.name === 'Forum' }" class="text-[#CCCCCC] hover:text-white text-base font-medium" href="/forum">讨论区</a></li>
          <li><a :class="{ 'tab-active': $route.name === 'Profile' }" class="text-[#CCCCCC] hover:text-white text-base font-medium" href="/profile">我的</a></li>
        </ul>
      </nav>

      <!-- 右侧功能 -->
      <div class="flex items-center space-x-5">
        <div class="relative">
          <input class="bg-[#1F1F1F] border border-[#333] rounded-lg py-2 px-4 w-64 focus:border-[#FFD700] focus:outline-none" placeholder="搜索音乐、艺人..." type="text"/>
          <iconify-icon class="text-[#808080] absolute right-3 top-2.5" icon="akar-icons:search"></iconify-icon>
        </div>
        <iconify-icon class="text-[#CCCCCC] hover:text-white cursor-pointer" icon="mdi:bell-outline" width="24"></iconify-icon>
        <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-[#FFD700] cursor-pointer">
          <img alt="User avatar" class="w-full h-full object-cover" id="user-avatar" src="https://picsum.photos/200/200" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// 可以在这里添加导航相关的交互逻辑
</script>
