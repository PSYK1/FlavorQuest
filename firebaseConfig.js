// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ8-7U7N-iqLe8N7AoVnPk0UcPBokj_Xs",
  authDomain: "flavorquest-fd545.firebaseapp.com",
  projectId: "flavorquest-fd545",
  storageBucket: "flavorquest-fd545.appspot.com",
  messagingSenderId: "130253158928",
  appId: "1:130253158928:web:f61aae142e83a4533ba895",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
