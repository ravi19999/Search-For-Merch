import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC6_00qIOXNmVGRfFzsPabiBnSyqw0A29U",
  authDomain: "search-for-merch.firebaseapp.com",
  databaseURL: "https://search-for-merch.firebaseio.com",
  projectId: "search-for-merch",
  storageBucket: "search-for-merch.appspot.com",
  messagingSenderId: "178215655091",
  appId: "1:178215655091:web:61bf92e7388e71d8c182c6",
  measurementId: "G-9DBJB3LZZ8",
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

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
