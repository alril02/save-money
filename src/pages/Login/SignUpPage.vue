<template>
  <q-page class="bg-gradient flex flex-center">
    <div class="signup-container" ref="container">
      <!-- Kartu Kiri -->
      <div class="signup-card left-card">
        <h3 class="text-center text-blue-8 q-mb-md">Welcome Back!</h3>
        <p class="text-center text-grey-7 q-mb-lg">
          To keep connected with us please login with your personal info
        </p>

        <q-btn
          label="Sign In"
          unelevated
          class="full-width btn-gradient text-white text-weight-medium"
          @click="focusToRightCard"
        />
      </div>

      <!-- Kartu Kanan -->
      <div class="signup-card right-card" ref="rightCard">
        <h3 class="text-center text-blue-8 q-mb-md">Buat Akun Baru</h3>
        <p class="text-center text-grey-7 q-mb-lg">
          Mulai kelola keuanganmu dengan
          <span class="text-yellow-9 text-bold">Safe Money 💰</span>
        </p>

        <q-input v-model="name" label="Nama Lengkap" outlined dense class="q-mb-md gold-input" />

        <q-input
          v-model="email"
          label="Email"
          type="email"
          outlined
          dense
          class="q-mb-md gold-input"
        />

        <!-- Password dengan toggle show/hide -->
        <q-input
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          outlined
          dense
          class="q-mb-md gold-input"
        >
          <template v-slot:append>
            <q-icon
              :name="showPassword ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="showPassword = !showPassword"
            />
          </template>
        </q-input>

        <!-- Konfirmasi Password dengan toggle show/hide -->
        <q-input
          v-model="confirmPassword"
          :type="showConfirm ? 'text' : 'password'"
          label="Konfirmasi Password"
          outlined
          dense
          class="q-mb-md gold-input"
        >
          <template v-slot:append>
            <q-icon
              :name="showConfirm ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="showConfirm = !showConfirm"
            />
          </template>
        </q-input>

        <q-btn
          label="Sign Up"
          unelevated
          class="full-width q-mb-sm btn-gradient text-white text-weight-medium"
          @click="signUp"
        />

        <div class="text-center">
          <q-btn flat color="yellow-9" label="Sudah punya akun? Login" @click="goToLogin" />
        </div>
      </div>
    </div>
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
      showPassword: false,
      showConfirm: false,
      isRegistered: false, // ✅ untuk mendeteksi kalau user sudah terdaftar
    }
  },
  methods: {
    focusToRightCard() {
      this.$q.notify({
        color: 'blue-7',
        textColor: 'white',
        message: 'Berpindah ke formulir pembuatan akun...',
        icon: 'east',
      })
      this.$refs.rightCard.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
    },

    focusToLeftCard() {
      // ✅ Kalau sudah pernah daftar → langsung ke halaman login
      if (this.isRegistered) {
        this.$router.push('/login')
      } else {
        this.$q.notify({
          color: 'red-7',
          textColor: 'white',
          message: 'Silakan buat akun terlebih dahulu sebelum login!',
          icon: 'error',
        })
      }
    },

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
        this.isRegistered = true // ✅ tandai user sudah pernah daftar
        this.$q.notify({
          color: 'orange-7',
          textColor: 'white',
          message: 'Email sudah terdaftar! Silakan login.',
          icon: 'warning',
        })
        return
      }

      users.push({ name: this.name, email: this.email, password: this.password })
      localStorage.setItem('users', JSON.stringify(users))
      this.isRegistered = true // ✅ tandai bahwa user baru ini sudah terdaftar

      this.$q.notify({
        color: 'green-7',
        textColor: 'white',
        message: 'Akun berhasil dibuat! Silakan login.',
        icon: 'check_circle',
      })

      // Pindah ke halaman login (jika sudah buat akun)
    goToLogin() {
      if (this.allowLoginRedirect) {
        this.$router.push('/login')
      } else {
        this.$q.notify({
          color: 'blue-7',
          textColor: 'white',
          message: 'Silakan buat akun terlebih dahulu sebelum login.',
          icon: 'info',
        })
      }
    }
  }
} 
}

</script>

<style scoped>
/* Tidak ada perubahan sama sekali pada style aslimu */
.bg-gradient {
  background:
    linear-gradient(135deg, rgba(25, 50, 120, 0.9), rgba(230, 180, 80, 0.6)),
    url('https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.signup-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  max-width: 900px;
  align-items: stretch;
  gap: 0;
}

.signup-card {
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(255, 215, 0, 0.5);
  box-shadow: 0 6px 20px rgba(25, 50, 120, 0.4);
  padding: clamp(16px, 3vw, 24px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.4s ease;
}

.left-card {
  border-radius: 18px 0 0 18px;
  background: rgba(255, 255, 255, 0.85);
  border-right: none;
}
.right-card {
  border-radius: 0 18px 18px 0;
  background: rgba(255, 255, 255, 0.95);
  border-left: none;
}

.btn-gradient {
  background: linear-gradient(90deg, #1e3a8a, #ffd700);
  border: none;
  transition: all 0.3s ease;
}
.btn-gradient:hover {
  background: linear-gradient(90deg, #002d72, #ffcc00);
  transform: scale(1.03);
}

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

h3 {
  font-size: clamp(1.2rem, 2vw, 1.6rem);
}
p {
  font-size: clamp(0.9rem, 1.5vw, 1rem);
}

@media (max-width: 768px) {
  .signup-container {
    grid-template-columns: 1fr 1fr;
    width: 95%;
  }

  .signup-card {
    padding: 12px;
  }

  h3 {
    font-size: 1.1rem;
  }
  p {
    font-size: 0.85rem;
  }
}

@media (max-width: 500px) {
  .signup-container {
    width: 100%;
  }

  .signup-card {
    padding: 8px;
    border-width: 1px;
  }

  h3 {
    font-size: 1rem;
  }
  p {
    font-size: 0.8rem;
  }

  .q-input,
  .q-btn {
    font-size: 0.8rem;
  }
}
</style>
