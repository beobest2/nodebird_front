import React, { useState, useCallback, useEffect } from 'react';
import { Button, Icon, Card, Avatar, Form, Input, List, Comment } from 'antd';
import Link from 'next/Link';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';

const PostCard = ({ post }) => {
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const [commentText, setCommentText] = useState('');
    const { me } = useSelector(state => state.user);
    const { isAddingComment, commentAdded } = useSelector(state => state.post);
    const dispatch = useDispatch();

    const onToggleComment = useCallback(() => {
        setCommentFormOpened(prev => !prev);
    }, []);

    const onSubmitComment = useCallback((e) => {
        e.preventDefault();
        if (!me) {
            return alert('you need to login first!');
        }
        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: {
                postId: post.id,
            },
        })
    }, [me && me.id]);

    useEffect(() => {
        setCommentText('');
    }, [commentAdded === true])

    const onChangeCommentText = useCallback((e) => {
        setCommentText(e.target.value);
    }, []);

    return (
        <div>
            <Card
                key = {+post.createdAt}
                cover = {post.img && <img alt="example" src={post.img} />}
                actions = {[
                    <Icon type="retweet" key="retweet" />,
                    <Icon type="heart" key="heart" />,
                    <Icon type="message" key="message" onClick={onToggleComment} />,
                    <Icon type="ellipsis" key="ellipsis" />,
                ]}
                extra={<Button>follow</Button>}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={(
                        <div>{post.content.split(/(#[^\s]+)/g).map((v) => {
                            if (v.match(/#[^\s]+/)) {
                                return (
                                    <Link href="/hashtag" key={v}><a>{v}</a></Link>
                                );
                            }
                            return v;
                        })}
                        </div>
                    )}
                />
            </Card>
            {commentFormOpened && (
                <>
                    <Form onSubmit={onSubmitComment}>
                        <Form.Item>
                            <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText}/>
                        </Form.Item>
                        <Button type="primary" htmlType="submit" loading={isAddingComment}>comment</Button>
                    </Form>
                    <List 
                        header={`${post.Comments ? post.Comments.length : 0} comments`}
                        itemLayout="horizontal"
                        dataSource={post.Comments || []}
                        renderItem={item => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </>
            )}
        </div>

    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        User: PropTypes.object,
        content: PropTypes.string,
        img: PropTypes.string,
        creatAt: PropTypes.object,
    }),
};

export default PostCard;