import { Row, Col, Button } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';

import Sidebar from './Sidebar.js';
import ChatWindow from './ChatWindow.js';
import './index.scss';

function ChatRoom() {
    return (
        <div>
            <Row>
                <Col span={6}>
                    <Sidebar />
                    <Button>
                        <UnorderedListOutlined />
                    </Button>
                </Col>
                <Col span={18}>
                    <ChatWindow />
                </Col>
            </Row>
        </div>
    );
}

export default ChatRoom;
