importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyDxO1lIKfUFvFIOjHpGOBMZ5XrJJB-S4AQ",
    authDomain: "flight-status-update-28fd4.firebaseapp.com",
    projectId: "flight-status-update-28fd4",
    storageBucket: "flight-status-update-28fd4.appspot.com",
    messagingSenderId: "1028053663017",
    appId: "1:1028053663017:web:79951e7fa79d787ee6cb38",
    measurementId: "G-YYBESPZKBJ"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});