<template>
  <div class="min-h-screen pt-16 fade-in z-40">
    <h1 class="text-4xl font-bold text-center text-white">
      home
      <br />
    </h1>
    <HeroWelcome />
  </div>
</template>

<script setup>
import { refreshAccessToken } from "~/composables/apiReuest";
import HeroWelcome from "~/components/ui-components/hero-welcome/index.vue";
// import { useRefreshToken } from "#imports";
// setCookie('accessToken', 'tlkjf', { maxAge: 3600 })
// const { fetchUserProfile } = useAuthStore();/
const token = useCookie("refToken");
onMounted(() => {
  console.log(token.value);
  // if (!localStorage.getItem("token")) {
  //   const hash = window.location.hash;
  //   const tokenMatch = hash.match(/access_token=([^&]*)/);
  //   const token = tokenMatch ? tokenMatch[1] : null;
  //   if (!token) return;
  //   localStorage.setItem("token", token);
  // }

  // refreshAccessToken(token.value);
});
definePageMeta({
  middleware: "auth",
});
</script>

<style lang="scss" scoped></style>
