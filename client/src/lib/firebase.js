
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";           
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAas1MzTEvTuKIz0EQwCFyJbcb9aTx7SVY",
  authDomain: "insightify-3265f.firebaseapp.com",
  projectId: "insightify-3265f",
  storageBucket: "insightify-3265f.firebasestorage.app",
  messagingSenderId: "103034802468",
  appId: "1:103034802468:web:d6e166e3c1d1f5510863b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the services so the rest of your app can use them
export const auth = getAuth(app);                
export const googleProvider = new GoogleAuthProvider(); 
export const db = getFirestore(app);             