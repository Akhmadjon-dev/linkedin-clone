import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCEyuEUw9QrtqXF3yjBzIym3m3BKBRhsxw",
    authDomain: "linkedin-clone-ec03d.firebaseapp.com",
    projectId: "linkedin-clone-ec03d",
    storageBucket: "linkedin-clone-ec03d.appspot.com",
    messagingSenderId: "994102947857",
    appId: "1:994102947857:web:4b14ac8d05ef5f863c81b0",
    measurementId: "G-H5GC01L5J1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth } ; // export { db, auth, provider };