import firebase from "firebase";
var config = {
  apiKey: "AIzaSyBbrNBeeizjuIsNZkFhoRLS3UagkZfaujk",
  authDomain: "seriouspeople-1cb8b.firebaseapp.com",
  databaseURL: "https://seriouspeople-1cb8b.firebaseio.com",
  projectId: "seriouspeople-1cb8b",
  storageBucket: "seriouspeople-1cb8b.appspot.com",
  messagingSenderId: "618172104271"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;

//
