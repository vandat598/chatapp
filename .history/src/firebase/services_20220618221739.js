import { serverTimestamp } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';

import { db } from './firebaseConfig.js';

export const addDocument = (collection, data) => {
    addDoc(collection(db, collection), query);

    const query = {
        ...data,
        createdAt: serverTimestamp(),
    };
};

// setDoc(doc(db, 'user', 'user_info'), {
//     displayName: user.displayName,
//     email: user.email,
//     photoURL: user.photoURL,
//     uid: user.uid,
//     providerId: _tokenResponse.providerId,
// });
