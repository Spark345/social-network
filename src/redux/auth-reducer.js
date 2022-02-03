import {AuthAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_USERS_PROFILE_AUTH = 'auth/SET_USERS_PROFILE_AUTH'


let initialState = {
    userId : null,
    email:null,
    login: null,
    isAuth: false,
    profileAuth: {
        photos:{}
    }
};

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case SET_USERS_PROFILE_AUTH:
            return {...state,
                profileAuth: action.profileAuth,
                isAuth: true
            }
        default:
            return state;
    }

}

export const setAuthUserData = (userId, email,  login, isAuth) => ({ type: SET_USER_DATA, data: {userId, email, login, isAuth} });

export const setUsersProfileAuth = (profileAuth) => ({ type: SET_USERS_PROFILE_AUTH, profileAuth });

export const getAuthUserData = (userId) => async (dispatch) => {
    let response = await AuthAPI.getUserData()
    if(response.data.resultCode === 0){
        let {id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true)) ;
        AuthAPI.getUserId(userId)
            .then(response =>{
                dispatch(setUsersProfileAuth(response.data));
            });
    }
}
export const LoginUser = (email, password, rememberMe,userId ) => async (dispatch) => {
    let response = await AuthAPI.login(email, password, rememberMe)

    if(response.data.resultCode === 0){
        dispatch(getAuthUserData(userId))
    }
    else{
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit('login',{_error: message } ));
    }
}
export const LogoutUser = () => async (dispatch) => {
    let response = await AuthAPI.logout()
    if(response.data.resultCode === 0){
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export default authReducer;