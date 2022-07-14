// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCem_x8PqcDJdY_I9o2nNyRf7SD2uSuCA",
  authDomain: "personalblog-23788.firebaseapp.com",
  projectId: "personalblog-23788",
  storageBucket: "personalblog-23788.appspot.com",
  messagingSenderId: "1086359917487",
  appId: "1:1086359917487:web:ed9a17661c1810453cd55a",
  measurementId: "G-5C6S33ZGQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);