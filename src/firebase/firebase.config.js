// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTyZWHnottQe4Yvt5ZN-txc07sPjXv7lA",
  authDomain: "comsetics-shop.firebaseapp.com",
  projectId: "comsetics-shop",
  storageBucket: "comsetics-shop.appspot.com",
  messagingSenderId: "119186574741",
  appId: "1:119186574741:web:819c4fe20ece3ef4473a9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;