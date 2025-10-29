<template>
  <div class="card-bg p-6">
    <h3 class="text-xl font-bold text-white mb-4 section-title">热门艺人</h3>
    <div class="space-y-4">
      <!-- 示例艺人项 -->
      <div class="flex items-center">
        <div class="w-12 h-12 rounded-full overflow-hidden mr-3">
          <img src="/assets/images/artist1.jpg" alt="Artist" class="w-full h-full object-cover">
        </div>
        <div>
          <h4 class="text-white font-medium">Eminem</h4>
          <p class="text-xs text-gray-dark">粉丝 123.4万</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

let myChart = null

onMounted(() => {
  const chartDom = document.getElementById('hotChart')
  myChart = echarts.init(chartDom)

  const option = {
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
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
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
  }

  myChart.setOption(option)

  // 响应窗口大小变化
  window.addEventListener('resize', handleResize)
})

const handleResize = () => {
  if (myChart) {
    myChart.resize()
  }
}

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (myChart) {
    myChart.dispose()
  }
})
</script>
