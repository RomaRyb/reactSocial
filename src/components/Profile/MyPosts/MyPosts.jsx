import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'hi what\'s up?', likesCount: 11},
        {id: 2, message: 'yo, newer better', likesCount: 18}
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCounts={p.likesCount} />)

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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;