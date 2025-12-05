// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDMkr4_C4DrfFBzWdXmvKniyAmhvvjsuHU",
  authDomain: "ceylon-grace-travels.firebaseapp.com",
  projectId: "ceylon-grace-travels",
  storageBucket: "ceylon-grace-travels.firebasestorage.app",
  messagingSenderId: "1053245683174",
  appId: "1:1053245683174:web:60349aee8520cacafe9227",
  measurementId: "G-SD76K1F8WH"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
