
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

  const token = localStorage.getItem("token");

  // Allow access to login and signup pages without authentication
  if (!token && !["/login", "/signup"].includes(to.path)) {
    console.log("No token, redirecting to login...");
    return navigateTo("/login");
  }

  // If user is already authenticated, prevent access to login and signup
  if (token && ["/login", "/signup"].includes(to.path)) {
    console.log("User already authenticated, redirecting to home...");
    return navigateTo("/");
  }
});
