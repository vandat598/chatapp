import { useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';

import { db } from '../firebase/firebaseConfig.js';

const useFirestore = () => {
    useEffect(() => {
        onSnapshot(collection(db, 'users'), snapshot => {
            const data = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));
            console.log({ snapshot, data, docs: snapshot.docs() });
        });
    }, []);
};

export { useFirestore };
