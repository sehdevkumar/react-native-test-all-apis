// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE8CE5jAK2cqWIsonLYWW9zpEg2rTO700",
  authDomain: "expofirebase-b9226.firebaseapp.com",
  projectId: "expofirebase-b9226",
  storageBucket: "expofirebase-b9226.firebasestorage.app",
  messagingSenderId: "67117824818",
  appId: "1:67117824818:web:5d870710f08f30cca4b52b",
  measurementId: "G-WF8XJPZJTL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export  {db as FirebaseDB};