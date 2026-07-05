
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-5079c.firebaseapp.com",
  projectId: "fir-5079c",
  storageBucket: "fir-5079c.firebasestorage.app",
  messagingSenderId: "926588321107",
  appId: "1:926588321107:web:a56b28bb9dd560909975a6"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}