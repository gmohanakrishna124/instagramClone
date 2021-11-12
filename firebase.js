// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgnypPiUdkDU2cOPvPXk1LHp1hXMx46ho",
  authDomain: "instagram-clone-ef301.firebaseapp.com",
  projectId: "instagram-clone-ef301",
  storageBucket: "instagram-clone-ef301.appspot.com",
  messagingSenderId: "1052785300551",
  appId: "1:1052785300551:web:938c51b31b00fca8440d62"
};

// Initialize Firebase
const app =  !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth();

export {app, db, storage,auth}