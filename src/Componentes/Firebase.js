import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAhvx1f3glb82yXPs2uScfigckE6RX9GGU",
    authDomain: "page-cya.firebaseapp.com",
    projectId: "page-cya",
    storageBucket: "page-cya.appspot.com",
    messagingSenderId: "202608681767",
    appId: "1:202608681767:web:05c7b907062d2c16e27f02"
  };

  

const app = initializeApp(firebaseConfig); 

export const dbFirebase = getFirestore(app);