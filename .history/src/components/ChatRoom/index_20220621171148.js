import { Row, Col } from 'antd';

import Sidebar from './Sidebar.js';
import ChatWindow from './ChatWindow.js';
import './index.scss';
import { useState } from 'react';

function ChatRoom() {
    const [isOn, setIsOn] = useState(false);
    const test = 555;

    const handleMobileMenu = () => {
        setIsOn(!isOn);
    };
    return (
        <div>
            <Row>
                <Col span={6} className={isOn ? 'col_sidebar' : ''}>
                    <Sidebar prop={{ handleMobileMenu, isOn, test }} />
                </Col>
                <Col span={18} className={isOn ? 'col_chatWindow' : ''}>
                    <ChatWindow />
                </Col>
            </Row>
        </div>
    );
}

export default ChatRoom;
