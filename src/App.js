import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));



class App extends Component {
    componentDidMount() {
        this.props.initializeApp();

    }
    render() {
        if(!this.props.initialized){
            return <Preloader />
        }
        return(
                    <BrowserRouter>
                        <div className="app-wrapper">
                            <HeaderContainer/>
                            <Navbar state={this.props.state.sidebar}/>
                            <div className="app-wrapper-content">
                                <Route path='/profile/:userId?' render={withSuspense(ProfileContainer) }/>
                                <Route exact path='/dialogs' render={withSuspense(DialogsContainer)}/>
                                <Route exact path='/users' render={() => <UsersContainer/>
                                }/>
                                <Route exact path='/login' render={() => <LoginPage/>
                                }/>
                                <Route path='/news' component={News}/>
                                <Route path='/music' component={Music}/>
                                <Route path='/settings' component={Settings}/>
                            </div>
                        </div>
                    </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})) (App);

