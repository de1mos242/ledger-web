import {applyMiddleware, combineReducers, createStore} from "redux";
import {userReducer} from "./states/user/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk'
import {createWrapper} from "next-redux-wrapper";

export const makeStore = (initialState) => {
    return createStore(combineReducers({
        user: userReducer
    }), initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}

export const wrapper = createWrapper(makeStore, {debug: true})