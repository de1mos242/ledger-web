import {IUserInfo} from "./state";
import {USER_LOGIN, USER_LOGOUT} from "./actions";

const initialState: IUserInfo = {
    userInfo: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return Object.assign({}, state, {userInfo: action.userInfo})
        case USER_LOGOUT:
            return Object.assign({}, state, {userInfo: null})
        default:
            return state
    }
}