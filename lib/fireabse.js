import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAMKcZ-BCJrOGsXFUPfsTEgcDiuCPdQR-4",
  authDomain: "fir-app-f0dec.firebaseapp.com",
  projectId: "fir-app-f0dec",
  storageBucket: "fir-app-f0dec.appspot.com",
  messagingSenderId: "778928803595",
  appId: "1:778928803595:web:4abdb71d07dc1c7a91dc0e",
  measurementId: "G-2G9TW600LC",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
