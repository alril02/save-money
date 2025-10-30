<template>
  <q-page class="bg-gradient flex flex-center">
    <q-card class="q-pa-lg shadow-4 signup-card">
      <h3 class="text-center text-blue-8 q-mb-md">Buat Akun Baru</h3>
      <p class="text-center text-grey-7 q-mb-lg">
        Mulai kelola keuanganmu dengan
        <span class="text-yellow-9 text-bold">Safe Money 💰</span>
      </p>

      <!-- Input Nama -->
      <q-input v-model="name" label="Nama Lengkap" outlined dense class="q-mb-md gold-input" />

      <!-- Input Email -->
      <q-input
        v-model="email"
        label="Email"
        type="email"
        outlined
        dense
        class="q-mb-md gold-input"
      />

      <!-- Input Password -->
      <q-input
        v-model="password"
        label="Password"
        type="password"
        outlined
        dense
        class="q-mb-md gold-input"
      />

      <!-- Input Konfirmasi Password -->
      <q-input
        v-model="confirmPassword"
        label="Konfirmasi Password"
        type="password"
        outlined
        dense
        class="q-mb-md gold-input"
      />

      <!-- Tombol Sign Up -->
      <q-btn
        label="Sign Up"
        unelevated
        class="full-width q-mb-sm btn-gradient text-white text-weight-medium"
        @click="signUp"
      />

      <!-- Link ke halaman login -->
      <div class="text-center">
        <q-btn flat color="yellow-9" label="Sudah punya akun? Login" @click="goToLogin" />
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'SignUpPage',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  methods: {
    signUp() {
      // Validasi kolom wajib
      if (!this.name || !this.email || !this.password || !this.confirmPassword) {
        this.$q.notify({
          color: 'red-7',
          textColor: 'white',
          message: 'Semua kolom wajib diisi!',
          icon: 'error',
        })
        return
      }

      // Validasi kecocokan password
      if (this.password !== this.confirmPassword) {
        this.$q.notify({
          color: 'red-7',
          textColor: 'white',
          message: 'Password dan konfirmasi password tidak sama!',
          icon: 'error',
        })
        return
      }

      // Cek apakah email sudah digunakan
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

      // Simpan user baru
      users.push({ name: this.name, email: this.email, password: this.password })
      localStorage.setItem('users', JSON.stringify(users))

      this.$q.notify({
        color: 'green-7',
        textColor: 'white',
        message: 'Akun berhasil dibuat! Silakan login.',
        icon: 'check_circle',
      })

      // Arahkan ke halaman login
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

<style scoped>
/* Background */
.bg-gradient {
  background:
    linear-gradient(135deg, rgba(25, 50, 120, 0.9), rgba(230, 180, 80, 0.6)),
    url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Kartu signup */
.signup-card {
  width: min(90%, 420px);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(255, 215, 0, 0.5);
  box-shadow: 0 6px 20px rgba(25, 50, 120, 0.4);
}

/* Tombol gradient */
.btn-gradient {
  background: linear-gradient(90deg, #1e3a8a, #ffd700);
  border: none;
  transition: all 0.3s ease;
}
.btn-gradient:hover {
  background: linear-gradient(90deg, #002d72, #ffcc00);
  transform: scale(1.03);
}

/* Input garis emas */
.gold-input .q-field__control {
  background: transparent !important;
  border: 2px solid #ffd700 !important;
  border-radius: 10px;
  transition: all 0.3s ease;
}
.gold-input.q-field--focused .q-field__control {
  border-color: #1e3a8a !important;
  box-shadow: 0 0 6px rgba(30, 58, 138, 0.4);
}
.gold-input .q-field__label {
  color: #1e3a8a !important;
  font-weight: 500;
}

/* Responsif */
h3 {
  font-size: clamp(1.2rem, 2vw, 1.6rem);
}
p {
  font-size: clamp(0.9rem, 1.5vw, 1rem);
}
.signup-card {
  padding: clamp(16px, 3vw, 24px);
}
</style>
