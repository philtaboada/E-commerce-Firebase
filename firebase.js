// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1RCsvNh1IEMGjnDCbLuNbwfYGKn5tvcU",
  authDomain: "e-commerce-4c04b.firebaseapp.com",
  projectId: "e-commerce-4c04b",
  storageBucket: "e-commerce-4c04b.appspot.com",
  messagingSenderId: "477359270471",
  appId: "1:477359270471:web:dab5d35789f07a8662df62"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const db = getFirestore(app)