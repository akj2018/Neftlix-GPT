import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import axios from "axios";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Variable to store the auth instance
let auth = null;

// call initializeFirebase during the initialization phase of your application
export const initializeFirebase = async () => {
  // Check if Firebase apps have already been initialized
  if (!getApps().length) {
    // Fetch the Firebase config only if Firebase hasn't been initialized
    const configUrl = `${process.env.REACT_APP_BACKEND_URL}/api/getFirebaseConfig`;

    const response = await axios.get(configUrl);

    const firebaseConfig = response.data;

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize and get Firebase services only if they haven't been initialized
    if (!auth) {
      getAnalytics(app); // Initialize Firebase Analytics
      auth = getAuth(app); // Initialize and store Firebase Auth instance
    }
  }

  return auth;
};
