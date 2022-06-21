import { Collapse, Typography, Button } from 'antd';
import './RoomList.scss';

function RoomList() {
    return (
        <Collapse ghost defaultActiveKey={['1']}>
            <Collapse.Panel
                header="Danh sách các phòng"
                Key="1"
                className="collapse__panel"
            >
                <Typography.Link>Room 1</Typography.Link>
                <Typography.Link>Room 2</Typography.Link>
                <Typography.Link>Room 3</Typography.Link>
                <Button>Thêm phòng</Button>
            </Collapse.Panel>
        </Collapse>
    );
}

export default RoomList;
