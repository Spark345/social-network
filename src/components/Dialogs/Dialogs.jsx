import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {DialogsReduxForm} from "./DialogsForm";



const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map( (dialog) => <DialogItem name = {dialog.name} id = {dialog.id} /> );
    let messageElement = props.dialogsPage.messages.map( (message) => <Message message = {message.message} />);

    let addMessageElement = React.createRef();

    const addNewMessage = (formData) =>{
        props.addMessage(formData.newMessage);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                <div>
                    { messageElement }
                </div>
                <DialogsReduxForm onSubmit = {addNewMessage}/>
            </div>
        </div>

    );
}
export default Dialogs;