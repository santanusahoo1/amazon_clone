import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBQjVO7U70thhPsRGHKHUnEZ4o4SFeGdCw",
    authDomain: "clone-9b58e.firebaseapp.com",
    databaseURL: "https://clone-9b58e.firebaseio.com",
    projectId: "clone-9b58e",
    storageBucket: "clone-9b58e.appspot.com",
    messagingSenderId: "854701574856",
    appId: "1:854701574856:web:fd49ef5160c7bcb581f3fd",
    measurementId: "G-4G4M7HBML9"
});

const auth = firebase.auth();

export { auth };