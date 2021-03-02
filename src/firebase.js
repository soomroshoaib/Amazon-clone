import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA_f-YJqzN1eSWNgAGjYDoaycpT62c4qPM",
  authDomain: "clone-2fd2a.firebaseapp.com",
  projectId: "clone-2fd2a",
  storageBucket: "clone-2fd2a.appspot.com",
  messagingSenderId: "344859468720",
  appId: "1:344859468720:web:d5635c91d668c862862c75",
  measurementId: "G-PQXY9WP7WD"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { db,auth,storage,provider }