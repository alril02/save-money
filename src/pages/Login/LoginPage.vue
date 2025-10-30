<template>
  <q-page class="flex flex-center bg-pink-2">
    <div class="phone shadow-10">
      <div class="wave"></div>
      <div class="content q-pa-md">
        <h5 class="text-center text-grey-9 q-mb-md">Sign In</h5>
        <q-form @submit.prevent="onLogin">
          <q-input
            v-model="email"
            label="Email"
            type="email"
            outlined
            dense
            class="q-mb-md"
          />
          <q-input
            v-model="password"
            label="Password"
            type="password"
            outlined
            dense
            class="q-mb-md"
          />
          <q-btn
            label="Login"
            type="submit"
            color="pink-5"
            class="full-width q-mt-sm"
            rounded
          />
        </q-form>
        <p class="text-center text-grey-8 q-mt-md">
          Don’t have an account?
          <router-link to="/signup" class="text-pink-5">Sign up</router-link>
        </p>
      </div>
    </div>
=======
  <q-page>
    <h3>Halaman login</h3>
    <h4>Adel</h4>
>>>>>>> 9a8d1ea89f30ddb030bdac141620abc7cc7c004c
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const onLogin = () => {
  console.log('Login clicked', email.value, password.value)
  // Tambahkan logic autentikasi di sini
}
</script>

<style scoped>
.phone {
  width: 280px;
  height: 520px;
  background: white;
  border-radius: 35px;
  overflow: hidden;
  position: relative;
}

.wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 180px;
  background: linear-gradient(135deg, #f48fb1, #f06292);
  border-bottom-left-radius: 50% 40%;
  border-bottom-right-radius: 50% 40%;
}

.content {
  position: absolute;
  top: 180px;
  width: 100%;
}

.full-width {
  width: 100%;
}
</style>