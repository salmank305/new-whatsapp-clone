import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnvwczQeAc2s8BHhAebUHoOr8eMwyRWyM",
    authDomain: "new-whatsapp-clone-def8a.firebaseapp.com",
    projectId: "new-whatsapp-clone-def8a",
    storageBucket: "new-whatsapp-clone-def8a.appspot.com",
    messagingSenderId: "132288550190",
    appId: "1:132288550190:web:cd2c2e57e4470dac4f96bf",
    measurementId: "G-JBE9KXWCBN"
  };

  const app = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  const db = app.firestore();

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  export { auth , googleProvider };
  
  export default db;