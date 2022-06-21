import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, createContext } from 'react';
import { useState } from 'react';
import { Spin } from 'antd';

import { auth } from '../firebase/firebaseConfig.js';

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, user => {
            console.log({ user });
            if (user) {
                const { displayName, email, uid, photoURL } = user;
                setUser({ displayName, email, uid, photoURL });
                setIsLoading(false);
                navigate('/');
            } else {
                navigate('/login');
                setIsLoading(false);
            }
        });

        // clean fc
        return () => {
            unsubcribe();
        };
    }, [navigate]);

    return (
        <AuthContext.Provider value={{ user }}>
            {isLoading ? <Spin /> : children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
