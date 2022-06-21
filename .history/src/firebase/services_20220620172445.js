import { serverTimestamp } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';

import { db } from './firebaseConfig.js';

export const addDocument = (document, data) => {
    const query = {
        ...data,
        createdAt: serverTimestamp(),
    };

    addDoc(collection(db, document), query);
};

// -------------------------------------------
// Giải thuật tìm kiếm tên thành viên
