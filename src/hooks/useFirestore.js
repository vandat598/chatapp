import { useEffect, useState } from 'react';
import {
    collection,
    onSnapshot,
    orderBy,
    query,
    where,
} from 'firebase/firestore';

import { db } from '../firebase/firebaseConfig.js';

const useFirestore = (collec, condition) => {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        if (condition) {
            if (!condition.compareValue || !condition.compareValue.length) {
                return;
            }
            var w = where(
                condition.fieldName,
                condition.operator,
                condition.compareValue
            );
        }

        const q = query(collection(db, collec), w, orderBy('createdAt'));

        const unsubscribe = onSnapshot(q, snapshot => {
            const documents = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));

            setDocuments(documents);
        });

        return unsubscribe;
    }, [collec, condition]);

    return documents;
};

export default useFirestore;
