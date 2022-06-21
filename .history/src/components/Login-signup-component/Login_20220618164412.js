import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';

import { auth, db } from '../../firebase/firebaseConfig.js';

const { Title } = Typography;

const fbProvider = new FacebookAuthProvider();

function Login() {
    const handleFbLogin = () => {
        signInWithPopup(auth, fbProvider);
    };

    return (
        <React.Fragment>
            <Row justify="center" style={{ height: 800 }}>
                <Col span={8}>
                    <Title style={{ textAlign: 'center' }}>Fun Chat</Title>
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
