// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD_5cORBY-XjFzRTqZnKtROcJtKpudTNnI",
  authDomain: "hannalee-a045d.firebaseapp.com",
  projectId: "hannalee-a045d",
  storageBucket: "hannalee-a045d.appspot.com",
  messagingSenderId: "786522525989",
  appId: "1:786522525989:web:1a2773d8d5f9ae6d8e0acc",
  measurementId: "G-RHH2D0B57W",
};

// Initialize Firebase
const app: any = initializeApp(firebaseConfig);
export const storage = getStorage(app);
