// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore, collection} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD97SqJW_6pRoYoZqaZhHFbRn2TJfX5gRI",
  authDomain: "project-movieworld.firebaseapp.com",
  projectId: "project-movieworld",
  storageBucket: "project-movieworld.appspot.com",
  messagingSenderId: "266875167201",
  appId: "1:266875167201:web:8ececf30aec6645f55f2a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const movieref = collection(db, "movie");
export const reviewref = collection(db, "review");

export default app;