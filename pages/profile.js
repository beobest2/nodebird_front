import React from 'react';
import { Button, List, Card, Icon } from 'antd';
import { useSelector } from 'react-redux';

import NicknameEditForm from '../components/NicknameEditForm';

const Profile = () => {
    const { Followings, Followers } = useSelector(state => state.user.me);
    return (
        <div>
            <NicknameEditForm />
            <List 
                style={{ marginBottom: '20px' }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>follower list</div>}
                loadMore={<Button style={{width: "100%"}}> more </Button>}
                bordered
                dataSource={Followers}
                renderItem={item => (
                    <List.Item style={{marginTop: '20px'}}>
                        <Card actions={[<Icon type="stop" />]}>
                            <Card.Meta description={item} />
                        </Card>
                    </List.Item>
                )}
            />
            <List 
                style={{ marginBottom: '20px' }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>following list</div>}
                loadMore={<Button style={{width: "100%"}}> more </Button>}
                bordered
                dataSource={Followings}
                renderItem={item => (
                    <List.Item style={{marginTop: '20px'}}>
                        <Card actions={[<Icon type="stop" />]}>
                            <Card.Meta description={item} />
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default Profile;