import * as firebase from "firebase/app";
import "firebase/auth";

const fireApp = firebase.initializeApp({
    apiKey: "AIzaSyCUrhvuo8dLNslrFVazTj9GC0vYibsG8To",
    authDomain: "crwn-clothing-2de3c.firebaseapp.com",
    databaseURL: "https://crwn-clothing-2de3c.firebaseio.com",
    projectId: "crwn-clothing-2de3c",
    storageBucket: "crwn-clothing-2de3c.appspot.com",
    messagingSenderId: "698182154025",
    appId: "1:698182154025:web:5d96f9b94369000722e938",
    measurementId: "G-DFD4RGNESZ"
});

export default fireApp;