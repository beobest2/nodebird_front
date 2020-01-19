import React, { useState, useCallback, useEffect } from 'react';
import { Button, Icon, Card, Avatar, Form, Input, List, Comment } from 'antd';
import Link from 'next/Link';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_COMMENT_REQUEST, LOAD_COMMENTS_REQUEST, UNLIKE_POST_REQUEST, LIKE_POST_REQUEST, RETWEET_REQUEST } from '../reducers/post';
import PostImages from './PostImages';

const PostCard = ({ post }) => {
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const [commentText, setCommentText] = useState('');
    const { me } = useSelector(state => state.user);
    const { isAddingComment, commentAdded } = useSelector(state => state.post);
    const dispatch = useDispatch();

    const liked = me && post.Likers && post.Likers.find(v => v.id === me.id);
    //console.log(post.Likers);

    const onToggleComment = useCallback(() => {
        setCommentFormOpened(prev => !prev);
        if (!commentFormOpened) {
            dispatch({
                type: LOAD_COMMENTS_REQUEST,
                data: post.id,
            });
        }
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
                content: commentText,
            },
        })
    }, [me && me.id, commentText]);

    useEffect(() => {
        setCommentText('');
    }, [commentAdded === true])

    const onChangeCommentText = useCallback((e) => {
        setCommentText(e.target.value);
    }, []);

    const onToggleLike = useCallback(() => {
        if(!me) {
            return alert('you need to login');
        }
        if (liked) {
            // already liked
            dispatch({
                type: UNLIKE_POST_REQUEST,
                data: post.id,
            });
        } else {
            // yet liked
            dispatch({
                type: LIKE_POST_REQUEST,
                data: post.id,
            });
        }
    }, [me && me.id, post && post.id, liked]);

    const onRetweet = useCallback(() => {
        if (!me) {
            return alert('you neet to login');
        }
        return dispatch({
            type: RETWEET_REQUEST,
            data: post.id,
        })
    }, [me && me.id, post && post.id]);

    return (
        <div>
            <Card
                key = {+post.createdAt}
                cover = {post.Images[0] && <PostImages images={post.Images} />}
                actions = {[
                    <Icon type="retweet" key="retweet" onClick={onRetweet}/>,
                    <Icon type="heart" key="heart" theme={liked ? 'twoTone' : 'outlined'} twoToneColor='#eb2f96' onClick={onToggleLike}/>,
                    <Icon type="message" key="message" onClick={onToggleComment} />,
                    <Icon type="ellipsis" key="ellipsis" />,
                ]}
                extra={<Button>follow</Button>}
            >
                <Card.Meta
                    avatar={<Link href={{pathname: '/user', query: {id: post.User.id} }} as={`/user/${post.User.id}`}><a><Avatar>{post.User.nickname[0]}</Avatar></a></Link>}
                    title={post.User.nickname}
                    description={(
                        <div>{post.content.split(/(#[^\s]+)/g).map((v) => {
                            if (v.match(/#[^\s]+/)) {
                                return (
                                    <Link
                                        href={{ pathname: '/hashtag', query: { tag: v.slice(1) } }}
                                        as={`/hashtag/${v.slice(1)}`}
                                        key={v}
                                    >
                                        <a>{v}</a>
                                    </Link>
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
                                    avatar={<Link href={{pathname: '/user', query: {id: post.User.id}}} as={`/user/${post.User.id}`}><a><Avatar>{item.User.nickname[0]}</Avatar></a></Link>}
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
