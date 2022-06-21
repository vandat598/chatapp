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
        let collectionRef = collection(db, collec);

        if (condition) {
            if (!condition.compareValue || !condition.compareValue.length) {
                return;
            }

            const q = query(
                collectionRef,
                where(
                    condition.fieldName,
                    condition.operator,
                    condition.compareValue
                ),
                orderBy('createdAt')
            );
        }

        const unsubscribe = onSnapshot(collectionRef, snapshot => {
            const documents = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));

            setDocuments(documents);
        });
        // onSnapshot(collection(db, 'users'), snapshot => {
        //     const data = snapshot.docs.map(doc => ({
        //         ...doc.data(),
        //         id: doc.id,
        //     }));
        //     console.log({ data, snapshot, docs: snapshot.docs });
        // });
        return unsubscribe;
    }, [collec, condition]);
    // useEffect(() => {
    //     onSnapshot(collection(db, 'users'), snapshot => {
    //         const data = snapshot.docs.map(doc => ({
    //             ...doc.data(),
    //             id: doc.id,
    //         }));
    //         console.log({ data, snapshot, docs: snapshot.docs });
    //     });
    // }, []);
    return documents;
};

export default useFirestore;
