import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import {
    FacebookAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { auth, db } from '../../firebase/firebaseConfig.js';

const { Title } = Typography;

const fbProvider = new FacebookAuthProvider();

function Login() {
    const navigate = useNavigate();

    const handleFbLogin = () => {
        signInWithPopup(auth, fbProvider);
    };

    onAuthStateChanged(auth, user => {
        console.log({ user });
        if (user) {
            navigate('/chatroom', { replace: true });
        }
    });

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
