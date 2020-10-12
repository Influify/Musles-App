import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBVFMdLfw901X1J9XiG96PdvHaMtrSGAfM",
  authDomain: "musles-subscription.firebaseapp.com",
  databaseURL: "https://musles-subscription.firebaseio.com",
  projectId: "musles-subscription",
  storageBucket: "musles-subscription.appspot.com",
  messagingSenderId: "346626333085",
  appId: "1:346626333085:web:edf5447aad5cc16ad57774",
  measurementId: "G-MD8400DHVE"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firecon;
