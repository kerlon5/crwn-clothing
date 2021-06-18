import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAcPEID8ve4lJ6cdG4x0y14V-ZRetqK-9I",
    authDomain: "crwn-db-7374c.firebaseapp.com",
    projectId: "crwn-db-7374c",
    storageBucket: "crwn-db-7374c.appspot.com",
    messagingSenderId: "404120798067",
    appId: "1:404120798067:web:b2b240177c6b687715bb06",
    measurementId: "G-M9L267WRWF"
  };

  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase