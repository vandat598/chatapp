import { Row, Col } from 'antd';

import Sidebar from './Sidebar.js';
import ChatWindow from './ChatWindow.js';
import './index.scss';
import { useState } from 'react';
import { useRef } from 'react';

function ChatRoom() {
    const colSidebar = useRef();
    const [isOn, setIsOn] = useState(false);

    const handleMobileMenu = () => {
        setIsOn(!isOn);
    };
    return (
        <div>
            <Row>
                <Col
                    span={6}
                    ref={colSidebar}
                    className={isOn ? 'col_sidebar' : ''}
                >
                    <Sidebar value={{ handleMobileMenu, isOn, colSidebar }} />
                </Col>
                <Col span={18} className={isOn ? 'col_chatWindow' : ''}>
                    <ChatWindow />
                </Col>
            </Row>
        </div>
    );
}

export default ChatRoom;
