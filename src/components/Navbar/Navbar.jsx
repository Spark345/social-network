import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    let friendsElement = props.state.friends.map( (friend) =><Friends name = {friend.name} id = {friend.id} />);
    return(
        <nav className={classes.nav}>
            <div className={classes.item}><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></div>
            <div className={`${classes.item}`}><NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink></div>
            <div className={`${classes.item}`}><NavLink to="/users" activeClassName={classes.active}>Users</NavLink></div>
            <div className={classes.item}><NavLink to="/news" activeClassName={classes.active}>News</NavLink></div>
            <div className={classes.item}><NavLink to="/music" activeClassName={classes.active}>Music</NavLink></div>
            <div className={classes.item}><NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink></div>
            <div className={classes.item}><NavLink to="/friends" activeClassName={classes.active}>Friends</NavLink></div>
            <div className={classes.item}>
                { friendsElement }
            </div>
        </nav>
    );
}

export default Navbar;