import React, { useCallback } from 'react';
import { Input, Button, Form } from 'antd';

const dummy = {
    isLoggedIn: true,
    imagePaths: [],
    mainPosts: [{
        User:{
            id: 1,
            nickname: 'jaden'
        },
        content: 'first topic',
        img: 'https://images.unsplash.com/photo-1576460303646-1b9493abfd35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    }],
};

const PostForm = () => {
    return (
        <Form style={{margin: '10px 0 120px'}} encType="multipart/form-data">
            <Input.TextArea maxLength={140} placeholder="what funny things happened ?" />
            <div>
                <input type="file" multiple hidden />
                <Button>upload image</Button>
                <Button type="primary" style={{float: 'right'}} htmlType="submit">post</Button>
            </div>
            <div>
                {dummy.imagePaths.map((v, i) => {
                    return (
                        <div  key={v} style={{display:'inline-block'}}>
                            <img src={'http://localhost:3065/' + v} style={{width: '200px'}} alt = {v} />
                            <div>
                                <Button>delete</Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Form>
    );
}

export default PostForm;