const useStorage = useAuthStore();
export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return;
  let token = localStorage.getItem("token");
  if (token && to.path === from.path) {
    useStorage.token = token;
    useStorage.fetchUserProfile(token);
  } else if (token) {
    useStorage.token = token;
    // useStorage.fetchUserProfile(token);
  }
  if (!token) {
    const hash = window.location.hash;
    const tokenMatch = hash.match(/access_token=([^&]*)/);
    token = tokenMatch ? tokenMatch[1] : null;

    if (token) {
      console.log("Extracted token from URL:", token);
      localStorage.setItem("token", token);
      token = localStorage.getItem("token");
      useStorage.token = token;
      window.history.replaceState(null, "", window.location.pathname);
      window.location.reload();
      // if (from.path === "/signup" || from.path === to.path) {
      // useStorage.fetchUserProfile(token);/
      // }
      console.log("Token stored in local storage:");
    }
  }

  if (!token && !["/login", "/signup"].includes(to.path)) {
    console.log("No token, redirecting to login...");
    return navigateTo("/login");
  }

  if (token && ["/login", "/signup"].includes(to.path)) {
    console.log("User already authenticated, redirecting to home...");
    return navigateTo("/");
  }
});
