export const useAuthorization = () => {
  const apiRequest = useApiRequest;

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
  // const useRefreshToken = () => {
  //   let token: Ref<string | null> | undefined;
  //   if (token)
  //     token = useCookie("refToken", {
  //       maxAge: 60 * 60 * 24 * 7, // 7 days
  //       secure: true,
  //       sameSite: "strict",
  //     });
  //   const setToken = (refToken: string) => {
  //     token!.value = refToken;
  //   };
  //   const removeToken = () => {
  //     token!.value = null;
  //   };

  //   return { setToken, removeToken };
  // };
  return { authRegistration, authGet };
  // const refrechAccessToken = async () => {
  //   const token = useCookie("refToken");
  //   if (!token.value) return;
  //   try {
  //     await authGet(
  //       "/auth/v1/token",
  //       token.value,
  //       ({ data, errorMessage }) => {}
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
};
