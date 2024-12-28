import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAPM8qezalBTAzd1V4y5_lAp6IdCn0Bhb0",
    authDomain: "myblogs-a6498.firebaseapp.com",
    projectId: "myblogs-a6498",
    storageBucket: "myblogs-a6498.firebasestorage.app",
    messagingSenderId: "902019824307",
    appId: "1:902019824307:web:af73a9ba660320002e4ec6",
    measurementId: "G-V6592K4HHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;