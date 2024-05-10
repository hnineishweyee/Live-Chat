import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCbxURpHcp90BrsgvD5f0DQWJ6ZXdb7_2s",
  authDomain: "live-chat-1c1a6.firebaseapp.com",
  projectId: "live-chat-1c1a6",
  storageBucket: "live-chat-1c1a6.appspot.com",
  messagingSenderId: "382186825673",
  appId: "1:382186825673:web:112af8ac4b61625ecbaa18"
};

  firebase.initializeApp(firebaseConfig)

  let db = firebase.firestore()
  let auth = firebase.auth()
  let timeStamp = firebase.firestore.FieldValue.serverTimestamp

  export {db,auth,timeStamp}