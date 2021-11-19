import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyD_5z2qHhmvt2xmoVcyMI-AAv2HNWQm-gk",
    authDomain: "e-ride-app-d5294.firebaseapp.com",
    projectId: "e-ride-app-d5294",
    storageBucket: "e-ride-app-d5294.appspot.com",
    messagingSenderId: "621803164867",
    appId: "1:621803164867:web:69066bcee98524c7a47e76"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


