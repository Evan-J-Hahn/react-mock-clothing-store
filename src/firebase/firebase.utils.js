import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDIvpnmZxhogoT0lsrn1Rfsa-L-nVPDjjQ",
  authDomain: "crown-db-2798f.firebaseapp.com",
  databaseURL: "https://crown-db-2798f.firebaseio.com",
  projectId: "crown-db-2798f",
  storageBucket: "crown-db-2798f.appspot.com",
  messagingSenderId: "38513890340",
  appId: "1:38513890340:web:a9c642e46f7d13ef58b4b1",
  measurementId: "G-3P3878TGFN"
}

firebase.initializeApp(config)

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const auth = firebase.auth()
export const firestore = firebase.firestore()
export default firebase