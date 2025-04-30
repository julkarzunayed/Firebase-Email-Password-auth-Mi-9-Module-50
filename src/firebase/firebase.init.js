// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVAbM4HFIP1E29Yzc5ed00iBI7a1kDqZc",
  authDomain: "fir-email-password-auth-ed55f.firebaseapp.com",
  projectId: "fir-email-password-auth-ed55f",
  storageBucket: "fir-email-password-auth-ed55f.firebasestorage.app",
  messagingSenderId: "734480667346",
  appId: "1:734480667346:web:1d06adff5c69ba7548d30b",
  measurementId: "G-MFLBX0JDWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);