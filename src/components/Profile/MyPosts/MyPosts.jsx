import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
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
                <Post message="hi what's up?" likeCounts="15" />
                <Post message="yo, newer better" likeCounts="20" />
            </div>
        </div>
    )
}

export default MyPosts;