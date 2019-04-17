
import {
    USER_LOG_IN_USER_NAME_CHANGE,
    USER_LOG_IN_PASSWORD_CHANGE,
    USER_LOG_IN,
    SERVER_LOG_IN_SUCCESS,
    SERVER_LOG_IN_INVALID,
    SERVER_LOG_IN_ERROR,
    LOG_IN_TIMER_ENDS
} from '../actionTypes/logInActionTypes';
import { PENDING_LOGOUT_TIMER_EXPIRES } from '../actionTypes/pendingLogoutActionTypes';
import {
    USER_LOG_OUT
} from '../actionTypes/privateLayoutActionTypes';

const initialState = {
    isLoggingIn: false,
    logInInvalid: false,
    userName: "",
    password: ""
};

export function logInAttempt(state = initialState, action) {
    switch(action.type) {
        case USER_LOG_IN_USER_NAME_CHANGE:
            return {
                ...state,
                logInInvalid: false,
                userName: action.userName
            }
        case USER_LOG_IN_PASSWORD_CHANGE:
            return {
                ...state,
                logInInvalid: false,
                password: action.password
            }
        case USER_LOG_IN:
            return {
                ...state,
                isLoggingIn: true,
                logInInvalid: false
            }
        case SERVER_LOG_IN_INVALID:
            return {
                ...state,
                isLoggingIn: false,
                logInInvalid: true,
                password: ""
            }
        case LOG_IN_TIMER_ENDS:
            return {
                ...state,
                logInInvalid: false
            }
        case SERVER_LOG_IN_ERROR:
        case SERVER_LOG_IN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                logInInvalid: false,
                password: ""
            }
        case USER_LOG_OUT:
        case PENDING_LOGOUT_TIMER_EXPIRES:
            return initialState
        default:
            return state
    }
}