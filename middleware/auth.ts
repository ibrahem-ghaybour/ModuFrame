const useStorage = useAuthStore();

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return;

  let token = localStorage.getItem("token");

  if (token) {
    useStorage.token = token;
    if (to.path === from.path) {
      useStorage.fetchUserProfile(token);
    }
  } else {
    const tokenMatch = window.location.hash.match(/access_token=([^&]*)/);
    if (tokenMatch) {
      token = tokenMatch[1];
      localStorage.setItem("token", token);
      useStorage.token = token;

      window.history.replaceState(null, "", window.location.pathname);
    }
  }

  if (!useStorage.token && !["/login", "/signup"].includes(to.path)) {
    console.log("No token, redirecting to login...");
    return navigateTo("/login");
  }

  if (useStorage.token && ["/login", "/signup"].includes(to.path)) {
    console.log("User already authenticated, redirecting to home...");
    return navigateTo("/");
  }
});
