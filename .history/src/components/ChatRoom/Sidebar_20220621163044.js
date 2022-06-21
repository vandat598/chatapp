import { Row, Col, Button } from 'antd';
import {UnorderedListOutlined} from '@ant-design/icons'

import UserInfo from './UserInfo.js';
import RoomList from './RoomList.js';
import './Sidebar.scss';

function Sidebar() {
    return (
        <div className="sidebar">
            <Row>
                <Col span={24}>
                    <UserInfo />
                </Col>
                <Col span={24}>
                    <RoomList />
                </Col>
                <Button>
                        <UnorderedListOutlined />
                        AAA
                    </Button>
            </Row>
        </div>
    );
}

export default Sidebar;
