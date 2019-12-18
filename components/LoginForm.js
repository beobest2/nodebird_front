import React, { useCallback } from 'react';
import Link from 'next/link';
import { Input, Button, Form } from 'antd';
import  { useInput } from '../pages/signup';

const LoginForm = () => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
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
                <Button type="primary" htmlType="submit" loading={false}>login</Button>
                <Button><Link href="/signup"><a>Sign up</a></Link></Button>
            </div>
            
        </Form>
        );
}

export default LoginForm;