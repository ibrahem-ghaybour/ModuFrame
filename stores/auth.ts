import { defineStore } from "pinia";
import { useAuthorization } from "~/composables/authorization";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null as string | null,
    dataUser: null as any,
    loading: false as boolean,
    errorMessages: null as string | null,
  }),

  actions: {
    async signup(obj: any) {
      try {
        this.loading = true;
        const { authRegistration } = useAuthorization();
        await authRegistration(
          "auth/v1/signup",
          obj,
          null,
          ({ data, errorMessage }) => {
            if (errorMessage) {
              this.errorMessages = errorMessage;
              console.log(this.errorMessages);

              return;
            }
            this.dataUser = data;
            this.loading = false;
          }
        );
        this.loading = false;
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },
    async login(obj: any) {
      try {
        this.loading = true;
        const { authRegistration } = useAuthorization();
        await authRegistration(
          "auth/v1/token?grant_type=password",
          obj,
          null,
          ({ data, errorMessage }) => {
            if (errorMessage) {
              this.errorMessages = errorMessage;
              console.log(this.errorMessages);

              return;
            }
            this.dataUser = data;
            console.log(data.access_token);
            localStorage.setItem("token", data.access_token);
            this.loading = false;
            navigateTo("/");
          }
        );
        this.loading = false;
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },
  },
  getters: {
    getLoading: (state) => state.loading,
    getToken: (state) => state.token,
    getDataUser: (state) => state.dataUser,
  },
});
// : "ebrahimghaibour65@gmail.com",: "password123",
