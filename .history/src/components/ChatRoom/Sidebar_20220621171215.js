import { Row, Col, Button } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';

import UserInfo from './UserInfo.js';
import RoomList from './RoomList.js';
import './Sidebar.scss';
import { useEffect } from 'react';

function Sidebar(props) {
    const { handleMobileMenu, isOn, test } = props;

    useEffect(() => {
        console.log({ isOn, handleMobileMenu, test });
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
                    onClick={() => {
                        console.log(123);
                    }}
                >
                    <UnorderedListOutlined />
                </Button>
            </Row>
        </div>
    );
}

export default Sidebar;
