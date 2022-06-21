import { createContext, useState } from 'react';
import { useContext, useMemo } from 'react';

import useFirestore from '../hooks/useFirestore.js';
import { AuthContext } from './AuthProvider.js';

const AppContext = createContext();

function AppProvider({ children }) {
    const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
    const [selectedRoomId, setSelectedRoomId] = useState('');

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

    const selectedRoom = useMemo(
        () => rooms.find(room => room.id === selectedRoomId),
        [rooms, selectedRoomId]
    );

    // const userCondition = useMemo(() => {
    //     return {
    //         fieldName: 'uid',
    //         operator: 'in',
    //         compareValue: selectedRoom.members,
    //     };
    // }, [selectedRoom.members]);

    // const members = useFirestore('users', userCondition);

    // console.log(members);

    return (
        <AppContext.Provider
            value={{
                rooms,
                selectedRoom,
                isAddRoomVisible,
                setIsAddRoomVisible,
                selectedRoomId,
                setSelectedRoomId,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export { AppContext };
export default AppProvider;
