<template>
  <q-page class="flex flex-center bg-pink-2">
    <div class="phone shadow-10">
      <div class="wave"></div>
      <div class="content q-pa-md">
        <h5 class="text-center text-grey-9 q-mb-md">Sign Up</h5>
        <q-form @submit.prevent="onSignup">
          <q-input
            v-model="name"
            label="Full Name"
            outlined
            dense
            class="q-mb-md"
          />
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
          <q-input
            v-model="confirmPassword"
            label="Confirm Password"
            type="password"
            outlined
            dense
            class="q-mb-md"
          />
          <q-btn
            label="Create Account"
            type="submit"
            color="pink-5"
            class="full-width q-mt-sm"
            rounded
          />
        </q-form>
        <p class="text-center text-grey-8 q-mt-md">
          Already have an account?
          <router-link to="/login" class="text-pink-5">Sign in</router-link>
        </p>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const onSignup = () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match!')
    return
  }
  console.log('Sign up clicked:', name.value, email.value)
  // Tambahkan logic register ke backend di sini
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