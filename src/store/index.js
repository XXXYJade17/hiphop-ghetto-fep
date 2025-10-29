// src/store/index.js
import { createPinia } from 'pinia'

const store = createPinia()

export default store

// src/store/musicStore.js
import { defineStore } from 'pinia'

export const useMusicStore = defineStore('music', {
  state: () => ({
    currentTrack: {
      title: 'BEAT THE STREET',
      artist: 'Q-BOOM',
      album: 'NEW TRACK',
      cover: '/assets/images/6b7ea6f1dd4e4f579c47a8c47e494b33.jpg',
      duration: '4:12',
      currentTime: '1:34',
      progress: 30
    },
    isPlaying: false,
    playlist: []
  }),
  actions: {
    togglePlay() {
      this.isPlaying = !this.isPlaying
    },
    setProgress(progress) {
      this.currentTrack.progress = progress
    },
    // 其他音乐控制方法...
  }
})
