import { Row, Col } from 'antd';

import Sidebar from './Sidebar.js';
import ChatWindow from './ChatWindow.js';
import './index_responsive.scss';
import { useState } from 'react';

function ChatRoom() {
    const [isOn, setIsOn] = useState(false);

    return (
        <div>
            <Row className={isOn ? 'mobile__menu' : ''}>
                <Col span={6} className={isOn ? 'col_sidebar' : ''}>
                    <Sidebar value={{ setIsOn, isOn }} />
                </Col>
                <Col span={18} className={isOn ? 'col_chatWindow' : ''}>
                    <ChatWindow />
                </Col>
            </Row>
        </div>
    );
}

export default ChatRoom;
