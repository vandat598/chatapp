import React from 'react';
import {Row, Col, Title, Button} from 'antd'

function Login() {
    return (
        <React.Fragment>
            <Row>
                <Col span={8}>
                    <Title>Fun Chat</Title>
                    <Button>
                        Đăng Nhập bằng Google
                    </Button>
                    <Button>
                        Đăng Nhập bằng Facebook
                    </Button>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Login;