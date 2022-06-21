import { UserAddOutlined } from '@ant-design/icons';
import { Button, Avatar, Tooltip, Form, Input, Alert } from 'antd';
import { useContext, Fragment } from 'react';
import { AppContext } from '../../Context/AppProvider.js';

import './ChatWindow.scss';
import Message from './Message.js';

function ChatWindow() {
    const { selectedRoom, members, setIsInviteMemberVisible } =
        useContext(AppContext);

    return (
        <div className="ChatWindow__wrapper">
            {selectedRoom.id ? (
                <Fragment>
                    <div className="header">
                        <div className="header__info">
                            <p className="header__title">{selectedRoom.name}</p>
                            <span className="header_desc">
                                {selectedRoom.description}
                            </span>
                        </div>
                        <div className="button_group">
                            <Button
                                icon={<UserAddOutlined />}
                                type="text"
                                onClick={() => setIsInviteMemberVisible(true)}
                            >
                                Mời
                            </Button>
                            <Avatar.Group size="small" maxCount={2}>
                                {members.map(member => (
                                    <Tooltip
                                        key={member.id}
                                        title={member.displayName}
                                    >
                                        <Avatar src={member.photoURL}>
                                            {member.photoURL
                                                ? ''
                                                : member.displayName?.charAt(0)
                                                      .toUpperCase}
                                        </Avatar>
                                    </Tooltip>
                                ))}
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
                </Fragment>
            ) : (
                <Alert
                    message="Hãy chọn phòng"
                    type="info"
                    showIcon
                    style={{ margin: 5 }}
                    closable
                />
            )}
        </div>
    );
}

export default ChatWindow;
