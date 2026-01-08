<template>
  <q-page
    class="max-w-[480px] mx-auto w-full p-4 gap-y-2 flex items-center justify-center min-h-screen bg-cover bg-center"
    style="
      background-image:
        linear-gradient(135deg, rgba(25, 50, 120, 0.9), rgba(230, 180, 80, 0.6)),
        url('https://images.pexels.com/photos/164652/pexels-photo-164652.jpeg');
    "
  >
    <!-- HEADER -->
    <q-header
      bordered
      class="max-w-[480px] mx-auto w-full flex justify-around items-center shadow-xl p-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-primary fixed bottom text-white"
    >
      <q-toolbar class="min-h-[40px] px-2 py-0">
        <q-btn flat round dense icon="menu" class="text-white" />
        <q-toolbar-title class="text-center"> Today, ${{ todayAmount }} </q-toolbar-title>
        <div class="text-white text-sm opacity-80">Upgrade</div>
      </q-toolbar>
    </q-header>

    <!-- TOGGLE BUTTON -->
    <div class="flex w-full mt-1 bg-white rounded-xl p-1 shadow">
      <button
        class="flex-1 py-2 rounded-lg"
        :class="tab === 'expense' ? 'bg-blue-500 text-white' : 'text-gray-600'"
        @click="tab = 'expense'"
      >
        Expense
      </button>

      <button
        class="flex-1 py-2 rounded-lg"
        :class="tab === 'income' ? 'bg-blue-500 text-white' : 'text-gray-600'"
        @click="tab = 'income'"
      >
        Income
      </button>
    </div>

    <!-- SAVINGS CARD -->
    <div class="bg-white w-full rounded-xl p-5 shadow">
      <div class="font-medium text-gray-500">March Savings</div>

      <!-- Total Savings -->
      <div class="text-3xl font-bold mt-2">${{ formatCurrency(savings) }}</div>

      <!-- EARNED BAR -->
      <div class="mt-3">
        <div class="relative w-full h-6 bg-gray-200 rounded-full overflow-hidden">
          <!-- Fill -->
          <div
            class="absolute inset-0 bg-blue-500 rounded-full"
            :style="{ width: `calc(${earnedPercent}% - 30%)` }"
          ></div>

          <!-- Text inside -->
          <div
            class="absolute inset-0 px-3 flex items-center justify-between text-xs font-semibold"
          >
            <span class="text-white">Earned</span>
            <span class="text-black font-bold">${{ formatCurrency(earned) }}</span>
          </div>
        </div>
      </div>

      <!-- SPENT BAR -->
      <div class="mt-3">
        <div class="relative w-full h-6 bg-gray-200 rounded-full overflow-hidden">
          <!-- Fill -->
          <div
            class="absolute inset-0 bg-pink-400 rounded-full"
            :style="{ width: `calc(${spendPercent}% - 50%)` }"
          ></div>

          <!-- Text inside -->
          <div
            class="absolute inset-0 px-3 flex items-center justify-between text-xs font-semibold"
          >
            <span class="text-white">Spend</span>
            <span class="text-black font-bold">${{ formatCurrency(spend) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- TOP SPENDING -->
    <TopSpending :items="topSpending" />

    <!-- MONTHLY BUDGET -->
    <MonthlyBudget :items="monthlyBudget" />
  </q-page>
</template>

<script setup>
import TopSpending from '../components/TopSpending.vue'
import MonthlyBudget from '../components/MonthlyBudget.vue'
import { useFinanceStore } from '../stores/useFinanceStore.js'

const store = useFinanceStore()

const {
  todayAmount,
  tab,
  savings,
  earned,
  spend,
  earnedPercent,
  spendPercent,
  topSpending,
  monthlyBudget,
} = store

const formatCurrency = (value) => {
  return Number(value).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}
</script>
