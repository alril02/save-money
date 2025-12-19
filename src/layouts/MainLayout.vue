<template>
  <q-layout view="lHh lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-3 max-w-[480px] mx-auto w-full">
      <q-tabs
        v-model="tab"
        dense
        class="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-primary max-w-[480px] mx-auto w-full"
      >
        <q-route-tab name="home" icon="home" label="Home" no-caps to="/app" />
        <q-route-tab
          name="graph"
          icon="donut_small"
          label="Graph"
          no-caps
          to="/app/billingreports"
        />
        <q-route-tab
          name="transactions"
          icon="receipt_long"
          label="Transactions"
          no-caps
          to="/app/transactions"
        />
        <q-route-tab name="category" icon="category" label="Category" no-caps to="/app/budget" />
        <q-route-tab name="settings" icon="settings" label="Settings" no-caps to="/app/settings" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
const tab = ref('Graph')
</script>
