import React from 'react';
import { Input, Button, Form } from 'antd';
import { useSelector } from 'react-redux';

const PostForm = () => {
    const { imagePaths } = useSelector(state => state.post);
    return (
        <Form style={{margin: '10px 0 120px'}} encType="multipart/form-data">
            <Input.TextArea maxLength={140} placeholder="what funny things happened ?" />
            <div>
                <input type="file" multiple hidden />
                <Button>upload image</Button>
                <Button type="primary" style={{float: 'right'}} htmlType="submit">post</Button>
            </div>
            <div>
                {imagePaths.map((v, i) => {
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