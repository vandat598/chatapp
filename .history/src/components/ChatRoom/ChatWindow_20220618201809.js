import { UserAddOutlined } from '@ant-design/icons';
import { Button, Avatar, Tooltip } from 'antd';
import { Fragment } from 'react';

function ChatWindow() {
    return (
        <Fragment>
            <div className="Header">
                <div>
                    <p>Room 1</p>
                    <span>Tám chuyện mỗi ngày 1</span>
                </div>
                <div>
                    <Button icon={<UserAddOutlined />}>Mời</Button>
                    <Avatar.Group size="small" maxCount={2}>
                        <Tooltip title="A">
                            <Avatar>A</Avatar>
                        </Tooltip>
                        <Tooltip title="A">
                            <Avatar>B</Avatar>
                        </Tooltip>
                        <Tooltip title="A">
                            <Avatar>C</Avatar>
                        </Tooltip>
                        <Tooltip title="A">
                            <Avatar>D</Avatar>
                        </Tooltip>
                    </Avatar.Group>
                </div>
            </div>
            <div className="Content"></div>
        </Fragment>
    );
}

export default ChatWindow;
