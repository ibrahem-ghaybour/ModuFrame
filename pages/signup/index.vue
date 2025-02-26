<template>
    <div>
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
  