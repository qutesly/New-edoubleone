// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCMjwpPixlV_XZr8kSz9teGLcgPrsJqOsM",
  authDomain: "fysps-31b8d.firebaseapp.com",
  projectId: "fysps-31b8d",
  storageBucket: "fysps-31b8d.appspot.com",
  messagingSenderId: "935458711048",
  appId: "1:935458711048:web:c4283062ef603e9b4b93bd",
  measurementId: "G-EXGQXEXZGD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
