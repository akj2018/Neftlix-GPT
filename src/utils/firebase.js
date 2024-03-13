// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHA5jC7XiQf9lCyQaQxasMMUsSYZMXPpU",
  authDomain: "netflixgpt-d2ba6.firebaseapp.com",
  projectId: "netflixgpt-d2ba6",
  storageBucket: "netflixgpt-d2ba6.appspot.com",
  messagingSenderId: "201464968625",
  appId: "1:201464968625:web:7456cb52908100d1b73990",
  measurementId: "G-CGG1NFY3D7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
