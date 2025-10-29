<!-- src/views/Home/index.vue -->
<template>
  <div>
    <!-- 这里可以添加首页内容，原index.html中main标签内为空 -->
    <!-- 热门话题热度图表 -->
    <div class="container py-8">
      <h2 class="text-2xl font-bold mb-6 section-title">热门话题热度</h2>
      <div class="card-bg p-6">
        <div id="hotChart"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import useECharts from '@/hooks/useECharts'
import useCardEffects from '@/hooks/useCardEffects'

// 初始化图表
onMounted(() => {
  const { initChart } = useECharts()
  initChart('hotChart', {
    tooltip: {
      trigger: 'axis',
      formatter: '{b0}<br/>热度: {c0}'
    },
    grid: {
      left: '3%',
      right: '3%',
      top: '15%',
      bottom: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['嘻哈文化', '新专辑', '热点事件', '歌词挑战', '歌曲评论', '演出直播'],
      axisLine: {
        lineStyle: {
          color: '#444'
        }
      },
      axisLabel: {
        color: '#808080',
        fontSize: 10
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#444'
        }
      },
      axisLabel: {
        color: '#808080',
        fontSize: 10
      },
      splitLine: {
        lineStyle: {
          color: '#222'
        }
      }
    },
    series: [{
      data: [8900, 7500, 6120, 5870, 4320, 3650],
      type: 'bar',
      barWidth: '20px',
      itemStyle: {
        color: new window.echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#FFD700' },
          { offset: 1, color: '#FFA500' }
        ])
      },
      label: {
        show: true,
        position: 'top',
        color: '#FFD700'
      }
    }]
  })

  // 初始化卡片悬停效果
  const { initCardEffects } = useCardEffects()
  initCardEffects()
})
</script>
