import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyD0H4YotArKgzHtdL0BpVix9xaF7RFA_wI",
    authDomain: "udemy-geo-ninjas-65cd9.firebaseapp.com",
    databaseURL: "https://udemy-geo-ninjas-65cd9.firebaseio.com",
    projectId: "udemy-geo-ninjas-65cd9",
    storageBucket: "udemy-geo-ninjas-65cd9.appspot.com",
    messagingSenderId: "546011129049",
    appId: "1:546011129049:web:c60eb1739e4422df3e4ac8",
    measurementId: "G-3F509KT5W5"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore()