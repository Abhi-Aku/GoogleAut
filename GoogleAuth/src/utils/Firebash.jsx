import {getAuth ,GoogleAuthProvider} from 'firebase/auth'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-77336.firebaseapp.com",
  projectId: "auth-77336",
  storageBucket: "auth-77336.firebasestorage.app",
  messagingSenderId: "873309067254",
  appId: "1:873309067254:web:395810a504a081c16599d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider}