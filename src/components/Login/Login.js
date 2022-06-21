import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import {
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
} from 'firebase/auth';

import { auth } from '../../firebase/firebaseConfig.js';
import { addDocument, generateKeywords } from '../../firebase/services.js';
import './Login.scss';

const { Title } = Typography;

const fbProvider = new FacebookAuthProvider();
const GgProvider = new GoogleAuthProvider();

function Login() {
    const handleLogin = async userAccout => {
        const { _tokenResponse, user } = await signInWithPopup(
            auth,
            userAccout
        );

        if (_tokenResponse.isNewUser) {
            addDocument('users', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: _tokenResponse.providerId,
                keywords: generateKeywords(user.displayName),
            });
        }
    };

    // const handleGgLogin = () => {
    //     const { _tokenResponse, user } = signInWithPopup(auth, GgProvider);

    //     if (_tokenResponse.isNewUser) {
    //         addDocument('users', {
    //             displayName: user.displayName,
    //             email: user.email,
    //             photoURL: user.photoURL,
    //             uid: user.uid,
    //             providerId: _tokenResponse.providerId,
    //             keywords: generateKeywords(user.displayName),
    //         });
    //     }
    // };

    return (
        <React.Fragment>
            <Row justify="center" style={{ height: 800, marginTop: '20%' }}>
                <Col span={8} className="respon_mobile">
                    <Title style={{ textAlign: 'center' }}>Fun Chat</Title>
                    <Button
                        style={{ width: '100%', marginBottom: 5 }}
                        onClick={() => {
                            handleLogin(GgProvider);
                        }}
                    >
                        Đăng Nhập bằng Google
                    </Button>
                    <Button
                        style={{ width: '100%' }}
                        onClick={() => {
                            handleLogin(fbProvider);
                        }}
                    >
                        Đăng Nhập bằng Facebook
                    </Button>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Login;
