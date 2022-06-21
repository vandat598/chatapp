import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, createContext } from 'react';
import { useState } from 'react';
import { Spin } from 'antd';

import { auth } from '../firebase/firebaseConfig.js';

import useFirestore from '../hooks/useFirestore.js';
import { useContext, useMemo } from 'react';
import { AuthContext } from './AuthProvider.js';

const AppContext = createContext();

function AppProvider({ children }) {
    const {
        user: { uid },
    } = useContext(AuthContext);

    const roomsCondition = useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: uid,
        };
    }, [uid]);

    const rooms = useFirestore('rooms', roomsCondition);

    return (
        <AppContext.Provider value={{ rooms }}>{children}</AppContext.Provider>
    );
}

export { AppContext };
export default AppProvider;
