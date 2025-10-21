<template>
  <aside class="sidebar" aria-label="Sidebar">
    <div class="brand">
      <span class="logo" aria-hidden></span>CoachPro
    </div>
    <nav>
      <div @click="goToPage('/')"  class="nav-item hover:text-blue-600 active:text-blue-700 cursor-pointer transition-colors duration-200">
        <span class="icon">▦</span><span>Dashboard</span>
      </div>

      <div @click="goToPage('/')" class="nav-item inactive hover:text-blue-600 active:text-blue-700 cursor-pointer transition-colors duration-200">
        <span class="icon">👥</span><span>Squad</span>
      </div>

      <div @click="goToPage('/')" class="nav-item inactive hover:text-blue-600 active:text-blue-700 cursor-pointer transition-colors duration-200">
        <span class="icon">✉</span><span>Messenger</span>
      </div>

      <div @click="goToPage('/')" class="nav-item inactive hover:text-blue-600 active:text-blue-700 cursor-pointer transition-colors duration-200">
        <span class="icon">📊</span><span>Statistic</span>
      </div>

      <div @click="goToPage('/')" class="nav-item inactive hover:text-blue-600 active:text-blue-700 cursor-pointer transition-colors duration-200">
        <span class="icon">📅</span><span>Calendar</span>
      </div>

      <div @click="goToPage('/')" class="nav-item inactive hover:text-blue-600 active:text-blue-700 cursor-pointer transition-colors duration-200">
        <span class="icon">💰</span><span>Finance</span>
      </div>
    </nav>

    <div class="small">Transfers · Youth academy</div>
  </aside>
</template>

<script setup>
</script>

<style scoped>
.sidebar {
  width: 240px;
  height: 100vh;
  background-color: #f8f9fa;
  padding: 1rem;
}

.brand {
  font-weight: bold;
  font-size: 1.5rem;
  color: #0f766e; /* teal-700 */
  margin-bottom: 1rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 8px 10px;
  border-radius: 6px;
  color: #333;
}

.nav-item:hover {
  color: #2563eb; /* biru saat hover */
}

.nav-item:active {
  color: #1d4ed8; /* biru tua saat diklik */
}

.small {
  margin-top: 2rem;
  font-size: 0.875rem;
  color: #6b7280; /* abu-abu */
}
</style>
