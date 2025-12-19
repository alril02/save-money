<template>
  <q-page
    class="max-w-[480px] mx-auto w-full p-4 gap-y-2 flex items-center justify-center min-h-screen bg-cover bg-center"
    style="
      background-image:
        linear-gradient(135deg, rgba(25, 50, 120, 0.9), rgba(230, 180, 80, 0.6)),
        url('https://images.pexels.com/photos/164652/pexels-photo-164652.jpeg');
    "
  >
    <!-- MOBILE HEADER -->
    <q-header
      bordered
      class="max-w-[480px] mx-auto w-full flex justify-around items-center shadow-xl p-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-primary fixed bottom text-white"
    >
      <q-toolbar class="min-h-[40px] px-2 py-0">
        <q-btn flat round dense icon="arrow_back" class="text-white" />
        <q-toolbar-title class="text-center"> Billing Reports </q-toolbar-title>
        <q-btn flat round dense icon="calendar_month" class="text-white" />
      </q-toolbar>
      <!-- CONTENT -->
      <div class="p-1 bg-gradient-to-r from-purple-500 to-indigo-500 w-full space-y-5">
        <!-- CHART CARD -->
        <q-card
          flat
          class="bg-transparent overflow-x-auto flex flex-nowrap gap-3 py-0 px-2 text-xs scrollbar-hide text-white"
        >
          <div
            v-for="(m, i) in months"
            :key="i"
            :class="[
              'shrink-0 cursor-pointer transition',
              activeMonth === m
                ? 'font-bold underline opacity-100'
                : 'opacity-70 hover:opacity-100 hover:underline',
            ]"
          >
            {{ m }}
          </div>
        </q-card>
      </div>
      <!-- CONTENT -->
    </q-header>

    <div class="w-full space-y-2">
      <q-card flat bordered class="rounded-xl p-4">
        <div class="flex items-center justify-center gap-4">
          <!-- PIE CHART -->
          <div class="relative w-40 h-40 flex justify-center items-center">
            <Pie :data="chartData" :options="chartOptions" />

            <!-- TEXT TENGAH -->
            <div class="absolute text-center">
              <div class="text-xs text-gray-500">Total</div>
              <div class="text-lg font-bold">$9500</div>
            </div>
          </div>

          <!-- LEGEND -->
          <div class="grid grid-cols-1 gap-1 text-xs">
            <div v-for="item in legend" :key="item.label" class="flex items-center gap-2">
              <div :style="{ background: item.color }" class="w-3 h-3 rounded-full"></div>
              <div>{{ item.label }}</div>
            </div>
          </div>
        </div>
      </q-card>
    </div>

    <!-- TRANSACTION LIST -->
    <div class="w-full space-y-2">
      <q-card v-for="(item, i) in list" :key="i" flat bordered class="rounded-xl p-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div
              :style="{ background: item.color }"
              class="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg"
            >
              <q-icon :name="item.icon" class="text-lg" />
            </div>
            <div>
              <div class="text-sm font-semibold">{{ item.title }}</div>
              <div class="text-[10px] text-gray-500">{{ item.transactions }} transactions</div>
            </div>
          </div>
          <div class="text-sm font-bold">${{ item.amount.toLocaleString() }}</div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)
import ChartDataLabels from 'chartjs-plugin-datalabels'

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const activeMonth = ref('June')

const chartData = {
  labels: ['Salary', 'Medicine', 'Restaurant', 'Cloth', 'Fuel'],
  datasets: [
    {
      data: [38, 25, 20, 10, 7],
      backgroundColor: ['#3D8BFF', '#FF6B6B', '#FF9F40', '#9B51E0', '#27AE60'],
      borderWidth: 0,
      cutout: '70%', // ⬅️ INI PENTING (donut)
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false, // tooltip dimatikan (karena label sudah tampil)
    },
    datalabels: {
      color: '#fff',
      font: {
        weight: 'bold',
        size: 11,
      },
      formatter: (value, ctx) => {
        const total = ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0)
        const percentage = ((value / total) * 100).toFixed(0)
        return percentage + '%'
      },
    },
  },
}

const legend = [
  { label: 'Salary', color: '#3D8BFF' },
  { label: 'Medicine', color: '#FF6B6B' },
  { label: 'Restaurant', color: '#FF9F40' },
  { label: 'Cloth', color: '#9B51E0' },
  { label: 'Fuel', color: '#27AE60' },
]

const list = [
  { title: 'Salary', icon: 'savings', amount: 5000, transactions: 1, color: '#3D8BFF' },
  { title: 'Medicine', icon: 'medical_services', amount: 2680, transactions: 2, color: '#FF6B6B' },
  { title: 'Restaurant', icon: 'restaurant', amount: 2680, transactions: 5, color: '#FF9F40' },
  { title: 'Cloth', icon: 'checkroom', amount: 2680, transactions: 3, color: '#9B51E0' },
  { title: 'Fuel', icon: 'local_gas_station', amount: 665, transactions: 2, color: '#27AE60' },
]
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon-wrap {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.label {
  background: white;
}
</style>
