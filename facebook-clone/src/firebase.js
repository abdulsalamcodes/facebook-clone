// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDFtq67AOc-NyQdXg48YgFq5BwYMt4HSMw",
    authDomain: "facebook-clone-f111b.firebaseapp.com",
    projectId: "facebook-clone-f111b",
    storageBucket: "facebook-clone-f111b.appspot.com",
    messagingSenderId: "1028177418331",
    appId: "1:1028177418331:web:df066a39f09c5a4b06077e",
    measurementId: "G-LH1ZLX78MN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;