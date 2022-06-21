import { Row, Col } from 'antd';

import UserInfo from './UserInfo.js';
import RoomList from './RoomList.js';

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
            </Row>
        </div>
    );
}

export default Sidebar;
