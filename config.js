import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAHTb8SsPKbTSnxeoOxipZce6basXteoB0",
  authDomain: "book-santa-app-39a3a.firebaseapp.com",
  databaseURL: "https://book-santa-app-39a3a.firebaseio.com",
  projectId: "book-santa-app-39a3a",
  storageBucket: "book-santa-app-39a3a.appspot.com",
  messagingSenderId: "612923914725",
  appId: "1:612923914725:web:ea2cfc13c93463883b570c"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
