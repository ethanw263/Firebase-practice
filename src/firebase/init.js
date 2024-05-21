// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCUqN8sqOffx6G_aV1ZevHsk5tHViiye4",
  authDomain: "fir-practice-69087.firebaseapp.com",
  projectId: "fir-practice-69087",
  storageBucket: "fir-practice-69087.appspot.com",
  messagingSenderId: "906711258009",
  appId: "1:906711258009:web:b13ddb4aec5f43de1f7908",
  measurementId: "G-HEM9X8K9X2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);