import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {LogoutUser} from "../../redux/auth-reducer";



class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} profileAuth={this.props.profileAuth} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
    profileAuth: state.auth.profileAuth
})

export default connect(mapStateToProps, {LogoutUser})(HeaderContainer);
