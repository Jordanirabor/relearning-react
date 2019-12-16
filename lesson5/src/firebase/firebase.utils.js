import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

config = {
    apiKey: "AIzaSyArer6-y6AYH5RqFOIz8uDg4J9kY5Bhz5U",
    authDomain: "crown-db-769bf.firebaseapp.com",
    databaseURL: "https://crown-db-769bf.firebaseio.com",
    projectId: "crown-db-769bf",
    storageBucket: "crown-db-769bf.appspot.com",
    messagingSenderId: "481134728109",
    appId: "1:481134728109:web:bbdfb7696d0ca02b3d0724",
    measurementId: "G-C75PMZ1ESK"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ "prompt": "select_account" })

export const SignInWithGoogle = () => auth.signInWithPopUp(provider)

export default firebase;

