// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCqgAc2RB_pmibV-LeLhpPrOC0KdxxbRPc",
  authDomain: "contact-list-3a205.firebaseapp.com",
  projectId: "contact-list-3a205",
  storageBucket: "contact-list-3a205.appspot.com",
  messagingSenderId: "251425850051",
  appId: "1:251425850051:web:c35e8836174960a486d876"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);
export const auth = getAuth(app);