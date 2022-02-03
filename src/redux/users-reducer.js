import {UsersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_CURRENT = 'SET_TOTAL_USERS_CURRENT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IS_FETCHING = 'TOGGLE_FOLLOWING_IS_FETCHING';

let initialState = {
    users: [ ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: [],
};
const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId, "id",{followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId,"id",{followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_CURRENT:
            return {
                ...state, totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_IS_FETCHING:
            return {
                ...state,
                followingProgress: action.isFetching
                ? [...state.followingProgress , action.userId]
                : state.followingProgress.filter( id => id != action.userId)
            }
        default:
            return state;
    }

}

// ActionCreator
export const acceptFollow = (userId) => ({ type: FOLLOW, userId });

export const  acceptUnfollow = (userId) => ({ type: UNFOLLOW, userId });

export const  setUsers = (users) => ({ type: SET_USERS, users });

export const  setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const  setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_CURRENT, count: totalUsersCount });

export const  setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const  toggleFollowingIsFetching = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_IS_FETCHING, isFetching, userId });

//thunk (санки)
export const requestUsers = (currentPage, pageSize ) => async (dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(currentPage))
        let data = await UsersAPI.getUsers(currentPage, pageSize)
        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));

}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingIsFetching(true, userId ));
    let data = await apiMethod(userId)
    if(data.resultCode === 0){
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingIsFetching(false, userId ));

}
export const unfollow = (userId) => async (dispatch) =>{
    let apiMethod = UsersAPI.unfollow.bind(UsersAPI);
    let actionCreator = acceptUnfollow;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
}

export const follow = (userId) => async (dispatch) => {
    let apiMethod = UsersAPI.follow.bind(UsersAPI);
    let actionCreator = acceptFollow;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
}

export default usersReducer;