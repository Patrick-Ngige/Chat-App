import { initializeApp } from "firebase/app";
import getAuth from "firebase/auth";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "chat-8a504.firebaseapp.com",
  projectId: "chat-8a504",
  storageBucket: "chat-8a504.appspot.com",
  messagingSenderId: "714196355180",
  appId: "1:714196355180:web:63e243388643b04ac93049"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();