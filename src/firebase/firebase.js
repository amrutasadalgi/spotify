// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxAvpkm_nI0sJwTdVMd0Suj6E39xXpnk4",
  authDomain: "spotify-clone-4586d.firebaseapp.com",
  projectId: "spotify-clone-4586d",
  storageBucket: "spotify-clone-4586d.appspot.com",
  messagingSenderId: "602229206130",
  appId: "1:602229206130:web:229729583705d6b39d26eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let auth = getAuth(app);
