// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQWAmGc8DjSt-XmL1wrXTAml5jLnHN1tI",
  authDomain: "netflixgpt-e0421.firebaseapp.com",
  projectId: "netflixgpt-e0421",
  storageBucket: "netflixgpt-e0421.firebasestorage.app",
  messagingSenderId: "562847174607",
  appId: "1:562847174607:web:84659827d28fd3ad59ccba",
  measurementId: "G-2G8B9JWSMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);