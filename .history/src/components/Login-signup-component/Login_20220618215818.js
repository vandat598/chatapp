import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import {
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
} from 'firebase/auth';

import { auth, db } from '../../firebase/firebaseConfig.js';
import { collection, addDoc } from 'firebase/firestore';

const { Title } = Typography;

const fbProvider = new FacebookAuthProvider();
const GgProvider = new GoogleAuthProvider();

function Login() {
    const handleFbLogin = async () => {
        const { _tokenResponse, user } = await signInWithPopup(
            auth,
            fbProvider
        );

        if (_tokenResponse.isNewUser) {
            try {
                const docRef = addDoc(collection(db, 'test'), {
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    uid: user.uid,
                    providerId: _tokenResponse.providerId,
                });
                console.log(docRef);
            } catch (e) {
                console.error(e);
            }
        }
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
                        onClick={handleGgLogin}
                    >
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
