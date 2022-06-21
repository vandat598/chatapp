import { Row, Col } from 'antd';

import Sidebar from './Sidebar.js';
import ChatWindow from './ChatWindow.js';
import './index.scss';

function ChatRoom() {
    return (
        <div>
            <Row>
                <Col span={6} className="col_sidebar">
                    <Sidebar />
                </Col>
                <Col span={18} className="col_chatWindow">
                    <ChatWindow />
                </Col>
            </Row>
        </div>
    );
}

export default ChatRoom;
