<template>
  <client-only>
    <div>
      <h1 class="text-4xl font-bold text-center">
        home
        <br />
       
      </h1>
    </div>
  </client-only>
</template>

<script setup>
import { useAuthorization } from "~/composables/authorization";
const { login } = useAuthorization();
const authStore = useAuthStore();
onMounted(() => {
  const token = useState("token", () => null);
  if (!token.value) {
    navigateTo("/login");
  }
  console.log(authStore.token);
});
</script>

<style lang="scss" scoped></style>
