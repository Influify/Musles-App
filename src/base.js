import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBVFMdLfw901X1J9XiG96PdvHaMtrSGAfM",
  authDomain: "musles-subscription.firebaseapp.com",
  databaseURL: "https://musles-subscription.firebaseio.com",
  projectId: "musles-subscription",
  storageBucket: "musles-subscription.appspot.com",
  messagingSenderId: "346626333085",
  appId: "1:346626333085:web:edf5447aad5cc16ad57774",
  measurementId: "G-MD8400DHVE"
});

export default app;
