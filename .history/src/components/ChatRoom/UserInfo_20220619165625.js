import { Button, Avatar, Typography } from 'antd';
import { signOut } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useContext } from 'react';

import { auth, db } from '../../firebase/firebaseConfig.js';
import './Userinfo.scss';
import { AuthContext } from '../../Context/AuthProvider.js';

function UserInfo() {
    // useEffect(() => {
    //     onSnapshot(doc(db, 'users', '7grX3d3gdXot5ywjKvX1'), snapshot => {
    //         // const data = snapshot.docs.map(doc => ({
    //         //     ...doc.data(),
    //         //     id: doc.id,
    //         // }));
    //         console.log({ snapshot, docs: snapshot.data() });
    //     });
    // }, []);

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
