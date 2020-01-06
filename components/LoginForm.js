import React, { useCallback } from 'react';
import Link from 'next/link';
import { Input, Button, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import  { useInput } from '../pages/signup';
import { LOG_IN_REQUEST } from '../reducers/user';

const LoginForm = () => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const { isLoggingIn } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        dispatch({
                type: LOG_IN_REQUEST,
                data: {
                    id, password,
                },
            },
        );
        console.log({id, password});
    }, [id, password]);

    return (
        <Form onSubmit={onSubmitForm} style={{padding: '10px'}}>
            <div>
                <label htmlFor="user-id">ID</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">Password</label>
                <br />
                <Input name="user-password" value={password} onChange={onChangePassword} type="password" required />
            </div>
            <div style={{marginTop: '10px'}}>
                <Button type="primary" htmlType="submit" loading={isLoggingIn}>login</Button>
                <Button><Link href="/signup"><a>Sign up</a></Link></Button>
            </div>
        </Form>
        );
}

export default LoginForm;