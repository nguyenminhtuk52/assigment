import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { signup } from '../api/auth';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormInputs = {
    name: string,
    email: string,
    password: string | number
}
const Signin = () => {
    return (
        <div>
            <Form style={{ maxWidth: '1200px', margin: 'auto' }} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nhập Email Của Bạn</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <button style={{borderRadius:'5px',width:'550px',height:'40px',backgroundColor:'gray',marginLeft:'250px'}}>Đăng Nhập</button>
            </Form>
        </div>
    )
}
export default Signin