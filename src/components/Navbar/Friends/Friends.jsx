import {NavLink} from "react-router-dom";
import classes from "./Friends.module.css"

const Friends = (props) => {
    return(
        <div className={classes.item}>
            <img src="https://demotivation.ru/wp-content/uploads/2020/06/ac3e25c19a979606312463aa6b1cc2fd.jpg" alt=""/>
            <NavLink to={"/Friends" + props.id}>{props.name}</NavLink>
        </div>
    );
}
export default Friends;