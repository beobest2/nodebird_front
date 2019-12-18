import React from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const dummy = {
    isLoggedIn: true,
    imagePaths: [],
    mainPosts: [{
        id: 1,
        User:{
            id: 1,
            nickname: 'jaden'
        },
        content: 'first topic',
        img: 'https://images.unsplash.com/photo-1576460303646-1b9493abfd35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    }],
};

const Home = () => {
    return (
        <div>
            {dummy.isLoggedIn && <PostForm />}
            {dummy.mainPosts.map((c) => {
                return (
                    <PostCard key={c.id} post={c}/>
                );
            })}
        </div>
    );
};

export default Home;