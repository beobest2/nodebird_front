import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { LOG_OUT_REQUEST } from '../reducers/user';


const UserProfile = () => {
    const dispatch = useDispatch();
    const onLogout = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type: LOG_OUT_REQUEST,
        },);
    }, []);

    const { nickname, Posts, Followings, Followers } = useSelector(state => state.user.me);
    return (
        <>
        <Card
            actions={[
                // <div key="posting">posting<br />{Posts.length}</div>,
                // <div key="following">following<br />{Followings.length}</div>,
                // <div key="follower">follower<br />{Followers.length}</div>
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