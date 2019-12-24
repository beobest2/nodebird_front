import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { logoutAction } from '../reducers/user';


const UserProfile = () => {
    const dispatch = useDispatch();
    const onLogout = useCallback((e) => {
        e.preventDefault();
        dispatch(logoutAction);
    }, []);

    const { nickname, Postings, Followings, Followers } = useSelector(state => state.user.me);
    return (
        <>
        <Card
            actions={[
                <div key="posting">posting<br />{Postings.length}</div>,
                <div key="following">following<br />{Followings.length}</div>,
                <div key="follower">follower<br />{Followers.length}</div>
            ]}
        >
            <Card.Meta
                avatar={<Avatar>{nickname[0]}</Avatar>}
                title={nickname}
            />
        </Card>
        <Button type="primary" onClick={onLogout} loading={false}>logout</Button>
        </>
    );
}

export default UserProfile;