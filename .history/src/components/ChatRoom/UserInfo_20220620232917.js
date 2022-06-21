import { Button, Avatar, Typography } from 'antd';
import { signOut } from 'firebase/auth';
import { useContext, useRef } from 'react';

import { auth } from '../../firebase/firebaseConfig.js';
import './Userinfo.scss';
import { AuthContext } from '../../Context/AuthProvider.js';

function UserInfo() {
    const {
        user: { displayName, photoURL },
    } = useContext(AuthContext);

    var userName = useRef();

    return (
        <div className="wrapperStyled">
            <div>
                <Avatar src={photoURL}>
                    {photoURL ? '' : displayName?.charAt(0).toUpperCase()}
                </Avatar>
                <Typography.Text ref={userName} className="username">
                    {displayName}
                </Typography.Text>
            </div>
            <Button ghost onClick={() => signOut(auth)}>
                Đăng xuất
            </Button>
        </div>
    );
}

export { userName };
export default UserInfo;
