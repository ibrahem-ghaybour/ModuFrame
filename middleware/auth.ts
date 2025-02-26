
export default defineNuxtRouteMiddleware((to, from) => {
  console.log("Auth Middleware Running...");

  if (process.server) return;

  const token = localStorage.getItem("token");

  if (!token && to.path !== "/login") {
    console.log("No token, redirecting to login...");
    return navigateTo("/login");
  }

  if (token && to.path === "/login") {
    console.log("User already authenticated, redirecting to home...");
    return navigateTo("/");
  }
});
