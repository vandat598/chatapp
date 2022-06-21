import { Button, Avatar, Typography } from 'antd';
import { signOut } from 'firebase/auth';

import { auth } from '../../firebase/firebaseConfig.js';
import './Userinfo.scss';

function UserInfo() {
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
