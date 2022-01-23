// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtzdw4GKQU8gAXyJA8Nutu6ophjO-92m4",
    authDomain: "tesla-clone-346ab.firebaseapp.com",
    projectId: "tesla-clone-346ab",
    storageBucket: "tesla-clone-346ab.appspot.com",
    messagingSenderId: "165983023161",
    appId: "1:165983023161:web:1f4d1d4e0d380a2286dde8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default { app, auth, firebaseConfig }