// firebase-config.js

// TODO: Replace the following with your app's Firebase project configuration
// You can get this from the Firebase Console -> Project Settings -> General -> Your Apps -> SDK Setup and Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXK8wGa9wb_WRqrC8-bHzQtaOd1w9jI-Y",
    authDomain: "mydeliverytracker-5ada0.firebaseapp.com",
    databaseURL: "https://mydeliverytracker-5ada0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mydeliverytracker-5ada0",
    storageBucket: "mydeliverytracker-5ada0.firebasestorage.app",
    messagingSenderId: "1037951841741",
    appId: "1:1037951841741:web:3bb205a41e23208d2dc084",
    measurementId: "G-3PMFK3KEX9"
};

// Initialize Firebase
// We check if firebase is already initialized to avoid errors
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const database = firebase.database();
