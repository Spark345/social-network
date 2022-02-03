import {connect} from "react-redux";
import {
    setCurrentPage,
    toggleFollowingIsFetching, requestUsers, unfollow, follow,
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/selector-users"


class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage,pageSize } = this.props
        this.props.getUsers(currentPage, pageSize);

    }

    onPageChange = (pageNumber) => {
        const {pageSize } = this.props
        this.props.getUsers(pageNumber, pageSize);
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount = {this.props.totalUsersCount}
                   pageSize = {this.props.pageSize}
                   currentPage = {this.props.currentPage}
                   users = {this.props.users}
                   onPageChange = {this.onPageChange}
                   followingProgress = {this.props.followingProgress}
                   unfollow = {this.props.unfollow}
                   follow = {this.props.follow}
            />
        </>
    }

}

// let mapStateToProps = (state) =>{
//     return{
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingProgress: state.usersPage.followingProgress,
//     }
// }

let mapStateToProps = (state) =>{
    return{
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state),
    }
}

export default connect(mapStateToProps, { setCurrentPage,
    toggleFollowingIsFetching, getUsers: requestUsers, unfollow, follow  })(UsersContainer);
