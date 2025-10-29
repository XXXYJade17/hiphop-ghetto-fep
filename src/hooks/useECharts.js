// src/hooks/useECharts.js
import { onUnmounted } from 'vue'

export default function useECharts() {
  // 存储图表实例
  const chartInstances = new Map()

  // 初始化图表
  const initChart = (domId, options) => {
    const chartDom = document.getElementById(domId)
    if (!chartDom) return null

    const myChart = window.echarts.init(chartDom)
    myChart.setOption(options)
    chartInstances.set(domId, myChart)

    // 响应窗口大小变化
    const resizeHandler = () => {
      myChart.resize()
    }

    window.addEventListener('resize', resizeHandler)

    // 清理函数
    onUnmounted(() => {
      window.removeEventListener('resize', resizeHandler)
      myChart.dispose()
      chartInstances.delete(domId)
    })

    return myChart
  }

  // 更新图表数据
  const updateChart = (domId, options) => {
    const chart = chartInstances.get(domId)
    if (chart) {
      chart.setOption(options)
    }
  }

  return {
    initChart,
    updateChart
  }
}
