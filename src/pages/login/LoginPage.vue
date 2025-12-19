<template>
  <q-page
    class="max-w-[480px] mx-auto w-full flex items-center justify-center min-h-screen bg-cover bg-center"
    style="
      background-image:
        linear-gradient(135deg, rgba(25, 50, 120, 0.9), rgba(230, 180, 80, 0.6)),
        url('https://images.pexels.com/photos/164652/pexels-photo-164652.jpeg');
    "
  >
    <q-card
      class="w-[90%] max-w-[420px] rounded-2xl bg-white/90 border-2 border-yellow-400/50 shadow-[0_6px_20px_rgba(25,50,120,0.4)] p-6 md:p-8"
    >
      <h3 class="text-center text-blue-800 text-lg md:text-xl font-semibold mb-4">
        Selamat Datang Kembali!
      </h3>
      <p class="text-center text-gray-600 mb-6 text-sm md:text-base">
        Masuk untuk mengelola keuanganmu bersama
        <span class="text-yellow-600 font-semibold">Safe Money 💰</span>
      </p>

      <!-- Input Email -->
      <q-input v-model="email" label="Email" borderless dense class="q-mb-none" />

      <div class="h-px bg-gray-300 my-2"></div>

      <!-- Input Password -->
      <q-input v-model="password" label="Password" type="password" borderless dense />

      <!-- Checkbox Remember Me dan Lupa Password -->
      <div class="flex items-center justify-between mb-3">
        <q-checkbox v-model="rememberMe" label="Remember me" dense color="yellow-9" class="p-0" />
        <q-btn
          flat
          label="Forgot password?"
          color="blue-8"
          class="text-weight-medium text-none"
          @click="forgotPassword"
        />
      </div>

      <!-- Tombol Login -->
      <q-btn
        label="Login"
        unelevated
        class="w-full mb-4 text-white text-weight-medium transition-all duration-300 transform hover:scale-105"
        style="background: linear-gradient(90deg, #1e3a8a, #ffd700)"
        @click="login"
      />

      <!-- Garis pemisah -->
      <div class="flex items-center justify-center mb-4">
        <div class="flex-1 h-px bg-blue-900/30"></div>
        <span class="text-gray-600 mx-2 text-sm">atau login dengan</span>
        <div class="flex-1 h-px bg-blue-900/30"></div>
      </div>

      <!-- Ikon login sosial -->
      <div class="flex justify-center gap-4 mb-4">
        <q-btn flat round size="lg" color="white" @click="loginGoogle">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            class="w-7 h-7 object-contain transition-transform duration-200 hover:scale-110"
          />
        </q-btn>
        <q-btn flat round size="lg" color="white" @click="loginFacebook">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
            class="w-7 h-7 object-contain transition-transform duration-200 hover:scale-110"
          />
        </q-btn>
        <q-btn flat round size="lg" color="white" @click="loginApple">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
            class="w-7 h-7 object-contain transition-transform duration-200 hover:scale-110"
          />
        </q-btn>
      </div>

      <!-- Link ke halaman Sign Up -->
      <div class="text-center">
        <q-btn
          flat
          color="yellow-9"
          label="Belum punya akun? Sign Up"
          class="text-weight-medium text-none"
          @click="goToSignUp"
        />
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
    }
  },
  methods: {
    login() {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      const user = users.find((u) => u.email === this.email && u.password === this.password)

      if (user) {
        this.$q.notify({
          color: 'blue-8',
          textColor: 'white',
          message: `Selamat datang, ${user.name}!`,
          icon: 'check_circle',
        })
        localStorage.setItem('currentUser', JSON.stringify(user))
        if (this.rememberMe) localStorage.setItem('rememberMe', 'true')
        else localStorage.removeItem('rememberMe')

        setTimeout(() => this.$router.push({ path: '/app' }), 1000)
      } else {
        this.$q.notify({
          color: 'red-7',
          textColor: 'white',
          message: 'Email atau password salah!',
          icon: 'error',
        })
      }
    },
    forgotPassword() {
      this.$q.notify({
        color: 'blue-8',
        textColor: 'white',
        message: 'Fitur reset password belum tersedia.',
        icon: 'info',
      })
    },
    loginGoogle() {
      this.$q.notify({
        color: 'red-6',
        textColor: 'white',
        message: 'Login dengan Google belum diaktifkan.',
        icon: 'info',
      })
    },
    loginFacebook() {
      this.$q.notify({
        color: 'blue-6',
        textColor: 'white',
        message: 'Login dengan Facebook belum diaktifkan.',
        icon: 'info',
      })
    },
    loginApple() {
      this.$q.notify({
        color: 'green-6',
        textColor: 'white',
        message: 'Login dengan Apple ID belum diaktifkan.',
        icon: 'info',
      })
    },
    goToSignUp() {
      this.$router.push('/signup')
    },
  },
  goToDashboard() {
    this.$router.push('/app')
  },
}
</script>
