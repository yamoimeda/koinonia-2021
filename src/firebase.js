
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'

// Add the Firebase products that you want to use
import 'firebase/firestore';
import 'firebase/storage';

// TODO: Replace the following with your app's Firebase project configuration
const fire = firebase.initializeApp({
apiKey: "AIzaSyAztSjJ966DJ3lHsDDbgCj2ZxP8PK_S1WE",
authDomain: "minaposento.firebaseapp.com",
projectId: "minaposento",
storageBucket: "minaposento.appspot.com",
messagingSenderId: "1061737270399",
appId: "1:1061737270399:web:15c705139a8a8a8532834a"

});

export default  fire ;