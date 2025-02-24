import { initializeApp } from "firebase/app";
// import { useUserStore } from "@/store/dataUser.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import store from "@/store/index.js";
import { getDataProfile } from "./database-user-repository.js";
// const { config } = require("./config.js");
// initializeApp(config);
const auth = getAuth();

export default {
  async createUser(email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      return true;
    } catch (err) {
      return err.masseg;
    }
  },

  async signOutUser() {
    try {
      await signOut(auth);
      return "You are logged out";
    } catch (err) {
      return err.masseg;
    }
  },

  async signInUser(email, password) {
    try {
      const aa = await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (err) {
      return err.masseg;
    }
  },
};

export async function checkUser(user) {
  try {
    store.state.profile = await getDataProfile(user.email);
  } catch (err) {
    console.error(err);
  }
}
export function onAuth(colback){
  onAuthStateChanged(auth, (user) => {
    if (user) {
      colback(user)
    }
  });
}