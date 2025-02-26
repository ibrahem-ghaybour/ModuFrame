import { defineStore } from "pinia";
import { useAuthorization } from "~/composables/authorization";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null as string | null,
    dataUser: null as any,
  }),

  actions: {
     signup({ email, password }: { email: string; password: string }) {
      try {
        const { authRegistration } = useAuthorization();
        authRegistration(
          "auth/v1/signup",
          {
            email,
            password,
          },
          null,
          (data) => {
            console.log(data.token);
            this.token = data.token;
            this.dataUser = data.user;
          }
        );
      } catch (error) {
        console.log(error);
      }

      // this.token = tokenRef.value;
      // this.dataUser = await getDataUser(tokenRef.value);
    },
  },
});
// : "ebrahimghaibour65@gmail.com",: "password123",
