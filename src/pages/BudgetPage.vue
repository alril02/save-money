<template>
  <q-page
    class="max-w-[480px] mx-auto w-full p-1 gap-y-2 flex items-center justify-center min-h-screen bg-cover bg-center"
    style="
      background-image:
        linear-gradient(135deg, rgba(25, 50, 120, 0.9), rgba(230, 180, 80, 0.6)),
        url('https://images.pexels.com/photos/164652/pexels-photo-164652.jpeg');
    "
  >
    <q-header
      bordered
      class="max-w-[480px] mx-auto w-full justify-around items-center shadow-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-primary fixed bottom text-white"
    >
      <q-toolbar class="min-h-[40px] px-2 py-0">
        <q-btn flat round dense icon="arrow_back" class="text-white" />
        <q-toolbar-title class="text-center"> Budget </q-toolbar-title>
        <q-btn flat round dense icon="calendar_month" class="text-white" />
      </q-toolbar>
      <!-- CONTENT -->
      <div class="bg-gradient-to-r from-purple-500 to-indigo-500 w-full">
        <div class="text-center q-mt-md">
          <div class="text-h3 text-weight-bold">$4,167<span class="text-subtitle1">.56</span></div>
          <div class="text-subtitle2">June</div>

          <!-- Fake Chart -->
          <div class="q-mt-md">
            <svg viewBox="0 0 300 80" width="100%" height="100">
              <polyline
                fill="none"
                stroke="#ffffff"
                stroke-width="2"
                points="0,50 20,40 40,60 60,45 80,55 100,35 120,30 140,45 160,50 180,40 200,55 220,45 240,30 260,35 280,50 300,70"
              />
            </svg>
          </div>
        </div>
      </div>
      <!-- CONTENT -->
    </q-header>
    <!-- Tabs -->
    <q-tabs
      v-model="tab"
      dense
      class="bg-white w-full rounded-xl shadow text-grey justify-align gap-y-3 mb-1"
      active-color="primary"
      indicator-color="primary"
    >
      <q-tab name="categories" label="CATEGORIES" />
      <q-tab name="merchants" label="MERCHANTS" />
    </q-tabs>

    <q-separator />

    <ListCategory />
  </q-page>
</template>

<script setup>
// Static UI only (can be converted to props / API later)
import { ref } from 'vue'
import ListCategory from 'src/components/budget/ListCategoryComponent.vue'

const tab = ref('categories')
</script>

<style scoped>
.budget-card {
  border-radius: 16px;
}
</style>
