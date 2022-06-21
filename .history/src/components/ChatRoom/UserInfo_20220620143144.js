import { Button, Avatar, Typography } from 'antd';
import { signOut } from 'firebase/auth';
import { useContext } from 'react';

import { auth } from '../../firebase/firebaseConfig.js';
import './Userinfo.scss';
import { AuthContext } from '../../Context/AuthProvider.js';
// import useFirestore from '../../hooks/useFirestore.js';

function UserInfo() {
    // useFirestore();

    const {
        user: { displayName, photoURL },
    } = useContext(AuthContext);

    return (
        <div className="wrapperStyled">
            <div>
                <Avatar src={photoURL}>
                    {photoURL ? '' : displayName?.charAt(0).toUpperCase()}
                </Avatar>
                <Typography.Text className="username">
                    {displayName}
                </Typography.Text>
            </div>
            <Button ghost onClick={() => signOut(auth)}>
                Đăng xuất
            </Button>
        </div>
    );
}

export default UserInfo;
