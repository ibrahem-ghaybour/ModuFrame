const getHeaders = () => {
  const API_KEY: string = getApiKey();
  const headers = {
    "Content-Type": "application/json",
    apikey: API_KEY,
  };
  return headers;
};
export const useApiRequest = async (
  endpoint: string,
  method = "POST",
  body: any | null,
  token: string | null
) => {
  try {
    const URL_API_AUTH: string = getApiAuth();
    const headers = {
      ...getHeaders(),
      ...(token && { Authorization: `Bearer ${token}` }),
    };

    const response = await fetch(`${URL_API_AUTH}/${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.msg || "Request failed");
    }

    return { success: true, data };
  } catch (error) {
    return { success: false, error: error };
  }
};
export async function refreshAccessToken(refreshToken: string) {
  const { setToken, removeToken } = useRefreshToken();
  try {
    const URL_API_AUTH: string = getApiAuth();
    const headers = getHeaders();
    const response = await fetch(
      `${URL_API_AUTH}/auth/v1/token?grant_type=refresh_token`,
      {
        method: "POST",
        // credentials: "include",
        headers,
        body: JSON.stringify({ refresh_token: refreshToken }),
      }
    );

    if (!response.ok) {
      removeToken();
      throw new Error("Failed to refresh token");
    }

    const { refresh_token } = await response.json();
    setToken(refresh_token);
  } catch (error) {
    console.error("Error refreshing access token:", error);
    removeToken();
    return null;
  }
}
