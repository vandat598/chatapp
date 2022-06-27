import { Row, Col, Button } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';

import UserInfo from './UserInfo.js';
import RoomList from './RoomList.js';
import './Sidebar.scss';

function Sidebar(props) {
    const { setIsOn, isOn } = props.value;
    console.log(isOn);

    return (
        <div className="sidebar">
            <Row>
                <Col span={24} className="user_info">
                    <UserInfo />
                </Col>
                <Col span={24}>
                    <RoomList value={{ setIsOn, isOn }} />
                </Col>
                <Button
                    ghost
                    className="btn_mobile_menu"
                    onClick={() => setIsOn(!isOn)}
                >
                    <UnorderedListOutlined />
                </Button>
            </Row>
        </div>
    );
}

export default Sidebar;
