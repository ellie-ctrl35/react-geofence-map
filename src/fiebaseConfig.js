// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWNuYfaUKSqkV3RroBnRP-tsRAK6c915A",
  authDomain: "jessica-4a9a6.firebaseapp.com",
  projectId: "jessica-4a9a6",
  storageBucket: "jessica-4a9a6.appspot.com",
  messagingSenderId: "163850678920",
  appId: "1:163850678920:web:07e6f4ca84c4e898c9a53d",
  measurementId: "G-Q25GKJQEXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);