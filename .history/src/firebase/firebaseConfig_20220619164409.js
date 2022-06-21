import { initializeApp } from 'firebase/app';

import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

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

// run on firebase Emulators
connectAuthEmulator(auth, 'http://localhost:9099');
if (window.location.hostname === 'localhost') {
    connectFirestoreEmulator(db, 'localhost', 8080);
}

export { auth, storage, db };
