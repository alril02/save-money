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
      class="max-w-[480px] mx-auto w-full justify-around items-center shadow-xl p-1 pb-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-primary text-white"
    >
      <!-- TOOLBAR ATAS -->
      <q-toolbar class="min-h-[40px] px-2 py-0">
        <q-btn flat round dense icon="arrow_back" class="text-white" />

        <!-- TITLE TETAP TENGAH -->
        <q-toolbar-title class="text-center"> Profile </q-toolbar-title>

        <q-btn flat round dense icon="settings" class="text-white" />
      </q-toolbar>

      <!-- AVATAR + NAME (RATA KIRI) -->
      <div class="row items-center q-pl-md q-pb-md q-mt-sm">
        <q-avatar size="80px">
          <img src="https://i.pravatar.cc/150?img=12" />
        </q-avatar>

        <div class="column p-5 q-ml-md">
          <div class="text-h6 text-white">Jonathan Doe</div>
          <div class="text-white text-caption opacity-80">Saving for the future</div>
        </div>

        <q-btn
          flat
          round
          dense
          icon="edit"
          class="text-white inset-shadow flex inline shadow-box flex-center doc-inset-shadow"
        />
      </div>
    </q-header>

    <!-- CONTENT -->
    <div class="w-full p-1 mt-1 q-px-md q-mt-lg">
      <!-- PREMIUM CARD -->
      <q-card flat bordered class="rounded-card q-mb-md">
        <q-card-section class="row items-center">
          <q-icon name="verified" color="primary" size="32px" />
          <div class="q-ml-md">
            <div class="text-weight-bold">Save Money</div>
            <div class="text-caption text-grey">Premium Member</div>
            <q-rating v-model="rating" max="5" size="16px" color="amber" readonly />
          </div>
          <q-space />
          <q-btn label="Upgrade" rounded unelevated color="primary" />
        </q-card-section>
      </q-card>

      <!-- ACCOUNT INFO -->
      <q-card flat bordered class="rounded-card q-mb-md">
        <q-list separator>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon name="email" color="primary" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Email</q-item-label>
              <q-item-label caption>jonathan@email.com</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="chevron_right" />
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon name="call" color="purple" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Phone</q-item-label>
              <q-item-label caption>+1 123 456 7890</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="chevron_right" />
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon name="lock" color="pink" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Password</q-item-label>
              <q-item-label caption>********</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="chevron_right" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>

      <!-- OPTIONS -->
      <q-card flat bordered class="rounded-card">
        <div class="mt-1 p-2 text-black text-lg">Options</div>
        <q-list>
          <q-item>
            <q-item-section avatar>
              <q-icon name="notifications" color="primary" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Notifications</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle v-model="notif" color="primary" />
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon name="dark_mode" color="orange" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Dark Mode</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle v-model="dark" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const rating = ref(5)
const notif = ref(true)
const dark = ref(false)
</script>

<style scoped>
.profile-header {
  height: 260px;
  background: linear-gradient(135deg, #7f5cff, #b983ff);
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
}

.rounded-card {
  border-radius: 18px;
}
</style>
