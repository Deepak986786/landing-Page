import firebase from "firebase/app";
import "firebase/firestore";
// You need to enter your own API keys here like I have shown in the video 

const firebaseConfig = {
  apiKey:"AIzaSyD5ttzD1LW9bO5KLzVWgipO6ZJP3NLMgb0",
  authDomain:"intense-grove-293123.firebaseapp.com",
  projectId:"intense-grove-293123",
  storageBucket:"intense-grove-293123.appspot.com",
  messagingSenderId:"136359654102",
  appId:"1:136359654102:web:594e3c5e530fe5d1434f77",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
