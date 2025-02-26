export const getApiUrl = () => {
  return useRuntimeConfig().public.apiBase; // Get API URL from runtime config
};

export const getApiAuth = () => {
  return useRuntimeConfig().public.apiAuth; // Get API URL from runtime config
};

export const getApiKey = () => {
  return useRuntimeConfig().public.apiKey; // Get API URL from runtime config
};
