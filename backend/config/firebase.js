// Import the functions you need from the SDKs you need
const initializeApp = require('firebase/app');
const getAnalytics = require('firebase/analytics');
const getMessaging = require('firebase/messaging');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxO1lIKfUFvFIOjHpGOBMZ5XrJJB-S4AQ",
  authDomain: "flight-status-update-28fd4.firebaseapp.com",
  projectId: "flight-status-update-28fd4",
  storageBucket: "flight-status-update-28fd4.appspot.com",
  messagingSenderId: "1028053663017",
  appId: "1:1028053663017:web:79951e7fa79d787ee6cb38",
  measurementId: "G-YYBESPZKBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);
module.exports=messaging;