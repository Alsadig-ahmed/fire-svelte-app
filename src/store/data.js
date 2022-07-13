// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
//   apiKey: "AIzaSyCNpYSxZUp56PjZEmI9K6nsI4evOP9P_zk",
//   authDomain: "learn-svelte-7d2ac.firebaseapp.com",
//   projectId: "learn-svelte-7d2ac",
//   storageBucket: "learn-svelte-7d2ac.appspot.com",
//   messagingSenderId: "951872395858",
//   appId: "1:951872395858:web:8d2571a72274f5deb59d8b",
//   measurementId: "G-XHYCCR85V0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
