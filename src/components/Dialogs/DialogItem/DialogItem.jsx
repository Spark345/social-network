import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    return(
        <div className={classes.dialogs + ' ' + classes.active}>
            <img src="https://demotivation.ru/wp-content/uploads/2020/06/ac3e25c19a979606312463aa6b1cc2fd.jpg" alt=""/>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
        );
}

export default DialogItem;