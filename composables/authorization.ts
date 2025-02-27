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

  return { authRegistration, authGet };
};
