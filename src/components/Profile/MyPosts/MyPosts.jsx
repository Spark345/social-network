import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostReduxForm} from "./MyPostForm";


const MyPosts = props => {
    let postsElement = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>);

    const addNewPost = (formData) => {
        props.addPost(formData.newPost);
    }
    return (
        <div className={classes.postsBlock}>
            <h3 className={classes.postsTitle}>My posts</h3>
            <PostReduxForm onSubmit={addNewPost} newPostText={props.newPostText}/>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;