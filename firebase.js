import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBiihlBD1dT0i_ymwmf_bGPeqKFzeFkzVI",
  authDomain: "docs-clone-c2b49.firebaseapp.com",
  projectId: "docs-clone-c2b49",
  storageBucket: "docs-clone-c2b49.appspot.com",
  messagingSenderId: "577249279549",
  appId: "1:577249279549:web:d580fe5e294f3245d7f454",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
