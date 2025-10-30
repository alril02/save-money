<template>
  <q-page class="bg-gradient flex flex-center">
    <q-card class="q-pa-lg shadow-4 login-card">
      <h3 class="text-center text-blue-8 q-mb-md">Selamat Datang Kembali!</h3>
      <p class="text-center text-grey-7 q-mb-lg">
        Masuk untuk mengelola keuanganmu bersama
        <span class="text-yellow-9 text-bold">Safe Money 💰</span>
      </p>

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

      <!-- Checkbox Remember Me dan Lupa Password -->
      <div class="row items-center justify-between q-mb-md">
        <q-checkbox
          v-model="rememberMe"
          label="Remember me"
          dense
          color="yellow-9"
          class="q-pa-none"
        />
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
        class="full-width q-mb-md btn-gradient text-white text-weight-medium"
        @click="login"
      />

      <!-- Garis pemisah -->
      <div class="row items-center justify-center q-mb-md">
        <div class="line"></div>
        <span class="text-grey-7 q-mx-sm">atau login dengan</span>
        <div class="line"></div>
      </div>

      <!-- Ikon login sosial -->
      <div class="row justify-center q-gutter-md q-mb-md">
        <q-btn flat round size="lg" color="white" @click="loginGoogle">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            class="social-icon"
          />
        </q-btn>
        <q-btn flat round size="lg" color="white" @click="loginFacebook">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
            class="social-icon"
          />
        </q-btn>
        <q-btn flat round size="lg" color="white" @click="loginPhone">
          <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" class="social-icon" />
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
          message: `Selamat datang, ${user.name || 'User'}!`,
          icon: 'check_circle',
        })
        localStorage.setItem('currentUser', JSON.stringify(user))
        if (this.rememberMe) localStorage.setItem('rememberMe', 'true')
        else localStorage.removeItem('rememberMe')

        setTimeout(() => this.$router.push({ path: '/dashboard' }), 1000)
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

    loginPhone() {
      this.$q.notify({
        color: 'green-6',
        textColor: 'white',
        message: 'Login dengan nomor HP (OTP) belum diaktifkan.',
        icon: 'info',
      })
    },

    goToSignUp() {
      this.$router.push('/signup')
    },
  },
}
</script>

<style scoped>
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

.login-card {
  width: min(90%, 420px);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(255, 215, 0, 0.5);
  box-shadow: 0 6px 20px rgba(25, 50, 120, 0.4);
  padding: clamp(16px, 3vw, 24px);
}

/* Garis pemisah di tengah */
.line {
  flex: 1;
  height: 1px;
  background-color: rgba(30, 58, 138, 0.3);
}

/* Ikon sosial */
.social-icon {
  width: 28px;
  height: 28px;
  object-fit: contain;
  transition: transform 0.2s ease;
}
.social-icon:hover {
  transform: scale(1.1);
}

.btn-gradient {
  background: linear-gradient(90deg, #1e3a8a, #ffd700);
  border: none;
  transition: 0.3s ease;
}
.btn-gradient:hover {
  background: linear-gradient(90deg, #002d72, #ffcc00);
  transform: scale(1.03);
}

.gold-input .q-field__control {
  background: transparent !important;
  border: 2px solid #ffd700 !important;
  border-radius: 10px;
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
</style>
