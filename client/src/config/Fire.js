import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyC9wJGTSNmnEg0vqvPW2l4mzvoEiTv2aA0",
    authDomain: "kawaski-catering.firebaseio.com",
    databaseURL: "https://kawaski-catering.firebaseio.com/",
    projectId: "kawaski-catering",
    storageBucket: "kawaski-catering.appspot.com",
    messagingSenderId: "85773507611"
};

const fire = firebase.initializeApp(config);

export default fire;
