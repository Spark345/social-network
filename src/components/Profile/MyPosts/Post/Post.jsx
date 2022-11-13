import classes from './Post.module.css'
import like from "../../../../assets/images/like.svg"


const Post = (props) =>{

    return (
        <div className={classes.post}>
            <div className={classes.postItem}>
                <div className={classes.postBlockImg}>
                    <img className={classes.postImg} src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"/>
                </div>
                <div className={classes.postText}>
                    {props.message}
                </div>
                <button onClick={() => {props.removePost(props.postId - 1)}}>Удалить</button>
            </div>
            <div className={classes.like}>
                <div className={classes.likeImg}>
                    <img className={classes.likeImgIcon} src={like} />
                </div>
                <div className={classes.likeNumber}>
                    {props.likesCount}
                </div>
            </div>
        </div>
    );
}
export default Post;