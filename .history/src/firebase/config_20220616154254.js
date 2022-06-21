// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDkFpCsCI9zAK0PTY3kin1-CxUbkAfzAy4',
    authDomain: 'chat-app-tvd.firebaseapp.com',
    projectId: 'chat-app-tvd',
    storageBucket: 'chat-app-tvd.appspot.com',
    messagingSenderId: '521751486245',
    appId: '1:521751486245:web:266af1b075aec63bed04cc',
    measurementId: 'G-JLRMKNDBGV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = initializeApp.auth();
const db = initializeApp.firestore();

export { db, auth };
export default analytics;

// import firebase from 'firebase/app';

// import 'firebase/analytics';
// import 'firebase/auth';
// import 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: 'AIzaSyDkFpCsCI9zAK0PTY3kin1-CxUbkAfzAy4',
//     authDomain: 'chat-app-tvd.firebaseapp.com',
//     projectId: 'chat-app-tvd',
//     storageBucket: 'chat-app-tvd.appspot.com',
//     messagingSenderId: '521751486245',
//     appId: '1:521751486245:web:266af1b075aec63bed04cc',
//     measurementId: 'G-JLRMKNDBGV',
// };

// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// const auth = firebase.auth();
// const db = firebase.firestore();

// export { db, auth };
// export default firebase;
