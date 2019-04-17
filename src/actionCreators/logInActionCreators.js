import {
    USER_LOG_IN_USER_NAME_CHANGE,
    USER_LOG_IN_PASSWORD_CHANGE,
    SERVER_LOG_IN_INVALID,
    SERVER_LOG_IN_SUCCESS,
    SERVER_LOG_IN_ERROR,
    USER_LOG_IN,
    LOG_IN_TIMER_ENDS
} from '../actionTypes/logInActionTypes';


// Log In

export function userLogIn(userName, password) {
    return {
        type: USER_LOG_IN,
        userName,
        password
    }
}

export function serverLogInInvalid(actionToDoAfterTimeout) {
    return {
        type: SERVER_LOG_IN_INVALID,
        actionToDoAfterTimeout
    }
}

export function serverLogInSuccess(actionToRetry, accessToken, firstName, lastName, userName, canAccessEmployeesAdmin, canAccessContentAdmin, canAccessProductsAdmin) {
    return {
        type: SERVER_LOG_IN_SUCCESS,
        actionToRetry,
        accessToken,
        firstName,
        lastName,
        userName,
        canAccessEmployeesAdmin,
        canAccessContentAdmin,
        canAccessProductsAdmin
    }
}

export function serverLogInError() {
    return {
        type: SERVER_LOG_IN_ERROR
    }
}


// Misc.

export function userLogInUserNameChange(userName) {
    return {
        type: USER_LOG_IN_USER_NAME_CHANGE,
        userName
    }
}

export function userLogInPasswordChange(password) {
    return {
        type: USER_LOG_IN_PASSWORD_CHANGE,
        password
    }
}

export function logInTimerEnds() {
    return {
        type: LOG_IN_TIMER_ENDS
    }
}