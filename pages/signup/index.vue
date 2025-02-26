<template>
  <div class="bg-[url('images/bg-loginandsignup.png')] bg-cover bg-center pt-16">
    <SignupForm />
  </div>
</template>

<script setup>
import SignupForm from "~/components/Auth/SignupForm.vue";
definePageMeta({
  middleware: "auth",
});
</script>

<style lang="scss" scoped></style>
