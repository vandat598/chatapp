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

    console.log();
    return (
        <div
            className={
                nameUser === displayName
                    ? 'Message__wrapper myMess'
                    : 'Message__wrapper'
            }
        >
            <div className="message-item">
                <div className="message-box">
                    <Typography.Text className="date">
                        {formatDate(createdAt?.seconds)}
                    </Typography.Text>
                </div>
                <div className="message-box">
                    <Avatar size="small" src={photoURL}>
                        {photoURL ? '' : displayName?.charAt(0).toUpperCase()}
                    </Avatar>
                    <Typography.Text className="author">
                        {displayName}
                    </Typography.Text>
                </div>
                <div className="message-box">
                    <div id="box_text">
                        <Typography.Text>{text}</Typography.Text>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;
