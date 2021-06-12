import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

const config = {
  apiKey: "AIzaSyAisGyiFMZg5JAnHti7nG73f2sUVte-Trw",
  authDomain: "video-link-saver.firebaseapp.com",
  databaseURL: "https://video-link-saver-default-rtdb.firebaseio.com",
  projectId: "video-link-saver",
  storageBucket: "video-link-saver.appspot.com",
  messagingSenderId: "1029963894196",
  appId: "1:1029963894196:web:3cc8517e458cf0b31476e1",
  measurementId: "G-7Z45JC7XXG",
};

//initializes the config
firebase.initializeApp(config);

//creates a user profileDocument to refrence and collect as data.
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//sets up a new googleAuth window to select google account from.
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
