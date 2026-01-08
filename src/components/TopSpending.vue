<template>
  <div class="w-full bg-white w-full rounded-xl p-5 shadow">
    <div class="mt-1 font-semibold text-gray-700 text-lg">Top Spending</div>

    <div class="flex gap-4 overflow-x-auto no-scrollbar w-full !flex-nowrap mt-3 pb-2">
      <div
        v-for="item in items"
        :key="item.label"
        class="min-w-[70px] shrink-0 bg-white shadow rounded-lg p-2 flex flex-col items-center"
      >
        <q-icon :name="item.icon" size="md" :class="item.color" />
        <div class="text-[10px] mt-1 text-gray-700">{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: Array,
})
</script>
