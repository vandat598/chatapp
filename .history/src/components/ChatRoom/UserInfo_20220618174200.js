import { Button, Avatar, Typography } from 'antd';

function UserInfo() {
    return (
        <div>
            <div>
                <Avatar src=".." alt="avatar" />
                <Typography.Text>ABC</Typography.Text>
            </div>
            <Button>Đăng xuất</Button>
        </div>
    );
}

export default UserInfo;
