import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Input, Button, Form } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from '../reducers/post';

const PostForm = () => {
    const dispatch =  useDispatch();
    const [text, setText] = useState('');
    const { imagePaths, isAddingPost, postAdded } = useSelector(state => state.post);
    const imageInput = useRef();

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

    const onChangeImages = useCallback((e) => {
        console.log(e.target.files);
        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (f) => {
            imageFormData.append('image', f);
        });
        dispatch({
            type: UPLOAD_IMAGES_REQUEST,
            data: imageFormData,
        })
    }, []);

    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    const onRemoveImage = useCallback(index => () => {
        dispatch({
            type: REMOVE_IMAGE,
            index,
        });
    }, []);

    return (
        <Form style={{margin: '10px 0 120px'}} encType="multipart/form-data" onSubmit={onSubmitForm}>
            <Input.TextArea maxLength={140} placeholder="what funny things happened ?" value={text} onChange={onChangeText}/>
            <div>
                <input type="file" multiple hidden ref={imageInput} onChange={onChangeImages}/>
                <Button onClick={onClickImageUpload}>upload image</Button>
                <Button type="primary" style={{float: 'right'}} htmlType="submit" loading={isAddingPost}>post</Button>
            </div>
            <div>
                {imagePaths.map((v, i) => (
                    <div  key={v} style={{display:'inline-block'}}>
                        <img src={`http://localhost:3065/${v}`} style={{width: '200px'}} alt = {v} />
                        <div>
                            <Button onClick={onRemoveImage(i)}>delete</Button>
                        </div>
                    </div>)
                )}
            </div>
        </Form>
    );
}

export default PostForm;