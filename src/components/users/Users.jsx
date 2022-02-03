
import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage,onPageChange,totalUsersCount,pageSize,...props}) =>{

    return <div>
        <Paginator currentPage = {currentPage}
                   onPageChange = {onPageChange}
                   totalItemsCount = {totalUsersCount}
                   pageSize = {pageSize}
        />
        <div>
            {
                props.users.map( user => <User user = {user}
                                               key={user.id}
                                               followingProgress = {props.followingProgress}
                                               unfollow = {props.unfollow}
                                               follow = {props.follow} />)
            }
        </div>
    </div>

}
export default Users;