export const useRefreshToken = () => {
  const token = useCookie<string | null>("refToken", {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    secure: true,
    sameSite: "strict",
  });

  const setToken = (newToken: string) => {
    token.value = newToken;
  };

  const removeToken = () => {
    token.value = null;
  };

  return { token, setToken, removeToken };
};
