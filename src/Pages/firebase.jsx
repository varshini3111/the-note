import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABSncbsLq6JHj8VFwQLQ1Aga6xLnMDNeI",
  authDomain: "the-note-a0978.firebaseapp.com",
  projectId: "the-note-a0978",
  storageBucket: "the-note-a0978.appspot.com",
  messagingSenderId: "434645338496",
  appId: "1:434645338496:web:17150a746b0ec8279f5965",
  measurementId: "G-3QCEELRPCJ"
};

firebase.initializeApp(firebaseConfig);
