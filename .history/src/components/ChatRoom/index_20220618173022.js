import { Row, Col } from 'antd';

import Sidebar from './Sidebar.js';
import ChatWindow from './ChatWindow.js';

function ChatRoom() {
    return (
        <div>
            <Row>
                <Col span={6}>
                    <Sidebar />
                </Col>
                <Col span={18}>
                    <ChatWindow />
                </Col>
            </Row>
        </div>
    );
}

export default ChatRoom;
