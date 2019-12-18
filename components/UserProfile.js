import React, { useCallback } from 'react';
import { Card, Avatar } from 'antd';

const dummy = {
    nickname: "jaden",
    Postings: [],
    Followings: [1, 2, 3],
    Followers: [1, 2],
    isLogedin: false,
};

const UserProfile = () => {
    return (
        <Card
            actions={[
                <div key="posting">posting<br />{dummy.Postings.length}</div>,
                <div key="following">following<br />{dummy.Followings.length}</div>,
                <div key="follower">follower<br />{dummy.Followers.length}</div>
            ]}
        >
            <Card.Meta
                avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
                title={dummy.nickname}
            />
        </Card>
    );
}

export default UserProfile;