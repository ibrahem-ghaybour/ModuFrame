<script setup>
// import { ref } from "vue";
// import { useRouter } from "vue-router";

// const router = useRouter();
// const credentials = ref({ email: "", password: "" });
// const token = ref(null);
// const errorMessage = ref(null);

// const login = async () => {
//   try {
//     const { data } = await useFetch("https://reqres.in/api/login", {
//       method: "POST",
//       body: credentials.value,
//     });

//     if (data.value?.token) {
//       token.value = data.value.token;
//       localStorage.setItem("authToken", token.value); // Store token
//       router.push("/home"); // Redirect to protected page
//     }
//   } catch (error) {
//     errorMessage.value = "Invalid login credentials";
//   }
// };
</script>

<template>
  <div>
    <!-- <h2>Login</h2>
    <input v-model="credentials.email" type="email" placeholder="Email" />
    <input
      v-model="credentials.password"
      type="password"
      placeholder="Password"
    />
    <button @click="login">Login</button>
    <p v-if="errorMessage">{{ errorMessage }}</p> -->
    <NuxtPage />
  </div>
</template>
