import FirebaseKeys from './config';
import firebase from 'firebase';

// require('firebase/firstore')
class Fire{
    constructor(){
        if (!firebase.apps.length) {
            firebase.initializeApp(FirebaseKeys);
        }
    }

    get firestore(){
        return firebase.firestore()
    }

    get uid(){
        return (firebase.auth.currentUser || {}).uid
    }

    get timestamp(){
        return Date.now()
    }
}

Fire.shared = new Fire()
export default Fire;


// var firebaseConfig = {
//     apiKey: "AIzaSyAjiPNybkiq3YnK9LyySsg9Bbsf0rHDPPE",
//     authDomain: "ucrlifeguide.firebaseapp.com",
//     databaseURL: "https://ucrlifeguide.firebaseio.com",
//     projectId: "ucrlifeguide",
//     storageBucket: "ucrlifeguide.appspot.com",
//     messagingSenderId: "930611404938",
//     appId: "1:930611404938:web:3caa9fb2fb57b2c389cd73"
//   };

// //Check to see if database initialized already, if not initialize Firebase
// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }


// const db = firebase.firestore()
// export default db;