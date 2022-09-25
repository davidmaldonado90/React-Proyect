import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "reactfristproyect.firebaseapp.com",
  projectId: "reactfristproyect",
  storageBucket: "reactfristproyect.appspot.com",
  messagingSenderId: "781567286234",
  appId: "1:781567286234:web:5e8a38aa043cdae1fe3ee3",
  measurementId: "G-G7QZFDH7YV"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


