// src/hooks/useCardEffects.js
import { onUnmounted } from 'vue'

export default function useCardEffects() {
  // 初始化卡片悬停效果
  const initCardEffects = () => {
    const cards = document.querySelectorAll('.hover-float')

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // 基于鼠标位置添加延迟效果
      e.currentTarget.style.transform = `translateY(${-5 + (y / rect.height - 0.5) * 2}px) rotateX(${(y / rect.height - 0.5) * 1}deg) rotateY(${(x / rect.width - 0.5) * 3}deg)`
    }

    const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = 'translateY(0) rotateX(0) rotateY(0)'
    }

    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseleave', handleMouseLeave)
    })

    // 清理函数
    onUnmounted(() => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove)
        card.removeEventListener('mouseleave', handleMouseLeave)
      })
    })
  }

  return {
    initCardEffects
  }
}
