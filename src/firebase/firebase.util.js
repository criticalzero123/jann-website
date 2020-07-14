import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDnxJWJwEp5dPd9sKBkaL-K7swcjBldonU",
  authDomain: "e-clothing-f3e48.firebaseapp.com",
  databaseURL: "https://e-clothing-f3e48.firebaseio.com",
  projectId: "e-clothing-f3e48",
  storageBucket: "e-clothing-f3e48.appspot.com",
  messagingSenderId: "81102815416",
  appId: "1:81102815416:web:1576bc03c3b61a3b4db44d",
  measurementId: "G-PRP04TPJH8",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
