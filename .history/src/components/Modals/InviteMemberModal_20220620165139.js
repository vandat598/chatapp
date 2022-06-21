import { Modal, Form, Select, Spin } from 'antd';
import { debounce } from 'lodash';
import { useContext, useState, useMemo } from 'react';

import { AppContext } from '../../Context/AppProvider.js';
import { AuthContext } from '../../Context/AuthProvider.js';

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
        />
    );
}

function InviteMemberModal() {
    const { isInviteMemberVisible, setIsInviteMemberVisible } =
        useContext(AppContext);

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
                <Form form={form} layout="vertical"></Form>
            </Modal>
        </div>
    );
}

export default InviteMemberModal;
