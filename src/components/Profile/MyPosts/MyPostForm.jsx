import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import classes from "./MyPosts.module.css"

const maxLength30 = maxLengthCreator(30)

const MyPostForm = (props) => {

    return(
        <form className={classes.form} onSubmit={props.handleSubmit}>
            <div className={classes.input}>
                <Field className={classes.inputItem} name={"newPost"} component={Textarea} placeholder={"Post message"} validate={[required, maxLength30 ]} />
            </div>
            <div>
                <button className={classes.addPostBtn}>Add post</button>
            </div>
        </form>
    );
}
export const PostReduxForm = reduxForm({form: 'post'})(MyPostForm)

