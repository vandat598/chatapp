import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import {
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
} from 'firebase/auth';

import { auth, db } from '../../firebase/firebaseConfig.js';

const { Title } = Typography;

const fbProvider = new FacebookAuthProvider();
const GgProvider = new GoogleAuthProvider();

function Login() {
    const handleFbLogin = () => {
        signInWithPopup(auth, fbProvider);
    };

    const handleGgLogin = () => {
        signInWithPopup(auth, GgProvider);
    };

    return (
        <React.Fragment>
            <Row justify="center" style={{ height: 800 }}>
                <Col span={8}>
                    <Title style={{ textAlign: 'center' }}>Fun Chat</Title>
                    <Button
                        style={{ width: '100%', marginBottom: 5 }}
                        onClick={handleFbLogin}
                    >
                        Đăng Nhập bằng Google
                    </Button>
                    <Button style={{ width: '100%' }} onClick={handleGgLogin}>
                        Đăng Nhập bằng Facebook
                    </Button>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Login;
