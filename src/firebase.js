import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBuLB5vwIK9bJm78UufACOyzSs_DP58Pps",
    authDomain: "linked-clone-68e16.firebaseapp.com",
    projectId: "linked-clone-68e16",
    storageBucket: "linked-clone-68e16.appspot.com",
    messagingSenderId: "167084467354",
    appId: "1:167084467354:web:20ac1e1bc60101f8a32b23",
    measurementId: "G-J7PLGGFGDK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }