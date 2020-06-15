import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const config ={
    apiKey: "AIzaSyA0pt4E4auuz2FAe7MuQnqAZnHPLQQhK2k",
    authDomain: "e-commerce-website-using-react.firebaseapp.com",
    databaseURL: "https://e-commerce-website-using-react.firebaseio.com",
    projectId: "e-commerce-website-using-react",
    storageBucket: "e-commerce-website-using-react.appspot.com",
    messagingSenderId: "258265688903",
    appId: "1:258265688903:web:1f1d88cd3418e0f7ebba62"
  };

  firebase.initializeApp(config);
  export const auth =firebase.auth();
  export const firestore =firebase.firestore();

 const  provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt:'select_account'});

 export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
 export default firebase;