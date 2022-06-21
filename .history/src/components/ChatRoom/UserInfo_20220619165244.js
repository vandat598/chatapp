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

    const data = useContext(AuthContext);

    console.log({ data });

    return (
        <div className="wrapperStyled">
            <div>
                <Avatar src=".." alt="avatar" />
                <Typography.Text className="username">ABC</Typography.Text>
            </div>
            <Button ghost onClick={() => signOut(auth)}>
                Đăng xuất
            </Button>
        </div>
    );
}

export default UserInfo;
