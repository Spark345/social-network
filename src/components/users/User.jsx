import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";


let User = ({user,followingProgress,unfollow,follow,...props}) =>{
    return <div>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img className={classes.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto}/>
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button disabled={followingProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id);
                              }}>
                        Unfollow
                    </button>
                    : <button disabled={followingProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id);
                              }}>
                        Follow
                    </button>
                }
            </div>
        </span>
        <span>
            <span>
                <div>
                    {user.name}
                </div>
                <div>
                    {user.status}
                </div>
            </span>
            <span>
                <div>
                    {'user.location.country'}
                </div>
                <div>
                    {'user.location.city'}
                </div>
            </span>
        </span>
    </div>
}
export default User;