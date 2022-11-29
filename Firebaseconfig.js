// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDczWRhd-LI-nIwjljZNdFGSeqObdtxfMo",
  authDomain: "devs-ui-361ea.firebaseapp.com",
  projectId: "devs-ui-361ea",
  storageBucket: "devs-ui-361ea.appspot.com",
  messagingSenderId: "906462651708",
  appId: "1:906462651708:web:89f7068bb10423299e2a39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
