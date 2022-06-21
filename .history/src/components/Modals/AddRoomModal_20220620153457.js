import { Modal, Form, Input } from 'antd';
import { useContext } from 'react';
import { AppContext } from '../../Context/AppProvider.js';
import { AuthContext } from '../../Context/AuthProvider.js';
import { addDocument } from '../../firebase/services.js';

function AddRoomModal() {
    const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);
    const {
        user: { uid },
    } = useContext(AuthContext);
    const [form] = Form.useForm();

    const handleOk = () => {
        console.log({ formData: form.getFieldValue() });
        addDocument('rooms', { ...form.getFieldValue(), members: [uid] });

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
                <Form form={form} layout="vertical">
                    <Form.Item label="Tên Phòng" name="name">
                        <Input placeholder="Nhập tên phòng" />
                    </Form.Item>
                    <Form.Item label="Mô tả" name="description">
                        <Input.TextArea placeholder="Nhập mô tả" />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default AddRoomModal;
