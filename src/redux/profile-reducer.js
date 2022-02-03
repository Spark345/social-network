import {ProfileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id : 1, message : 'Привет, как ты?', likesCount: 15},
        { id : 2, message : 'Это мой мервый пост!', likesCount: 20}
    ],

    profile: null,
    status: "",
};
const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.newPost,
                likesCount: 0,
            };
            return {...state,
                posts: [...state.posts,newPost],
                newPostText: ''

            } ;
        }
        case SET_USERS_PROFILE: {
            return {...state,
                profile: action.profile,
            };
        }
        case SET_STATUS: {
            return {...state,
                status: action.status,
            };
        }
        default:
            return state;
    }

}

export const addPostActionCreator = (newPost) => ({ type: ADD_POST, newPost});

const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });

const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => async (dispatch) => {
    let data = await ProfileAPI.getUserProfile(userId)
    dispatch(setUsersProfile(data));

}

export const getStatus = (userId) => async (dispatch) => {
    let data = await ProfileAPI.getStatus(userId)
    dispatch(setStatus(data));
}
export const updateStatus = (status) => async (dispatch) => {
    let data = await ProfileAPI.updateStatus(status)
    if(data.resultCode === 0){
        dispatch(setStatus(status));
    }
}

export default profileReducer;