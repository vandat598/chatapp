import { UserAddOutlined } from '@ant-design/icons';
import { Button, Avatar, Tooltip, Form, Input, Alert } from 'antd';
import { useContext, Fragment, useState, useMemo } from 'react';
import { AppContext } from '../../Context/AppProvider.js';
import { AuthContext } from '../../Context/AuthProvider.js';

import './ChatWindow.scss';
import Message from './Message.js';
import { addDocument } from '../../firebase/services.js';
import useFirestore from '../../hooks/useFirestore.js';

function ChatWindow() {
    const { selectedRoom, members, setIsInviteMemberVisible } =
        useContext(AppContext);
    const {
        user: { uid, photoURL, displayName },
    } = useContext(AuthContext);
    const [inputValue, setInputValue] = useState('');
    const [form] = Form.useForm();

    const handleInputChange = e => {
        setInputValue(e.target.value);
    };

    const handleOnSubmit = () => {
        addDocument('messages', {
            text: inputValue,
            uid,
            photoURL,
            roomId: selectedRoom.id,
            displayName,
        });

        const chatScroll = document.querySelector('.message-list');
        form.resetFields(['message']);
        chatScroll.scrollTop = chatScroll.scrollHeight;
        // setTimeout(() => {
        // }, 100);
    };

    const messCondition = useMemo(
        () => ({
            fieldName: 'roomId',
            operator: '==',
            compareValue: selectedRoom.id,
        }),
        [selectedRoom.id]
    );

    const messages = useFirestore('messages', messCondition);
    console.log({ messages });

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
                                                : member.displayName
                                                      ?.charAt(0)
                                                      .toUpperCase()}
                                        </Avatar>
                                    </Tooltip>
                                ))}
                            </Avatar.Group>
                        </div>
                    </div>

                    <div className="Content">
                        <div className="message-list">
                            {messages.map(mess => (
                                <Message
                                    key={mess.id}
                                    text={mess.text}
                                    photoURL={mess.photoURL}
                                    displayName={mess.displayName}
                                    createdAt={mess.createdAt}
                                />
                            ))}
                        </div>
                        <Form className="form" form={form}>
                            <Form.Item name="message">
                                <Input
                                    onChange={handleInputChange}
                                    onPressEnter={handleOnSubmit}
                                    placeholder="Nhập tin nhắn"
                                    bordered={false}
                                    autoComplete="off"
                                />
                            </Form.Item>
                            <Button type="primary" onClick={handleOnSubmit}>
                                Gửi
                            </Button>
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
