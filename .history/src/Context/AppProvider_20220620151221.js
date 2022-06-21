import { createContext } from 'react';
import { useContext, useMemo } from 'react';

import useFirestore from '../hooks/useFirestore.js';
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
