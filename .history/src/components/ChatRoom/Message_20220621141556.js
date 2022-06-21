import { Avatar, Typography } from 'antd';
import { formatRelative } from 'date-fns/esm';
import './Message.scss';

import { AuthContext } from '../../Context/AuthProvider.js';
import { useContext } from 'react';

const formatDate = seconds => {
    let formattedDate = '';

    if (seconds) {
        formattedDate = formatRelative(new Date(seconds * 1000), new Date());

        formattedDate =
            formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }

    return formattedDate;
};

function Message({ text, displayName, createdAt, photoURL }) {
    const { nameUser } = useContext(AuthContext);

    // const myMess = document.querySelector('.username').innerText;
    console.log();
    return (
        <div
            className={nameUser === displayName ? 'myMess' : ''}
            className="Message__wrapper"
        >
            <div className="message-item">
                <div>
                    <Avatar size="small" src={photoURL}>
                        {photoURL ? '' : displayName?.charAt(0).toUpperCase()}
                    </Avatar>
                    <Typography.Text className="author">
                        {displayName}
                    </Typography.Text>
                    <Typography.Text className="date">
                        {formatDate(createdAt?.seconds)}
                    </Typography.Text>
                </div>
                <div>
                    <Typography.Text className="content">
                        {text}
                    </Typography.Text>
                </div>
            </div>
        </div>
    );
}

export default Message;
