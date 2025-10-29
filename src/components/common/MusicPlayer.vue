<template>
  <div class="player">
    <div class="container">
      <div class="flex items-center justify-between py-3">
        <div class="flex items-center">
          <div class="w-14 h-14 rounded mr-3 overflow-hidden">
            <img alt="Current playing track album cover" class="w-full h-full object-cover" id="playing-cover" src="https://picsum.photos/200/200" />
          </div>
          <div>
            <h4 class="text-white font-medium">BEAT THE STREET</h4>
            <p class="text-xs text-[#808080]"><span class="artist-name">Q-BOOM</span> · NEW TRACK</p>
          </div>
        </div>

        <div class="flex-1 max-w-lg">
          <div class="flex items-center justify-center mb-2">
            <button class="text-[#CCCCCC] hover:text-[#FFD700] mx-2">
              <iconify-icon icon="mdi:skip-previous" width="30"></iconify-icon>
            </button>
            <button class="ml-4 w-12 h-12 rounded-full flex items-center justify-center main-btn hover:scale-105 mx-2">
              <iconify-icon icon="mdi:play" width="24"></iconify-icon>
            </button>
            <button class="text-[#CCCCCC] hover:text-[#FFD700] mx-2">
              <iconify-icon icon="mdi:skip-next" width="30"></iconify-icon>
            </button>
          </div>

          <div class="flex items-center">
            <span class="text-xs text-[#808080]">1:34</span>
            <div class="flex-1 bg-[#333] h-1 rounded-full overflow-hidden mx-2">
              <div class="bg-[#FFD700] h-full" style="width: 30%"></div>
            </div>
            <span class="text-xs text-[#808080]">4:12</span>
          </div>
        </div>

        <div class="flex items-center">
          <iconify-icon class="text-[#CCCCCC] hover:text-[#FFD700] mr-5 cursor-pointer" icon="mdi:playlist-music" width="24"></iconify-icon>
          <iconify-icon class="text-[#CCCCCC] hover:text-[#FFD700] cursor-pointer" icon="mdi:volume-high" width="24"></iconify-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 音乐播放器相关逻辑可以在这里实现
</script>
