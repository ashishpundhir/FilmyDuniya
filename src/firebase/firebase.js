
import { initializeApp } from "firebase/app";
import {getFirebase,collection, getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD_c7zAB87ltkJDk97y40YaSYugDolf0vY",
  authDomain: "filmyverse-6a74b.firebaseapp.com",
  projectId: "filmyverse-6a74b",
  storageBucket: "filmyverse-6a74b.appspot.com",
  messagingSenderId: "263778249343",
  appId: "1:263778249343:web:3b822fe0d27d48128a2d4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db,"movies");
export default app;