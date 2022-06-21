import { Button, Avatar, Typography } from 'antd';
import { signOut } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';

import { auth, db } from '../../firebase/firebaseConfig.js';
import './Userinfo.scss';

function UserInfo() {
    useEffect(() => {
        onSnapshot(doc(db, 'users', '7grX3d3gdXot5ywjKvX1'), snapshot => {
            // const data = snapshot.docs.map(doc => ({
            //     ...doc.data(),
            //     id: doc.id,
            // }));

            console.log({ data, snapshot, docs: snapshot.docs });
        });
    }, []);

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
