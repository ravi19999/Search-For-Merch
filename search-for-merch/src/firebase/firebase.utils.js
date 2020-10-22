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

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
