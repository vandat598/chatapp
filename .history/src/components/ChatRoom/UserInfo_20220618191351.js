import { Button, Avatar, Typography } from 'antd';
import './Userinfo.scss';

function UserInfo() {
    return (
        <div className="wrapperStyled">
            <div>
                <Avatar src=".." alt="avatar" />
                <Typography.Text className="username">ABC</Typography.Text>
            </div>
            <Button ghost>Đăng xuất</Button>
        </div>
    );
}

export default UserInfo;
