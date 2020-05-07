import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAwldtZpQAZH0qUfnGLBD-qiNXDZ4PqBJ0",
    authDomain: "king-db-yolo.firebaseapp.com",
    databaseURL: "https://king-db-yolo.firebaseio.com",
    projectId: "king-db-yolo",
    storageBucket: "king-db-yolo.appspot.com",
    messagingSenderId: "993039551084",
    appId: "1:993039551084:web:06898ce6f61525ce87e649",
    measurementId: "G-N59WC1MBSZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;