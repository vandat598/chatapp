import { Collapse, Typography, Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';

import './RoomList.scss';
// import useFirestore from '../../hooks/useFirestore';
// import { useContext, useMemo } from 'react';
// import { AuthContext } from '../../Context/AuthProvider';

function RoomList() {
    // const {
    //     user: { uid },
    // } = useContext(AuthContext);

    // const roomsCondition = useMemo(() => {
    //     return {
    //         fieldName: 'createdAt',
    //         operator: '==',
    //         compareValue: uid,
    //     };
    // }, [uid]);

    // const rooms = useFirestore('rooms', roomsCondition);

    // console.log({ rooms });

    return (
        <Collapse ghost defaultActiveKey={['1']}>
            <Collapse.Panel
                header="Danh sách các phòng"
                Key="1"
                className="collapse__panel"
            >
                {/* {rooms.map(room => (
                    <Typography.Link key={room.id}>{room.name}</Typography.Link>
                ))} */}
                <Typography.Link>room 1</Typography.Link>
                <Button
                    type="text"
                    icon={<PlusSquareOutlined />}
                    className="add-room"
                >
                    Thêm phòng
                </Button>
            </Collapse.Panel>
        </Collapse>
    );
}

export default RoomList;
