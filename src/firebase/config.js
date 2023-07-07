// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSuljD7bkRCHwO3LJSmc-2whREy-Gyj18",
  authDomain: "react-cursos-36005.firebaseapp.com",
  projectId: "react-cursos-36005",
  storageBucket: "react-cursos-36005.appspot.com",
  messagingSenderId: "865498689119",
  appId: "1:865498689119:web:b8d786ebaa4e5499cf75ea"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );

// Objetos que necesito para interactuar con firebase: FirebaseApp, FirebaseAuth y FirebaseDB