import { Avatar, Typography } from 'antd';

function Message({ text, displayName, createdAt, photoURL }) {
    return (
        <div className="Message__wrapper">
            <div>
                <Avatar src={photoURL} />
                <Typography.Text className="author">
                    {displayName}
                </Typography.Text>
                <Typography.Text className="date">{createdAt}</Typography.Text>
            </div>
            <div>
                <Typography.Text className="content">{text}</Typography.Text>
            </div>
        </div>
    );
}

export default Message;
