// import { useEffect, useState } from 'react';
// import {
//     collection,
//     onSnapshot,
//     orderBy,
//     query,
//     where,
// } from 'firebase/firestore';

// import { db } from '../firebase/firebaseConfig.js';

// const useFirestore = (collec, condition) => {
//     const [documents, setDocuments] = useState([]);

//     useEffect(() => {
//         const q = query(
//             collection(db, collec),
//             where(
//                 condition.fieldName,
//                 condition.operator,
//                 condition.compareValue
//             )
//         );

//         const unsubscribe = onSnapshot(q, snapshot => {
//             const documents = snapshot.docs.map(doc => ({
//                 ...doc.data(),
//                 id: doc.id,
//             }));
//             console.log(snapshot);

//             setDocuments(documents);
//         });

//         return unsubscribe;
//     }, [collec, condition]);

//     // ------------------------------------------------
//     // useEffect(() => {
//     //     onSnapshot(collection(db, 'users'), snapshot => {
//     //         const data = snapshot.docs.map(doc => ({
//     //             ...doc.data(),
//     //             id: doc.id,
//     //         }));
//     //         console.log({ data, snapshot, docs: snapshot.docs });
//     //     });
//     // }, []);
//     // ------------------------------------------------

//     return documents;
// };

// export default useFirestore;
