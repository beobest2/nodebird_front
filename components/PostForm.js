import React, { useCallback, useState, useEffect } from 'react';
import { Input, Button, Form } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST } from '../reducers/post';

const PostForm = () => {
    const dispatch =  useDispatch();
    const [text, setText] = useState('');
    const { imagePaths, isAddingPost, postAdded } = useSelector(state => state.post);

    useEffect(() => {
        setText('');
    }, [postAdded === true]);
    
    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        if (!text || !text.trim()){
            return alert('please write contents');
        }
        dispatch({
            type: ADD_POST_REQUEST,
            data: {
                content: text,
            }
        })    
    }, [text]);

    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);

    return (
        <Form style={{margin: '10px 0 120px'}} encType="multipart/form-data" onSubmit={onSubmitForm}>
            <Input.TextArea maxLength={140} placeholder="what funny things happened ?" value={text} onChange={onChangeText}/>
            <div>
                <input type="file" multiple hidden />
                <Button>upload image</Button>
                <Button type="primary" style={{float: 'right'}} htmlType="submit" loading={isAddingPost}>post</Button>
            </div>
            <div>
                {imagePaths.map((v) => (
                    <div  key={v} style={{display:'inline-block'}}>
                        <img src={`http://localhost:3065/${v}`} style={{width: '200px'}} alt = {v} />
                        <div>
                            <Button>delete</Button>
                        </div>
                    </div>)
                )}
            </div>
        </Form>
    );
}

export default PostForm;