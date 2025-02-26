<template>
  <div
    class="min-h-screen w-full flex max-lg:flex-col max-lg:gap-y-10 items-center justify-between bg-black p-12"
  >
    <!-- Left side with Welcome message -->
    <GlopalPopup v-model:show="showPopup">
      <p class="text-black text-xl capitalize">
        {{ errorMessages }}
      </p>
    </GlopalPopup>
    <div class="lg:flex-1">
      <h1 class="text-6xl font-bold text-white mb-4">
        Welcome Back <span class="text-blue-500">!</span>
      </h1>
      <div class="inline-block border border-white/20 px-6 py-2 rounded-lg">
        <span class="text-white/80">Skip the lag ?</span>
      </div>
    </div>

    <!-- Right side with login form -->
    <div class="lg:w-[450px] w-full">
      <div class="bg-[#1a1a1a] rounded-3xl p-8 relative overflow-hidden">
        <!-- Purple gradient circles -->
        <div
          class="absolute -top-20 -right-20 w-40 h-40 bg-purple-700/30 rounded-full blur-3xl"
        ></div>
        <div
          class="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-700/30 rounded-full blur-3xl"
        ></div>
        <!-- Login Form -->
        <div class="relative z-10">
          <h2 class="text-2xl font-semibold text-white mb-2">Login</h2>
          <p class="text-gray-400 mb-8">Glad you're back!</p>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Username Input -->
            <div>
              <input
                v-model="email"
                type="email"
                required
                class="w-full bg-black/40 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500"
                placeholder="Username"
              />
            </div>

            <!-- Password Input -->
            <div>
              <input
                v-model="password"
                type="password"
                required
                class="w-full bg-black/40 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500"
                placeholder="Password"
              />
            </div>

            <!-- Remember me -->
            <div class="flex items-center">
              <input
                type="checkbox"
                id="remember"
                class="rounded bg-black/40 border-gray-700 text-purple-500 focus:ring-purple-500"
              />
              <label for="remember" class="ml-2 text-sm text-gray-400"
                >Remember me</label
              >
            </div>

            <!-- Login Button -->
            <button
              type="submit"
              class="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <span v-if="loading">
                <FontAwesomeIcon :icon="faSpinner" class="animate-spin" />
              </span>
              <span v-else> Login </span>
            </button>

            <!-- Forgot password -->
            <div class="text-center">
              <a href="#" class="text-sm text-gray-400 hover:text-white">
                Forgot password?
              </a>
            </div>

            <!-- Social Login Divider -->
            <div class="flex items-center justify-center space-x-4 my-6">
              <div class="h-[1px] bg-gray-700 flex-1"></div>
              <span class="text-gray-400">Or</span>
              <div class="h-[1px] bg-gray-700 flex-1"></div>
            </div>

            <!-- Social Login Buttons -->
            <div class="flex justify-center space-x-4">
              <button
                class="p-2 flex items-center justify-center bg-black/40 rounded-full border border-gray-700 hover:border-gray-500 w-8 h-8"
              >
                <!-- <img src="/google-icon.svg" alt="Google" class="w-6 h-6" /> -->
                <!-- <GoogleIcon class="!text-[#297322]" /> -->
                <span>
                  <FontAwesomeIcon :icon="faGoogle" class="text-[#297322]" />
                </span>
              </button>
              <button
                class="p-2 flex items-center justify-center bg-black/40 rounded-full border border-gray-700 hover:border-gray-500 w-8 h-8"
              >
                <!-- <img src="/facebook-icon.svg" alt="Facebook" class="w-6 h-6" /> -->
                <FontAwesomeIcon :icon="faFacebook" class="text-blue-500" />
              </button>
              <button
                class="p-2 flex items-center justify-center bg-black/40 rounded-full border border-gray-700 hover:border-gray-500 w-8 h-8"
              >
                <!-- <img src="/github-icon.svg" alt="GitHub" class="w-6 h-6" /> -->
                <span>
                  <FontAwesomeIcon :icon="faGithub" class="text-[#eeee]" />
                </span>
              </button>
            </div>

            <!-- Sign up link -->
            <div class="text-center text-sm text-gray-400">
              Don't have an account?
              <NuxtLink
                to="/signup"
                class="text-purple-500 hover:text-purple-400"
              >
                Sign up
              </NuxtLink>
            </div>
          </form>

          <!-- Footer Links -->
          <div class="flex justify-center space-x-4 mt-8 text-xs text-gray-500">
            <a href="#" class="hover:text-gray-400">Terms & Conditions</a>
            <a href="#" class="hover:text-gray-400">Support</a>
            <a href="#" class="hover:text-gray-400">Customer Care</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebook,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { ref } from "vue";
import { storeToRefs } from "pinia";

const email = ref("");
const password = ref("");
const authStore = useAuthStore();
const { loading, dataUser, errorMessages } = storeToRefs(authStore);
const showPopup = ref(false);
const handleSubmit = async () => {
  authStore.login({
    email: email.value,
    password: password.value,
  });
};
watch(errorMessages, (newVal) => {
  if (newVal) {
    showPopup.value = true;
  }
});
watch(showPopup, (newVal) => {
  if (!newVal) {
    errorMessages.value = null;
  }
});
</script>
