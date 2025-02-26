import { defineStore } from "pinia";
import { useAuthorization } from "~/composables/authorization";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null as string | null,
    dataUser: null as any,
    loading: false as boolean,
  }),

  actions: {
     signup({ email, password }: { email: string; password: string }) {
      try {
        this.loading = true;
        console.log(
          "()=> ddddddddddddddddddddddddddddddddddddd",
          this.loading
        );
        const { authRegistration } = useAuthorization();
        authRegistration(
          "auth/v1/signup",
          {
            email,
            password,
          },
          null,
          (data) => {
            if (data.user) {
              console.log(
                "()=> ddddddddddddddddddddddddddddddddddddd",
                data.user
              );
              console.log("()=> uder",data.user);
              this.dataUser = { ...data.user };
              this.loading = false;
            }
          }
        );
        this.loading = false;
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },
  },
  // getters: {
  //   getLoading: (state) => state.loading,
  //   getToken: (state) => state.token,
  //   getDataUser: (state) => state.dataUser,
  // },
});
// : "ebrahimghaibour65@gmail.com",: "password123",
