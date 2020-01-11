import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyD9DD3csfSM40xAav8zg7GP9QBp18Qg12A",
    authDomain: "udemy-ninja-smoothies-c6a1c.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-c6a1c.firebaseio.com",
    projectId: "udemy-ninja-smoothies-c6a1c",
    storageBucket: "udemy-ninja-smoothies-c6a1c.appspot.com",
    messagingSenderId: "638727915523",
    appId: "1:638727915523:web:9b10c590db1c8a8f81a636",
    measurementId: "G-FDX3RJ28FK"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  //firebaseApp.firestore().settings({ timestampsInSnapshots: true })


  export default firebaseApp.firestore()