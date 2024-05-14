// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpzsYYfCY8vaTJttXs0KE-GTiehdGL-zc",
    authDomain: "mydollar-tracker-62b3a.firebaseapp.com",
    projectId: "mydollar-tracker-62b3a",
    storageBucket: "mydollar-tracker-62b3a.appspot.com",
    messagingSenderId: "1009316835253",
    appId: "1:1009316835253:web:7f4d034369d7094a08f3fc",
    measurementId: "G-TE2ZWMZQYK"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
