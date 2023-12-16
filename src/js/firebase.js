// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbG2TybeWdKz7Ga2z0xX92rnsRV98Excw",
    authDomain: "noteballs-f68ef.firebaseapp.com",
    projectId: "noteballs-f68ef",
    storageBucket: "noteballs-f68ef.appspot.com",
    messagingSenderId: "432342305073",
    appId: "1:432342305073:web:1dad8ca63bce7241334810"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app)

export {
    db, auth
}