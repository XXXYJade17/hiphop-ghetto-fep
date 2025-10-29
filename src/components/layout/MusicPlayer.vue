<template>
  <div class="player">
    <div class="container">
      <div class="flex items-center justify-between py-3">
        <!-- 当前播放信息 -->
        <div class="flex items-center">
          <div class="w-14 h-14 rounded mr-3 overflow-hidden">
            <img :src="currentTrack.cover" alt="Current playing track album cover" class="w-full h-full object-cover"/>
          </div>
          <div>
            <h4 class="text-white font-medium">{{ currentTrack.title }}</h4>
            <p class="text-xs text-[#808080]">
              <span class="artist-name">{{ currentTrack.artist }}</span> · {{ currentTrack.album }}
            </p>
          </div>
        </div>

        <!-- 播放控制 -->
        <div class="flex-1 max-w-lg">
          <div class="flex items-center justify-center mb-2">
            <button class="text-[#CCCCCC] hover:text-[#FFD700] mx-2">
              <iconify-icon icon="mdi:skip-previous" width="30"></iconify-icon>
            </button>
            <button class="ml-4 w-12 h-12 rounded-full flex items-center justify-center main-btn hover:scale-105 mx-2"
                    @click="togglePlay">
              <iconify-icon :icon="isPlaying ? 'mdi:pause' : 'mdi:play'" width="24"></iconify-icon>
            </button>
            <button class="text-[#CCCCCC] hover:text-[#FFD700] mx-2">
              <iconify-icon icon="mdi:skip-next" width="30"></iconify-icon>
            </button>
          </div>

          <!-- 进度条 -->
          <div class="flex items-center">
            <span class="text-xs text-[#808080]">{{ currentTrack.currentTime }}</span>
            <div class="flex-1 bg-[#333] h-1 rounded-full overflow-hidden mx-2 cursor-pointer"
                 @click="handleProgressClick">
              <div class="bg-[#FFD700] h-full" :style="{ width: currentTrack.progress + '%' }"></div>
            </div>
            <span class="text-xs text-[#808080]">{{ currentTrack.duration }}</span>
          </div>
        </div>

        <!-- 音量和播放列表 -->
        <div class="flex items-center">
          <iconify-icon class="text-[#CCCCCC] hover:text-[#FFD700] mr-5 cursor-pointer" icon="mdi:playlist-music" width="24"></iconify-icon>
          <iconify-icon class="text-[#CCCCCC] hover:text-[#FFD700] cursor-pointer" icon="mdi:volume-high" width="24"></iconify-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMusicStore } from '../../store/musicStore'

const musicStore = useMusicStore()

// 解构状态
const { currentTrack, isPlaying } = musicStore

// 调用actions
const togglePlay = () => {
  musicStore.togglePlay()
}

const handleProgressClick = (e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  const progress = ((e.clientX - rect.left) / rect.width) * 100
  musicStore.setProgress(progress)
  // 这里可以添加更新播放时间的逻辑
}
</script>
