import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from './../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);


const MyPosts = (props) => {
    
    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCounts={p.likesCount} />);

    //let newPostElement = React.createRef();
    
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    } 

    return (
        <div className={s.postBlock}>
            my posts
            <AddNewPostFormRedux onSubmit={ onAddPost } />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={ Textarea } name='newPostText' validate={[required, maxLength10]} placeholder={'Post message'} /> 
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}


let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm'}) (AddNewPostForm);

export default MyPosts;