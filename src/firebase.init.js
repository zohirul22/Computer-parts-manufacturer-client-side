// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy3vHVhW-Y4yuv4XGHskd2CaFzikcmL8M",
  authDomain: "computers-parts-3b1f4.firebaseapp.com",
  projectId: "computers-parts-3b1f4",
  storageBucket: "computers-parts-3b1f4.appspot.com",
  messagingSenderId: "695406900077",
  appId: "1:695406900077:web:faeba2be7a2a9e4859e064"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;