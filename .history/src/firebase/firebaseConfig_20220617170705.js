import firebase, { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDkFpCsCI9zAK0PTY3kin1-CxUbkAfzAy4',
    authDomain: 'chat-app-tvd.firebaseapp.com',
    projectId: 'chat-app-tvd',
    storageBucket: 'chat-app-tvd.appspot.com',
    messagingSenderId: '521751486245',
    appId: '1:521751486245:web:266af1b075aec63bed04cc',
    measurementId: 'G-JLRMKNDBGV',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, storage, db };
export default firebase;

// import firebase from 'firebase/app';

// import 'firebase/analytics';
// import 'firebase/auth';
// import 'firebase/firestore';

// var firebaseConfig = {
//   apiKey: 'AIzaSyBRpDZ63mVfrzmzTjHFjRssP4cOvw_jc04',
//   authDomain: 'chat-app-c975a.firebaseapp.com',
//   projectId: 'chat-app-c975a',
//   storageBucket: 'chat-app-c975a.appspot.com',
//   messagingSenderId: '942648297216',
//   appId: '1:942648297216:web:d8c4321ba778c8808f95e5',
//   measurementId: 'G-01WLMKYFFM',
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// const auth = firebase.auth();
// const db = firebase.firestore();

// if (window.location.hostname === 'localhost') {
//   // auth.useEmulator('http://localhost:9099');
//   // db.useEmulator('localhost', '8080');
// }

// export { db, auth };
// export default firebase;
