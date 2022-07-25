// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: `${process.env.NEXT_APP_FIREBASE_API_KEY}`,
  // authDomain:`${process.env.NEXT_APP_FIREBASE_AUTH_DOMAIN}`,
  // projectId:`${process.env.NEXT_APP_FIREBASE_PROJECT_ID}`,
  // storageBucket:`${process.env.NEXT_APP_FIREBASE_STORAGE_BUCKET}`,
  // messagingSenderId:`${process.env.NEXT_APP_MESSAGING_SENDER}`,
  // appId: `${process.env.NEXT_APP_APP_ID}`
  apiKey: "AIzaSyDYTgxF0Iq4qy6fE9q6eXUuYQNOeaVz7ZE",
  authDomain: "netflix-nextjs-37f55.firebaseapp.com",
  projectId: "netflix-nextjs-37f55",
  storageBucket: "netflix-nextjs-37f55.appspot.com",
  messagingSenderId: "865492362572",
  appId: "1:865492362572:web:ce3e9b3e140b6c52e19be9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const db= getFirestore(app);