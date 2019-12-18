import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col } from 'antd';
import LoginForm from './LoginForm';
import UserProfile from '../components/UserProfile';

const dummy = {
    nickname: "jaden",
    Postings: [],
    Followings: [1, 2, 3],
    Followers: [1, 2],
    isLogedin: true,
};

const AppLayout = ({ children }) => {
    console.log('app layout rendered');
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>Node Bird</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>Profile</a></Link></Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{ verticalAlign: 'middle' }}></Input.Search>
                </Menu.Item>
            </Menu>
            <Row gutter={10}>
                <Col xs={24} md={3}>
                    {dummy.isLogedin ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={3}>
                    {''}
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node,
};

export default AppLayout;