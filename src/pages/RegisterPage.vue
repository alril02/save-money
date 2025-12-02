<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-[900px] bg-white rounded-2xl shadow-xl flex overflow-hidden">

      <!-- PANEL KIRI -->
      <div
        class="w-1/2 bg-teal-500 flex flex-col justify-center items-center text-white p-10 relative"
      >
        <!-- LOGO -->
        <div class="absolute top-8 left-8 flex items-center space-x-2">
          <q-icon name="apps" size="28px" />
          <span class="font-semibold text-lg">Diprella</span>
        </div>

        <h2 class="text-3xl font-bold mb-2 mt-8">Welcome Back!</h2>
        <p class="text-center text-sm text-white/90 mb-8 px-6">
          To keep connected with us please login with your personal info
        </p>

        <q-btn
          outline
          color="white"
          label="SIGN IN"
          class="rounded-full w-40 font-semibold"
          @click="goToLogin"
        />

        <!-- Dekorasi -->
        <div class="absolute bottom-0 left-0 w-40 h-40 bg-yellow-400/70 rounded-full -translate-x-12 translate-y-16"></div>
        <div class="absolute top-20 right-20 w-8 h-8 bg-white/20 rotate-45"></div>
      </div>

      <!-- PANEL KANAN -->
      <div class="w-1/2 p-12 flex flex-col justify-center">
        <!-- Judul -->
        <h2 class="text-3xl font-bold text-teal-600 mb-4 text-center">
          Create Account
        </h2>

       <!-- 🌐 Ikon Sosial Media -->
<div class="flex justify-center space-x-4 mb-6">
  <button
    class="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-black font-semibold text-sm hover:bg-gray-100 transition"
  >
    f
  </button>
  <button
    class="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-black font-semibold text-sm hover:bg-gray-100 transition"
  >
    G+
  </button>
  <button
    class="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-black font-semibold text-sm hover:bg-gray-100 transition"
  >
    in
  </button>
</div>

        <p class="text-gray-400 text-sm text-center mb-6">
          or use your email for registration
        </p>

        <!-- FORM SIGNUP -->
        <q-form @submit.prevent="onSignUp" class="space-y-4">
          <q-input
            v-model="form.name"
            outlined
            dense
            label="Name"
            class="mb-2"
            :prefix="icons.user"
            required
          />
          <q-input
            v-model="form.email"
            outlined
            dense
            label="Email"
            type="email"
            class="mb-2"
            :prefix="icons.email"
            required
          />
          <q-input
            v-model="form.password"
            outlined
            dense
            label="Password"
            type="password"
            :prefix="icons.lock"
            required
          />

          <q-btn
            label="SIGN UP"
            color="teal"
            class="w-full rounded-full font-semibold mt-4"
            type="submit"
          />
        </q-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

const router = useRouter();
const $q = useQuasar();

const form = ref({
  name: "",
  email: "",
  password: "",
});

const icons = {
  user: "mdi-account-outline",
  email: "mdi-email-outline",
  lock: "mdi-lock-outline",
};

const onSignUp = () => {
  if (!form.value.name || !form.value.email || !form.value.password) {
    $q.notify({
      type: "negative",
      message: "Please fill in all fields!",
    });
    return;
  }

  console.log("Registered:", form.value);
  $q.notify({
    type: "positive",
    message: "Account created successfully!",
  });
};

const goToLogin = () => {
  router.push("/login");
};
</script>