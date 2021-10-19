import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const Login = () => {
    return (
        <div className="container p-5">
            
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{  }}>
                    <Button className="btn btn-primary" type="submit">Log in</Button>
                    </Col>
                </Form.Group>
            </Form>


            <button className="btn btn-info">Google Sign In</button>
        </div>
    );
};

export default Login;