<template>
  <div class="min-h-screen bg-[#0A0A0A] text-[#CCCCCC]">
    <Header />
    <main class="pb-24"> <!-- 预留播放器空间 -->
      <RouterView />
    </main>
    <Footer />
    <MusicPlayer />
  </div>
</template>

<script setup>
import Header from './components/common/AppHeader.vue'
import Footer from './components/common/Footer.vue'
import MusicPlayer from './components/common/MusicPlayer.vue'
</script>
