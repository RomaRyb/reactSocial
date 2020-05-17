import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'hi what\'s up?', likesCount: 11},
        {id: 2, message: 'yo, newer better', likesCount: 18}
    ]

    return (
        <div className={s.postBlock}>
            my posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].id.message} likesCounts={postData[0].likesCount} />
                <Post message={postData[1].id.message} likesCounts={postData[1].likesCount} />
            </div>
        </div>
    )
}

export default MyPosts;