import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABu4hVa6ux9PUC_fmBIxibLQw3wxpOvl0",
  authDomain: "reactfristproyect.firebaseapp.com",
  projectId: "reactfristproyect",
  storageBucket: "reactfristproyect.appspot.com",
  messagingSenderId: "781567286234",
  appId: "1:781567286234:web:5e8a38aa043cdae1fe3ee3",
  measurementId: "G-G7QZFDH7YV"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app)


