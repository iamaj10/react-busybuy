// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA35DIhEDirl2SNShysT2egIsEIATG_a8o",
  authDomain: "busybuy-1f6af.firebaseapp.com",
  projectId: "busybuy-1f6af",
  storageBucket: "busybuy-1f6af.appspot.com",
  messagingSenderId: "707199396668",
  appId: "1:707199396668:web:d3d5fa0c91bb2a311ccc39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
