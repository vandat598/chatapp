import { UserAddOutlined } from '@ant-design/icons';
import { Button, Avatar, Tooltip, Form, Input } from 'antd';
import { useContext } from 'react';
import { AppProvider } from '../../Context/AppProvider.js';

import './ChatWindow.scss';
import Message from './Message.js';

function ChatWindow() {
    const { rooms, setSelectedRoomId } = useContext(AppProvider);
    console.log(rooms, setSelectedRoomId);

    return (
        <div className="ChatWindow__wrapper">
            <div className="header">
                <div className="header__info">
                    <p className="header__title">Room 1</p>
                    <span className="header_desc">Tám chuyện mỗi ngày 1</span>
                </div>
                <div className="button_group">
                    <Button icon={<UserAddOutlined />} type="text">
                        Mời
                    </Button>
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

            <div className="Content">
                <div className="message-list">
                    <Message
                        text="Test"
                        photoURL={null}
                        displayName="Tung"
                        createdAt={123123123123123}
                    />
                    <Message
                        text="Test"
                        photoURL={null}
                        displayName="Tung"
                        createdAt={123123123123123}
                    />
                    <Message
                        text="Test"
                        photoURL={null}
                        displayName="Tung"
                        createdAt={123123123123123}
                    />
                    <Message
                        text="Test"
                        photoURL={null}
                        displayName="Tung"
                        createdAt={123123123123123}
                    />
                </div>
                <Form className="form">
                    <Form.Item>
                        <Input
                            placeholder="Nhập tin nhắn"
                            bordered={false}
                            autoComplete="off"
                        />
                    </Form.Item>
                    <Button type="primary">Gửi</Button>
                </Form>
            </div>
        </div>
    );
}

export default ChatWindow;
