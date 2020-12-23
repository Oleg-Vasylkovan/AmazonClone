import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADTAyrscNcpk14JUaRltgtzl-j4GDN3XQ",
    authDomain: "clone-1f6fa.firebaseapp.com",
    databaseURL: "https://clone-1f6fa.firebaseio.com",
    projectId: "clone-1f6fa",
    storageBucket: "clone-1f6fa.appspot.com",
    messagingSenderId: "990216379556",
    appId: "1:990216379556:web:c33402c2e2543939e39a31",
    measurementId: "G-DBDLKZEQF6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
