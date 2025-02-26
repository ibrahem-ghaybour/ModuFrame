// export default defineNuxtRouteMiddleware((to, from) => {
//   console.log("Auth Middleware Running...");

//   if (process.server) return;

//   const token = localStorage.getItem("token");

//   if (!token && to.path !== "/login") {
//     console.log("No token, redirecting to login...");
//     return navigateTo("/login");
//   }

//   if (token && to.path === "/login") {
//     console.log("User already authenticated, redirecting to home...");
//     return navigateTo("/");
//   }
// });
export default defineNuxtRouteMiddleware((to, from) => {
  console.log("Auth Middleware Running...");

  if (process.server) return;

  let token = localStorage.getItem("token");

  if (!token) {
    const hash = window.location.hash;
    const tokenMatch = hash.match(/access_token=([^&]*)/);
    token = tokenMatch ? tokenMatch[1] : null;

    if (token) {
      console.log("Extracted token from URL:", token);
      localStorage.setItem("token", token);

      window.history.replaceState(null, "", window.location.pathname);
      window.location.reload()
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
