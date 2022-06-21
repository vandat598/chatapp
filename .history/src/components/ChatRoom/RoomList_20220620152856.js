import { Collapse, Typography, Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { useContext } from 'react';

import './RoomList.scss';
import { AppContext } from '../../Context/AppProvider.js';

function RoomList() {
    const { rooms, setIsAddRoomVisible } = useContext(AppContext);

    const handleAddRoom = () => {
        setIsAddRoomVisible(true);
    };

    return (
        <Collapse ghost defaultActiveKey={['1']}>
            <Collapse.Panel
                header="Danh sách các phòng"
                Key="1"
                className="collapse__panel"
            >
                {rooms.map(room => (
                    <Typography.Link key={room.id}>{room.name}</Typography.Link>
                ))}
                <Button
                    type="text"
                    icon={<PlusSquareOutlined />}
                    className="add-room"
                    onClick={handleAddRoom}
                >
                    Thêm phòng
                </Button>
            </Collapse.Panel>
        </Collapse>
    );
}

export default RoomList;
