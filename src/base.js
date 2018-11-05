import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB39oatouFOyHqvYqJY75LKTXblEhXKwEo",
    authDomain: "catch-of-the-day-will-vatcher.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-will-vatcher.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;