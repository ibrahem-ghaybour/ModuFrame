const URL_API_AUTH: string = getApiAuth();
const API_KEY: string = getApiKey();
export const apiRequest = async (
  endpoint: string,
  method = "POST",
  body: any | null,
  token: string | null
) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      apikey: `${API_KEY}`,
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
