import { UserAddOutlined } from '@ant-design/icons';
import { Button, Avatar, Tooltip } from 'antd';
import {Fragment} from 'react'

function ChatWindow() {
    return <Fragment>
        <div className='Header'>
            <div>
                <p>Room 1</p>
                <span>Tám chuyện mỗi ngày 1</span>
            </div>
            <div>
                <Button icon={<UserAddOutlined />}>Mời</Button>
                <Avatar.Group>
                    <Tooltip><Avatar>A</Avatar></Toolt>
                    
                </Avatar.Group>
            </div>
        </div>
        <div className='Content'></div>
    </Fragment>;
}

export default ChatWindow;
