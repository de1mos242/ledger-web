import {UserInfo} from "../../models/user_info";

export const USER_LOGIN = '[User] login'
export const USER_LOGOUT = '[User] logout'

export const loginUser = (userInfo: UserInfo) => dispatch => {
    return dispatch({type: USER_LOGIN, userInfo})
}

export const logoutUser = () => dispatch => {
    return dispatch({type: USER_LOGOUT})
}