// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID
// };

// export const firebaseApp = initializeApp(firebaseConfig);
import { initializeApp } from "firebase/app";
import { useRuntimeConfig } from "#imports";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey,
    authDomain: config.public.firebaseAuthDomain,
    projectId: config.public.firebaseProjectId,
    storageBucket: config.public.firebaseStorageBucket,
    messagingSenderId: config.public.firebaseMessagingSenderId,
    appId: config.public.firebaseAppId,
    measurementId: config.public.firebaseMeasurementId,
  };

  const firebaseApp = initializeApp(firebaseConfig);
  return {
    provide: {
      firebase: firebaseApp,
    },
  };
});
