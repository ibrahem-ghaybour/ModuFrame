export const useAuthorization = () => {
  const URL_API_AUTH: string = getApiAuth();
  const API_KEY: string = getApiKey();
  interface LoginCredentials {
    email: string;
    password: string;
  }

  interface LoginResponse {
    token?: string;
    message?: string;
  }
  const apiRequest = async (
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
  const authRegistration = async (
    request: string,
    obj: any | null,
    token: string | null,
    callback: (data: any) => void
  ) => {
    const response = await apiRequest(request, "POST", obj, token);

    if (!response.success) {
      callback({ errorMessage: response.error });
      return;
    }

    callback({ data: response.data, errorMessage: null });
  };
  const authGet = async (
    request: string,
    token: string | null,
    callback: (data: any) => void
  ) => {
    const response = await apiRequest(request, "GET", null, token);

    if (!response.success) {
      callback({ errorMessage: response.error });
      return;
    }

    callback({ data: response.data, errorMessage: null });
  };
  // const authRegistration = async (
  //   request: string,
  //   obj: any,
  //   token: string | null,
  //   callback: (data: any) => void
  // ) => {
  //   try {
  //     const response = await fetch(`${URL_API_AUTH}/${request}`, {
  //       method: "POST",
  //       headers: {
  //         apikey: `${API_KEY}`,
  //         "Content-Type": "application/json",
  //         ...(token && { Authorization: `Bearer ${token}` }),
  //       },
  //       body: JSON.stringify(obj),
  //     });
  //     const data = await response.json();
  //     if (!response.ok) {
  //       callback({ errorMessage: data?.msg });
  //       return;
  //     }
  //     callback({ data, errorMessage: null });
  //   } catch (error) {
  //     console.log(error);
  //     callback(error);
  //   }
  // };
  const login = async ({ email, password }: LoginCredentials) => {
    const errorMessage = ref<string | null>(null);
    const tokenRef = ref<LoginResponse | null>(null);

    try {
      const response = await useFetch<LoginResponse>(`${URL_API_AUTH}/login`, {
        method: "POST",
        body: { email, password },
      });
      console.log(response);
      if (response.data.value?.token) {
        tokenRef.value = response.data.value.token; // Use state instead of localStorage
      } else {
        errorMessage.value =
          response.data.value?.message || "Invalid login credentials";
      }

      tokenRef.value = response.data.value;
    } catch (error) {
      errorMessage.value = "An error occurred. Please try again.";
    }

    return { tokenRef, errorMessage };
  };
  // const getDataUser = async (token: string) => {
  //   const response = await useFetch(`${URL_API_AUTH}/users`, {
  //     headers: {
  //       method: "GET",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   console.log(response.data.value);
  // };
  const getDataUser = async (token: string) => {
    try {
      console.log(token, "token");
      const response = await useFetch(`${URL_API_AUTH}/users`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.value;
    } catch (error) {
      console.log(error);
    }
  };
  const newUser = async () => {
    try {
      // const { data, error } = await
      authRegistration(
        "auth/v1/signup",
        {
          email: "ebrahimghaibour65@gmail.com",
          password: "password123",
        },
        null,
        (data) => {
          console.log(data);
        }
      );
      // if (error) {
      //   console.log(error);
      //   return error;
      // }
      // console.log(data);
      // return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  return { authRegistration, login, authGet, newUser };
};
// try {
//   const { data, error } = await useFetch(`${URL_API_AUTH}/auth/v1/signup`, {
//     method: "POST",
//     headers: {
//       apikey: `${API_KEY}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email: "ebrahimghaibour65@gmail.com", // Use a valid email format
//       password: "password123", // Ensure password meets requirements
//     }),
//   });
//   if (error.value) {
//     console.log(error.value);
//     return error.value;
//   }
//   console.log(data.value); // { id, email, created_at }
//   return data.value;
// } catch (error) {
//   console.log(error);
//   console.log(error);
//   return error;
// }
