import { Collapse, Typography } from 'antd';

function RoomList() {
    return (
        <Collapse defaultActiveKey={['1']}>
            <Collapse.Panel header="Danh sách các phòng" Key="1">
                <Typography.Link>Room 1</Typography.Link>
                <Typography.Link>Room 2</Typography.Link>
                <Typography.Link>Room 3</Typography.Link>
            </Collapse.Panel>
        </Collapse>
    );
}

export default RoomList;
