import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-VQ9qk1UrfsM5zg6ZPUTx3MBH2Ef5qKU",
  authDomain: "clone-ee6fa.firebaseapp.com",
  projectId: "clone-ee6fa",
  storageBucket: "clone-ee6fa.appspot.com",
  messagingSenderId: "550188167370",
  appId: "1:550188167370:web:f5e98acd6183b2625b4433",
  measurementId: "G-DE3FQFL3MV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
