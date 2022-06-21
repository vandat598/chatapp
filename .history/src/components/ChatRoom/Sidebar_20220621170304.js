import { Row, Col, Button } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';

import UserInfo from './UserInfo.js';
import RoomList from './RoomList.js';
import './Sidebar.scss';
import { useEffect } from 'react';

function Sidebar({ handleMobileMenu, isOn }) {
    useEffect(() => {
        console.log(isOn);
    });

    return (
        <div className="sidebar">
            <Row>
                <Col span={24} className="user_info">
                    <UserInfo />
                </Col>
                <Col span={24}>
                    <RoomList />
                </Col>
                <Button
                    ghost
                    className="mobile_menu"
                    onClick={handleMobileMenu}
                >
                    <UnorderedListOutlined />
                </Button>
            </Row>
        </div>
    );
}

export default Sidebar;
