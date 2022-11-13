import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostReduxForm} from "./MyPostForm";


const MyPosts = (props) => {
    console.log(props.posts)
    const addNewPost = (formData) => {
        props.addPost(formData.newPost);
    }
    const removePost = (postId) => {
        // debugger;
        // let post = props.posts.filter(p => p.id === postId)
        let post = [...props.posts]
        post.splice(postId, 1)
        props.deletePost(post);
    }
    let postsElement = props.posts.map(post => <Post removePost = {removePost} postId = {post.id} message={post.message} likesCount={post.likesCount}/>);
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