import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { auth, db } from '../../firebase/firebaseConfig.js';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';

const { Title } = Typography;

const fbProvider = FacebookAuthProvider();

function Login() {
    const handleFbLogin = () => {
        signInWithPopup(fbProvider);
    };

    return (
        <React.Fragment>
            <Row justify="center" style={{ height: 800 }}>
                <Col span={8}>
                    <Title style={{ textAlign: 'center' }} Level={3}>
                        Fun Chat
                    </Title>
                    <Button style={{ width: '100%', marginBottom: 5 }}>
                        Đăng Nhập bằng Google
                    </Button>
                    <Button style={{ width: '100%' }} onClick={handleFbLogin}>
                        Đăng Nhập bằng Facebook
                    </Button>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Login;
