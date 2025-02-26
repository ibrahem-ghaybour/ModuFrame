
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

  // Check if there's a token in localStorage
  let token = localStorage.getItem("token");

  // If no token in localStorage, check if the URL has an access_token (email verification case)
  if (!token) {
    const hash = window.location.hash;
    const tokenMatch = hash.match(/access_token=([^&]*)/);
    token = tokenMatch ? tokenMatch[1] : null;

    // If found, store it in localStorage
    if (token) {
      console.log("Extracted token from URL:", token);
      localStorage.setItem("token", token);

      // Clean the URL (remove #access_token=...)
      window.history.replaceState(null, "", window.location.pathname);
    }
  }

  // Allow access to login and signup pages if the user is NOT authenticated
  if (!token && !["/login", "/signup"].includes(to.path)) {
    console.log("No token, redirecting to login...");
    return navigateTo("/login");
  }

  // If the user is already authenticated, prevent access to login and signup
  if (token && ["/login", "/signup"].includes(to.path)) {
    console.log("User already authenticated, redirecting to home...");
    return navigateTo("/");
  }
});
