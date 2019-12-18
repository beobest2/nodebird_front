import React, { useState, useCallback } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';

export const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const hander = useCallback((e) => {
        setter(e.target.value);
    }, []);
    return [value, hander];
}

const Signup = () => {
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    const [id, onChangeId] = useInput('');
    const [nick, onChangeNick] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmit = useCallback((e) => {
        e.preventDefault();

        if (password !== passwordCheck) {
            return setPasswordError(true);
        }

        if (!term) {
            return setTermError(true);
        }

        console.log({
            id,
            nick,
            password,
            passwordCheck,
            term
        });
    }, [password, passwordCheck, term]);

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    }, [password]);

    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
    }, []);

    return (
        <div>
            <Form onSubmit={onSubmit} style={{padding: 20}}>
                <div>
                    <label htmlFor="user-id">ID</label>
                    <br />
                    <Input name="user-id" value={id} required onChange={onChangeId} />
                </div>
                <br />
                <br />
                <div>
                    <label htmlFor="user-nick">NickName</label>
                    <br />
                    <Input name="user-nick" value={nick} required onChange={onChangeNick} />
                </div>
                <br />
                <br />
                <div>
                    <label htmlFor="user-pass">Password</label>
                    <br />
                    <Input name="user-pass" type="password" value={password} required onChange={onChangePassword} />
                </div>
                <br />
                <br />
                <div>
                    <label htmlFor="user-password-check">Password Check</label>
                    <br />
                    <Input name="user-password-check" type="password" required value={passwordCheck} onChange={onChangePasswordCheck} />
                    {passwordError && <div style={{color: 'red'}}>miss match password</div>}
                </div>
                <br />
                <br />
                <div>
                    <Checkbox name="user-term" value={term} onChange={onChangeTerm}>I agree that term!</Checkbox>
                    {termError && <div style={{color: 'red'}}>you have to agree!!</div>}
                </div>
                <br />
                <br />
                <div style={{marginTop: 10}}>
                    <Button type="primary" htmlType="submit">Sign up</Button>
                </div>
            </Form>
        </div>  
    );
};

export default Signup;