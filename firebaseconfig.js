
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
  import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword ,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
  import { getDatabase,set ,ref,update } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDnTRSkragY7HChjRFiWrGx4s2JL1UEzWM",
    authDomain: "authentication-b367c.firebaseapp.com",
    projectId: "authentication-b367c",
    storageBucket: "authentication-b367c.appspot.com",
    messagingSenderId: "421841938924",
    appId: "1:421841938924:web:e39657779135c4723fb8c9",
    measurementId: "G-ZE589DMZE2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();
//   const analytics = getAnalytics(app);

export{
    app,
    auth,
    database,
    signInWithEmailAndPassword,update,sendPasswordResetEmail,
    createUserWithEmailAndPassword,set, ref
}