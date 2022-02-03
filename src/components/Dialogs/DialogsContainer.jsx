import React from "react";
import {addMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapDispatchToProps = (dispatch) => {
    return{
        addMessage: (newMessage) => {
            dispatch(addMessageActionCreator(newMessage));
        },
    }

}

let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage,

    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);