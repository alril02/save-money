<template>
  <div class="max-w-[480px] mx-auto w-full">
    <q-page
      class="flex items-center justify-center min-h-screen bg-cover bg-center"
      style="
        background-image:
          linear-gradient(135deg, rgba(25, 50, 120, 0.9), rgba(230, 180, 80, 0.6)),
          url('https://images.pexels.com/photos/164652/pexels-photo-164652.jpeg');
      "
    >
      <q-card
        class="w-[90%] max-w-[480px] rounded-2xl bg-white/90 border-2 border-yellow-400/50 shadow-[0_6px_20px_rgba(25,50,120,0.4)] p-6 md:p-8"
      >
        <h3 class="text-center text-blue-800 text-lg md:text-xl font-semibold mb-4">
          Buat Akun Baru
        </h3>

        <p class="text-center text-gray-600 mb-6 text-sm md:text-base">
          Bergabung dengan
          <span class="text-yellow-600 font-semibold">Safe Money 💰</span>
          untuk mengelola keuanganmu
        </p>

        <!-- Input Nama -->
        <q-input v-model="name" label="Nama Lengkap" borderless dense class="q-mb-none" />
        <div class="h-px bg-gray-300 my-2"></div>

        <!-- Input Email -->
        <q-input v-model="email" label="Email" type="email" borderless dense class="q-mb-none" />
        <div class="h-px bg-gray-300 my-2"></div>

        <!-- Input Password -->
        <q-input
          v-model="Password"
          :type="isPwd ? 'password' : 'text'"
          label="Password"
          borderless
          dense
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <div class="q-mb-none h-px bg-gray-300 my-2"></div>

        <!-- Input Konfirmasi Password -->
        <q-input
          v-model="confirmPassword"
          :type="isConfirmPwd ? 'password' : 'text'"
          label="Konfirmasi Password"
          borderless
          dense
        >
          <template v-slot:append>
            <q-icon
              :name="isConfirmPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isConfirmPwd = !isConfirmPwd"
            />
          </template>
        </q-input>
        <div class="q-mb-none h-px bg-gray-300 my-2"></div>

        <!-- Tombol Sign Up -->
        <q-btn
          label="Sign Up"
          unelevated
          class="w-full mb-4 text-white text-weight-medium transition-all duration-300 transform hover:scale-105"
          style="background: linear-gradient(90deg, #1e3a8a, #ffd700)"
          @click="signUp"
        />

        <!-- Link ke halaman login -->
        <div class="text-center">
          <q-btn
            flat
            color="yellow-9"
            label="Sudah punya akun? Login"
            class="text-weight-medium text-none"
            @click="goToLogin"
          />
        </div>
      </q-card>
    </q-page>
  </div>
</template>

<script>
export default {
  name: 'SignUpPage',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      isPwd: true,
      confirmPassword: '',
      isConfirmPwd: true,
    }
  },
  methods: {
    signUp() {
      if (!this.name || !this.email || !this.password || !this.confirmPassword) {
        this.$q.notify({
          color: 'red-7',
          textColor: 'white',
          message: 'Semua kolom wajib diisi!',
          icon: 'error',
        })
        return
      }

      if (this.password !== this.confirmPassword) {
        this.$q.notify({
          color: 'red-7',
          textColor: 'white',
          message: 'Password dan konfirmasi password tidak sama!',
          icon: 'error',
        })
        return
      }

      const users = JSON.parse(localStorage.getItem('users') || '[]')
      const existingUser = users.find((u) => u.email === this.email)

      if (existingUser) {
        this.$q.notify({
          color: 'orange-7',
          textColor: 'white',
          message: 'Email sudah terdaftar!',
          icon: 'warning',
        })
        return
      }

      users.push({ name: this.name, email: this.email, password: this.password })
      localStorage.setItem('users', JSON.stringify(users))

      this.$q.notify({
        color: 'green-7',
        textColor: 'white',
        message: 'Akun berhasil dibuat! Silakan login.',
        icon: 'check_circle',
      })

      setTimeout(() => {
        this.$router.push('/login')
      }, 1000)
    },
    goToLogin() {
      this.$router.push('/login')
    },
  },
}
</script>
