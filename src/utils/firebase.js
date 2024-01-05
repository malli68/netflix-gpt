// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEUzGQeMRQptZNKGHH61d6a18B000FmRg",
  authDomain: "netflixgpt-2d8ef.firebaseapp.com",
  projectId: "netflixgpt-2d8ef",
  storageBucket: "netflixgpt-2d8ef.appspot.com",
  messagingSenderId: "357935260266",
  appId: "1:357935260266:web:8bf063c4bf26d6ac7da013",
  measurementId: "G-1CXKXQ71D2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth= getAuth();