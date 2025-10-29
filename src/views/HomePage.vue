<template>
  <div class="home-page">
    <!-- Banner区域 -->
    <HomeBanner />

    <!-- 主内容面板 -->
    <section class="py-8">
      <div class="container flex flex-col md:flex-row gap-8">
        <!-- 左侧边栏 -->
        <div class="w-full md:w-72 flex-shrink-0">
          <HotArtists />
          <HotTopicsChart class="mt-8" />
        </div>

        <!-- 中央内容区 -->
        <div class="flex-1">
          <CommunityFeed />
          <RecommendedMusic class="mt-8" />
        </div>

        <!-- 右侧边栏 -->
        <div class="w-full md:w-72 flex-shrink-0">
          <SidebarTopics />
          <Playlists class="mt-8" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HomeBanner from '../components/home/HomeBanner.vue'
import HotArtists from '../components/home/HotArtists.vue'
import HotTopicsChart from '../components/home/HotTopicsChart.vue'
import CommunityFeed from '../components/home/CommunityFeed.vue'
import RecommendedMusic from '../components/home/RecommendedMusic.vue'
import SidebarTopics from '../components/home/SidebarTopics.vue'
import Playlists from '../components/home/Playlists.vue'
</script>
