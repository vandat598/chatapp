import { useNavigate } from "react-router-dom";
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from '../firebase/firebaseConfig.js'

function AuthProvider() {
    const navigate = useNavigate();
    onAuthStateChanged(auth, user => {
        console.log({ user });
        if (user) {
            navigate('/', { replace: true });
        }
    });

    return (

    )
}

export default AuthProvider