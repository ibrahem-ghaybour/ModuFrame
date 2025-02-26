<template>
  <div class="bg-[url('images/bg-loginandsignup.png')] bg-cover bg-center pt-16">
    <LoginForm />
  </div>
</template>

<script setup>
import LoginForm from '~/components/Auth/LoginForm.vue'
definePageMeta({
  middleware: "auth",
});
</script>

<style lang="scss" scoped></style>
