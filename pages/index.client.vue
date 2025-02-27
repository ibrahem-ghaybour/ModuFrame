<template>
  <div class="min-h-screen pt-16 z-40">
    <h1 class="text-4xl font-bold text-center text-white">
      home
      <br />
    </h1>
    <HeroWelcome />
  </div>
</template>

<script setup>
import HeroWelcome from "~/components/ui-components/hero-welcome/index.vue";
// const { fetchUserProfile } = useAuthStore();/
onMounted(() => {
  if (!localStorage.getItem("token")) {
    const hash = window.location.hash;
    const tokenMatch = hash.match(/access_token=([^&]*)/);
    const token = tokenMatch ? tokenMatch[1] : null;
    if (!token) return;
    localStorage.setItem("token", token);
  }
});
definePageMeta({
  middleware: "auth",
});
</script>

<style lang="scss" scoped></style>
