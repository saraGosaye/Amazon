// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPklczt-_eWfkbER6BfMhau24MIEFeLxs",
  authDomain: "clone-95771.firebaseapp.com",
  projectId: "clone-95771",
  storageBucket: "clone-95771.appspot.com",
  messagingSenderId: "876453828687",
  appId: "1:876453828687:web:4683e11273aaf157cd723a",
  measurementId: "G-JLST5D409M",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

// const analytics = getAnalytics(app);

export { auth, db };
