<template>
  <div>
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
