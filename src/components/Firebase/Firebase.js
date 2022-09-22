import "dotenv/config";

import { initializeApp } from "firebase/app";
import { doc, collection, addDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "reactfristproyect.firebaseapp.com",
  projectId: "reactfristproyect",
  storageBucket: "reactfristproyect.appspot.com",
  messagingSenderId: "781567286234",
  appId: "1:781567286234:web:5e8a38aa043cdae1fe3ee3",
  measurementId: "G-G7QZFDH7YV"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore();

async function cargarBaseDeDatos  () {
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach(async (producto) => {
      await addDoc(collection(db, "productos"), {
          nombre: producto.nombre,
          categoria: producto.categoria,
          precio: producto.precio,
          stock: producto.stock,
          img: ""
        });
  })
  
}

export {db,app, cargarBaseDeDatos}