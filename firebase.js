// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu_v45u9B-XcgeZHdq8Zgo_EQ0liFh9ls",
  authDomain: "travelhub-3c4c4.firebaseapp.com",
  projectId: "travelhub-3c4c4",
  storageBucket: "travelhub-3c4c4.appspot.com",
  messagingSenderId: "449189726882",
  appId: "1:449189726882:web:2af5bd9811a962b47be5fb"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const database = getFirestore(app);

export { 
  app,
  database
}