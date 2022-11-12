import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

import {
    getFirestore,

} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCTskGHTimqdf-CY3hfwcI5iN8gmk32-fE",
    authDomain: "minihackothon.firebaseapp.com",
    projectId: "minihackothon",
    storageBucket: "minihackothon.appspot.com",
    messagingSenderId: "283243830211",
    appId: "1:283243830211:web:21f73d7b230486b811bb76",
    measurementId: "G-8H053HP5B5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



const login = () => {
    const email = document.getElementById("useremail");
    const password = document.getElementById("userpassword");
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("user", user);
            window.location.href = "student.html"
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
};

const loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", login);