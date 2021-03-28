import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore'

 // Initialize Firebase
 const firebaseConfig = {
  apiKey: "AIzaSyDreUosxcQ2fPffcSWmkhDitH78xoK0RYo",
  authDomain: "partiu-trips.firebaseapp.com",
  projectId: "partiu-trips",
  storageBucket: "partiu-trips.appspot.com",
  messagingSenderId: "141152242747",
  appId: "1:141152242747:web:b62a84359ef83a8375e01e",
  measurementId: "G-BLN449NC4D"
}
 


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

 export default firebase