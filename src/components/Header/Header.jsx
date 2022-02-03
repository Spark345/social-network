import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import logo from "../../assets/images/logo.svg"


const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.headerInner}>
                <img className={classes.headerImg} src={logo} alt=""/>
                <div className={classes.loginBlock}>
                    {props.isAuth
                        ? <div className={classes.loginItems}>
                            <img className={classes.loginPhoto} src={props.profileAuth.photos.small}/>
                            <p className={classes.loginName}>{props.login}</p>
                            <button className={classes.logoutButton} onClick={props.LogoutUser}>Log out</button>
                        </div>
                        : <div className={classes.loginLink}>
                            <NavLink className={classes.loginLinkText} to={'/login'}>Login</NavLink>
                        </div>}
                </div>
            </div>
        </header>
    );
}
export default Header;