import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "chat-app-73ad1.firebaseapp.com",
  projectId: "chat-app-73ad1",
  storageBucket: "chat-app-73ad1.appspot.com",
  messagingSenderId: "512733840355",
  appId: "1:512733840355:web:85aa11693a241d09d956d6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();