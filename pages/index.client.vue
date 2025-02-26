<template>
  <div class="min-h-screen pt-16">
    <h1 class="text-4xl font-bold text-center">
      home
      <br />
    </h1>
  </div>
</template>

<script setup>
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
