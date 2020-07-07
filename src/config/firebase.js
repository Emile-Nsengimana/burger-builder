import * as firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBB01EaOn8-2N7DD19BCrgFPspCrqqHAe4",
  authDomain: "burger-app-39bda.firebaseapp.com",
  databaseURL: "https://burger-app-39bda.firebaseio.com",
  projectId: "burger-app-39bda",
  storageBucket: "burger-app-39bda.appspot.com",
  messagingSenderId: "523768172926",
  appId: "1:523768172926:web:0598a9fe0b85ec0fc2632f",
  measurementId: "G-MZFK41DDFT",
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
