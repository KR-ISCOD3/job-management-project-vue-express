<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ChartOptions,
  ChartData
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

const chartData: ChartData<'line'> = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: '',
      data: [80, 150, 100, 200, 180, 260, 40, 60, 100, 50, 120, 190],
      borderColor: '#1c398e',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      tension: 0.4,
      fill: true
    }
  ]
}

const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      display:false,
    }
  },
  scales: {
    x: {
      ticks: {
        font: {
          family: 'Siemreap, sans-serif',
          size: 12
        },
        color: '#444'
      }
    },
    y: {
      ticks: {
        font: {
          family: 'Fira Sans, sans-serif',
          size: 12
        },
        color: '#444'
      }
    }
  },
  animation: {
    duration: 1000, // speed in ms
    easing: 'easeInOutQuart' // animation style
  }
}
</script>

<template>
  <p class="font-bold text-lg text-blue-900 pb-5">ទីផ្សារកាងារ</p>
  <div class="w-[620px]">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>
