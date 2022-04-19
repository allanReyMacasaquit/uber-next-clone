import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyADW5_-rVkSpyY5HsI2HYhwrhVdt3ldTpc",
  authDomain: "netflix-clone-bf6e4.firebaseapp.com",
  projectId: "netflix-clone-bf6e4",
  storageBucket: "netflix-clone-bf6e4.appspot.com",
  messagingSenderId: "174269576034",
  appId: "1:174269576034:web:b989e58a0adf365455323b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
