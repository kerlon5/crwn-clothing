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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if (!snapShot.exists) {
      const {displayName, email} = userAuth
      const createdAt = new Date()
      try{
        await userRef.set({
          displayName, 
          email,
          createdAt,
          ...additionalData
        })
      }
      catch (error){
        console.log(error.message)
      }
    }
    console.log(snapShot)   
    return userRef
  }

  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase