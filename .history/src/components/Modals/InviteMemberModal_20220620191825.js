import { Modal, Form, Select, Spin, Avatar } from 'antd';
import { debounce } from 'lodash';
import { useContext, useState, useMemo } from 'react';

import { AppContext } from '../../Context/AppProvider.js';
import { AuthContext } from '../../Context/AuthProvider.js';
import { db } from '../../firebase/firebaseConfig.js';

// sẽ chỉ gọi API sau 300ms, giúp cải thiện performance
function DebounceSelect({ fetchOptions, debounceTimeout = 300, ...props }) {
    const [fetching, setFetching] = useState(false);
    const [options, setOptions] = useState([]);

    const debounceFetcher = useMemo(() => {
        const loadOptions = value => {
            setOptions([]);
            setFetching(true);

            fetchOptions(value).then(newOptions => {
                setOptions(newOptions);
                setFetching(false);
            });
        };

        return debounce(loadOptions, debounceTimeout);
    }, [debounceTimeout, fetchOptions]);

    return (
        <Select
            labelInValue
            onSearch={debounceFetcher}
            notFoundContent={fetching ? <Spin size="small" /> : null}
            {...props}
        >
            {options.map(opt => (
                <Select.Option>
                    <Avatar size="small" src={opt.photoURL}>
                        {opt.photoURL
                            ? ''
                            : opt.displayName?.charAt(0).toUpperCase}
                    </Avatar>
                    {` ${opt.label}`}
                </Select.Option>
            ))}
        </Select>
    );
}

async function fetchUserList(search) {
    return db;
}

function InviteMemberModal() {
    const { isInviteMemberVisible, setIsInviteMemberVisible } =
        useContext(AppContext);
    const [value, setValue] = useState([]);

    const {
        user: { uid },
    } = useContext(AuthContext);
    const [form] = Form.useForm();

    const handleOk = () => {
        setIsInviteMemberVisible(false);
        form.resetFields();
    };

    const handleCancel = () => {
        setIsInviteMemberVisible(false);
        form.resetFields();
    };

    return (
        <div>
            <Modal
                title="Mời thành viên"
                visible={isInviteMemberVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form form={form} layout="vertical">
                    <DebounceSelect
                        mode="multiple"
                        label="Tên thành viên"
                        value={value}
                        placeholder="Nhập tên thành viên"
                        fetchOptions={fetchUserList}
                        onChange={newValue => setValue(newValue)}
                        style={{ width: '100%' }}
                    />
                </Form>
            </Modal>
        </div>
    );
}

export default InviteMemberModal;
