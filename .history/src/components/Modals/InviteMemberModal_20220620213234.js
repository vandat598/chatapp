import { Modal, Form, Select, Spin, Avatar } from 'antd';
import { debounce } from 'lodash';
import { useContext, useState, useMemo } from 'react';
import {
    query,
    where,
    collection,
    orderBy,
    limit,
    getDocs,
    updateDoc,
    doc,
} from 'firebase/firestore';

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

            fetchOptions(value, props.curMembers).then(newOptions => {
                setOptions(newOptions);
                setFetching(false);
            });
        };

        return debounce(loadOptions, debounceTimeout);
    }, [fetchOptions, debounceTimeout, props.curMembers]);

    return (
        <Select
            labelInValue
            filterOption={false}
            onSearch={debounceFetcher}
            notFoundContent={fetching ? <Spin size="small" /> : null}
            {...props}
        >
            {options.map((opt, index) => {
                return (
                    <Select.Option
                        key={index}
                        value={opt.value}
                        title={opt.label}
                    >
                        <Avatar size="small" src={opt.photoURL}>
                            {opt.photoURL
                                ? ''
                                : opt.label?.charAt(0).toUpperCase()}
                        </Avatar>
                        {` ${opt.label}`}
                    </Select.Option>
                );
            })}
        </Select>
    );
}

async function fetchUserList(search, curMembers) {
    const querySearch = query(
        collection(db, 'users'),
        where('keywords', 'array-contains', search),
        orderBy('displayName'),
        limit(20)
    );
    console.log(querySearch);
    const resultSearch = getDocs(querySearch).then(snapshot => {
        console.log({ docs: snapshot.docs[0].data() });

        const test = snapshot.docs.map(doc => ({
            label: doc.data().displayName,
            value: doc.data().uid,
            photoURL: doc.data().photoURL,
        }));
        const test1 = test.filter(opt => curMembers.includes(opt.value));
        console.log({test, test1});
        return test;
    });
    return resultSearch;
}

// Invite Members ----------------------------------------------------------------------
function InviteMemberModal() {
    const {
        isInviteMemberVisible,
        setIsInviteMemberVisible,
        selectedRoomId,
        selectedRoom,
    } = useContext(AppContext);
    const [value, setValue] = useState([]);

    const {
        user: { uid },
    } = useContext(AuthContext);
    const [form] = Form.useForm();

    const handleOk = () => {
        form.resetFields();

        updateDoc(doc(db, 'rooms', selectedRoomId), {
            members: [...selectedRoom.members, ...value.map(val => val.value)],
        });

        setIsInviteMemberVisible(false);
    };

    const handleCancel = () => {
        form.resetFields();
        setIsInviteMemberVisible(false);
    };

    console.log({ value });

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
                        curMembers={selectedRoom.members}
                    />
                </Form>
            </Modal>
        </div>
    );
}

export default InviteMemberModal;
