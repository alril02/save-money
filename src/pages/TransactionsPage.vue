<template>
  <q-page
    class="max-w-[480px] mx-auto w-full p-4 gap-y-2 flex items-center justify-center min-h-screen bg-cover bg-center"
    style="
      background-image:
        linear-gradient(135deg, rgba(25, 50, 120, 0.9), rgba(230, 180, 80, 0.6)),
        url('https://images.pexels.com/photos/164652/pexels-photo-164652.jpeg');
    "
  >
    <q-header
      bordered
      class="max-w-[480px] mx-auto w-full flex justify-around items-center shadow-xl p-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-primary fixed bottom text-white"
    >
      <q-toolbar class="min-h-[40px] px-2 py-0">
        <q-btn flat round dense icon="arrow_back" class="text-white" />
        <q-toolbar-title class="text-center"> Transaction List </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- FILTER TABS -->
    <div class="w-full px-1 py-1">
      <div class="flex bg-gray-100 rounded-full p-1 text-sm">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          class="flex-1 py-2 rounded-full font-medium"
          :class="activeTab === tab ? 'bg-blue-500 text-white' : 'text-gray-500'"
        >
          {{ tab }}
        </button>
      </div>
    </div>

    <!-- MONTH FILTER -->
    <div class="px-4 pb-3">
      <q-btn
        flat
        class="w-full bg-gray-50 border rounded-lg py-2 text-sm text-gray-600 flex items-center justify-center gap-2"
      >
        <q-icon name="event" />
        <span>{{ formattedDate }}</span>
        <q-icon name="expand_more" />

        <!-- POPUP DATE PICKER -->
        <q-popup-proxy transition-show="scale" transition-hide="scale">
          <q-date v-model="selectedDate" mask="YYYY-MM-DD" minimal today-btn />
        </q-popup-proxy>
      </q-btn>
    </div>

    <!-- TRANSACTION LIST -->
    <div class="px-4 w-full px-1 py-1">
      <div class="text-xs text-white mb-2 mt-1 font-semibold">Today</div>

      <div
        v-for="(item, index) in transactions"
        :key="index"
        class="flex items-center justify-between bg-white rounded-xl p-3 mb-3 shadow-sm"
      >
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 flex items-center justify-center rounded-full"
            :class="item.type === 'out' ? 'bg-red-100 text-red-500' : 'bg-blue-100 text-blue-500'"
          >
            <q-icon :name="item.type === 'out' ? 'south' : 'north'" />
          </div>

          <div>
            <div class="text-xs text-gray-400">{{ item.time }}</div>
            <div class="font-medium">{{ item.name }}</div>
            <div
              v-if="item.note"
              class="text-xs mt-1 inline-block px-2 py-0.5 rounded-full bg-gray-100 text-gray-500"
            >
              {{ item.note }}
            </div>
          </div>
        </div>

        <div class="font-semibold" :class="item.amount < 0 ? 'text-red-500' : 'text-blue-500'">
          {{ formatCurrency(item.amount) }}
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'

// tabs
const tabs = ['All', 'Expenses', 'Receives']
const activeTab = ref('All')
const selectedDate = ref('2024-06-01')

// dummy transactions
const transactions = ref([
  { time: 'Today 2:30', name: 'Natasha Davel', amount: -870.5, type: 'out' },
  { time: 'Today 2:30', name: 'Natasha Davel', amount: 870.5, type: 'in' },
  { time: 'Today 2:30', name: 'Natasha Davel', amount: 600, type: 'in' },
  { time: 'Today 2:30', name: 'Natasha Davel', amount: -500, type: 'out' },
  { time: 'Yesterday', name: 'Natasha Davel', amount: 870.5, type: 'in', note: 'from income' },
  {
    time: 'Today 2:30',
    name: 'Natasha Davel',
    amount: -500,
    type: 'out',
    note: 'to savings account',
  },
  { time: 'Today 2:30', name: 'Natasha Davel', amount: 870.5, type: 'in', note: 'from health' },
])

const formatCurrency = (value) => {
  const sign = value < 0 ? '-' : '+'
  return `${sign}$${Math.abs(value).toFixed(2)}`
}
const formattedDate = computed(() => {
  if (!selectedDate.value) return ''

  const [year, month, day] = selectedDate.value.split('-')

  const date = new Date(Number(year), Number(month) - 1, Number(day))

  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
})
</script>
