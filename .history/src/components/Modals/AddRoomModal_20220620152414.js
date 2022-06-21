import { Modal, Form, Input } from 'antd';
import { useContext } from 'react';
import { AppContext } from '../../Context/AppProvider.js';

function AddRoomModal() {
    const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);

    const handleOk = () => {
        // logic

        setIsAddRoomVisible(false);
    };

    const handleCancel = () => {
        setIsAddRoomVisible(false);
    };

    return (
        <div>
            <Modal
                title="Tạo phòng"
                visible={isAddRoomVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form.Item label="Tên Phòng" name="name">
                    <Input placeholder="Nhập tên phòng" />
                </Form.Item>
                <Form.Item label="Mô tả" name="description">
                    <Input.TextArea placeholder="Nhập mô tả" />
                </Form.Item>
            </Modal>
        </div>
    );
}

export default AddRoomModal;
