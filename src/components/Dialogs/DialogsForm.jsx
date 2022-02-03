import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Введите сообщение!" name={'newMessage'} component={Textarea} validate={[required, maxLength50 ]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
}
export const DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm);
