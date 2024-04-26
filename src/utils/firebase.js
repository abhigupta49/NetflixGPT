// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKAPZmptLKK7w7GNx1WZN4CBMdhezOAc0",
    authDomain: "netflixgpt-a6432.firebaseapp.com",
    projectId: "netflixgpt-a6432",
    storageBucket: "netflixgpt-a6432.appspot.com",
    messagingSenderId: "758056563171",
    appId: "1:758056563171:web:ea7ab0c144fa83aff2b0d6",
    measurementId: "G-HZVB6NXDF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);