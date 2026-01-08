<template>
  <div class="w-full bg-white w-full rounded-xl p-5 shadow">
    <div class="mt-1 font-semibold text-gray-700 text-lg">Monthly Budget</div>

    <!-- HORIZONTAL SCROLL -->
    <div class="flex gap-4 overflow-x-auto no-scrollbar mt-4 pb-2 w-full !flex-nowrap">
      <div
        v-for="m in items"
        :key="m.name"
        class="min-w-[230px] bg-white p-4 rounded-xl shadow shrink-0"
      >
        <!-- Header -->
        <div class="flex items-center gap-3">
          <q-icon :name="m.icon" size="md" :class="m.color" />
          <div>
            <div class="font-semibold text-gray-800">{{ m.name }}</div>
            <div class="text-xs text-gray-500">${{ m.perday }} Per day</div>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="relative w-full h-5 bg-gray-200 rounded-full overflow-hidden mt-4">
          <div
            class="absolute inset-0 rounded-full"
            :class="m.barColor"
            :style="{ width: m.percent + '%' }"
          ></div>

          <div
            class="absolute inset-0 px-3 flex items-center justify-between text-xs font-semibold"
          >
            <span class="text-white">${{ formatCurrency(m.used) }}</span>
            <span class="text-black">${{ formatCurrency(m.limit) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: Array,
})

const formatCurrency = (value) => {
  return Number(value).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}
</script>
