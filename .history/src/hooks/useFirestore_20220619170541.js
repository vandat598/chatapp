import { useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';

import { db } from '../firebase/firebaseConfig.js';

const useFirestore = () => {
    useEffect(() => {
        onSnapshot(doc(db, 'users', '7grX3d3gdXot5ywjKvX1'), snapshot => {
            // const data = snapshot.docs.map(doc => ({
            //     ...doc.data(),
            //     id: doc.id,
            // }));
            console.log({ snapshot, docs: snapshot.data() });
        });
    }, []);
};

export { useFirestore };
