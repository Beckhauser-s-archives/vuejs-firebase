import firebase from 'firebase'
import firestore from 'firebase/firestore'
//Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDUrKo1B55aGf1NRhJv9RTyaBDo9soojgo",
  authDomain: "udemy-ninja-chat-b3933.firebaseapp.com",
  databaseURL: "https://udemy-ninja-chat-b3933.firebaseio.com",
  projectId: "udemy-ninja-chat-b3933",
  storageBucket: "udemy-ninja-chat-b3933.appspot.com",
  messagingSenderId: "164252170646",
  appId: "1:164252170646:web:b1708ed4570ae7834d45b7",
  measurementId: "G-P1PH9CE7W4"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })
  

  export default firebaseApp.firestore()