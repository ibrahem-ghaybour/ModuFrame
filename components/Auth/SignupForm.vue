<template>
  <div
    class="min-h-screen w-full flex max-lg:flex-col max-lg:gap-y-10 items-center justify-between bg-black p-12"
  >
    <GlopalPopup v-model:show="showPopup">
      <p class="text-black text-xl capitalize">
        {{ error }}
        {{ errorMessages }}
      </p>
    </GlopalPopup>
    <!-- Left side with Welcome message -->
    <div class="lg:flex-1 max-lg:w-full">
      <h1 class="text-6xl font-bold text-white mb-4">
        Join Us <span class="text-blue-500">!</span>
      </h1>
      <div class="inline-block border border-white/20 px-6 py-2 rounded-lg">
        <span class="text-white/80">Start your journey</span>
      </div>
    </div>

    <!-- Right side with signup form -->
    <div class="lg:w-[450px] w-full">
      <div class="bg-[#1a1a1a] rounded-3xl p-8 relative overflow-hidden">
        <!-- Purple gradient circles -->
        <div
          class="absolute -top-20 -right-20 w-40 h-40 bg-purple-700/30 rounded-full blur-3xl"
        ></div>
        <div
          class="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-700/30 rounded-full blur-3xl"
        ></div>

        <!-- Signup Form -->
        <div class="relative z-10">
          <h2 class="text-2xl font-semibold text-white mb-2">Sign Up</h2>
          <p class="text-gray-400 mb-8">Create your account</p>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <input
                v-model="fullName"
                min="3"
                max="20"
                type="text"
                required
                class="w-full bg-black/40 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500"
                placeholder="Full Name"
              />
            </div>
            <!-- Email Input -->
            <div>
              <input
                v-model="email"
                type="email"
                required
                class="w-full bg-black/40 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500"
                placeholder="Email address"
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

            <!-- Confirm Password Input -->
            <div>
              <input
                v-model="confirmPassword"
                type="password"
                required
                class="w-full bg-black/40 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500"
                placeholder="Confirm Password"
              />
            </div>

            <!-- Terms and Conditions -->
            <div class="flex items-center">
              <input
                type="checkbox"
                id="terms"
                required
                class="rounded bg-black/40 border-gray-700 text-purple-500 focus:ring-purple-500"
              />
              <label for="terms" class="ml-2 text-sm text-gray-400">
                I agree to the
                <a href="#" class="text-purple-500 hover:text-purple-400"
                  >Terms & Conditions</a
                >
              </label>
            </div>

            <!-- Signup Button -->
            <button
              type="submit"
              class="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Create Account
            </button>

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
                <span>
                  <FontAwesomeIcon :icon="faGoogle" class="text-[#297322]" />
                </span>
              </button>
              <button
                class="p-2 flex items-center justify-center bg-black/40 rounded-full border border-gray-700 hover:border-gray-500 w-8 h-8"
              >
                <FontAwesomeIcon :icon="faFacebook" class="text-blue-500" />
              </button>
              <button
                class="p-2 flex items-center justify-center bg-black/40 rounded-full border border-gray-700 hover:border-gray-500 w-8 h-8"
              >
                <span>
                  <FontAwesomeIcon :icon="faGithub" class="text-[#eeee]" />
                </span>
              </button>
            </div>

            <!-- Login link -->
            <div class="text-center text-sm text-gray-400">
              Already have an account?
              <NuxtLink
                to="/login"
                class="text-purple-500 hover:text-purple-400"
              >
                Login
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
import { storeToRefs } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebook,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const fullName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const authStore = useAuthStore();
const showPopup = ref(false);
const error = ref(null);
const { errorMessages } = storeToRefs(authStore);
const handleSubmit = () => {
  if (password.value !== confirmPassword.value) {
    error.value = "Passwords do not match";
    showPopup.value = true;
    return;
  }
  authStore.signup({
    email: email.value,
    password: password.value,
    data: {
      full_name: confirmPassword.value, // Add the user's name
    },
  });
};
watch(errorMessages, (newVal) => {
  if (newVal) {
    showPopup.value = true;
  }
});
</script>
