import { Avatar, Typography } from 'antd';
import './Message.scss';

const formatDate = (seconds) =>{
    let formattedDate = '';

    if(seconds) {
        formattedDate = ...
    }
}


function Message({ text, displayName, createdAt, photoURL }) {
    return (
        <div className="Message__wrapper">
            <div>
                <Avatar size="small" src={photoURL} />
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
