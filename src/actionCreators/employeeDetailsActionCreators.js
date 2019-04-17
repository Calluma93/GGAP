import {
    USER_UPDATE_PASSWORD,
    SERVER_UPDATE_PASSWORD_INVALID,
    SERVER_UPDATE_PASSWORD_SUCCESS,
    SERVER_UPDATE_PASSWORD_ERROR,
    UPDATE_PASSWORD_TIMER_ENDS,
    USER_GET_EMPLOYEE_DETAILS,
    SERVER_GET_EMPLOYEE_DETAILS_SUCCESS,
    SERVER_GET_EMPLOYEE_DETAILS_ERROR,
    USER_FIRST_NAME_CHANGE,
    USER_LAST_NAME_CHANGE,
    USER_USER_NAME_CHANGE,
    USER_UPDATE_EMPLOYEE_DETAILS,
    SERVER_UPDATE_EMPLOYEE_DETAILS_INVALID,
    SERVER_UPDATE_EMPLOYEE_DETAILS_SUCCESS,
    SERVER_UPDATE_EMPLOYEE_DETAILS_ERROR,
    UPDATE_EMPLOYEE_DETAILS_TIMER_ENDS
} from '../actionTypes/employeeDetailsActionTypes';

// Update Password

export function userUpdatePassword(currentPassword, newPassword, confirmNewPassword) {
    return {
        type: USER_UPDATE_PASSWORD,
        currentPassword,
        newPassword,
        confirmNewPassword
    };
}

export function serverUpdatePasswordInvalid(message, actionToDoAfterTimeout) {
    return {
        type: SERVER_UPDATE_PASSWORD_INVALID,
        message,
        actionToDoAfterTimeout
    }
}

export function serverUpdatePasswordSuccess(actionToDoAfterTimeout) {
    return {
        type: SERVER_UPDATE_PASSWORD_SUCCESS,
        actionToDoAfterTimeout
    }
}

export function serverUpdatePasswordError() {
    return {
        type: SERVER_UPDATE_PASSWORD_ERROR
    }
}

export function updatePasswordTimerEnds() {
    return {
        type: UPDATE_PASSWORD_TIMER_ENDS
    }
}


// Get Employee

export function userGetEmployeeDetails() {
    return {
        type: USER_GET_EMPLOYEE_DETAILS
    };
}

export function serverGetEmployeeDetailsSuccess(userName, firstName, lastName) {
    return {
        type: SERVER_GET_EMPLOYEE_DETAILS_SUCCESS,
        userName,
        firstName,
        lastName
    }
}

export function serverGetEmployeeDetailsError() {
    return {
        type: SERVER_GET_EMPLOYEE_DETAILS_ERROR
    }
}


// Update Employee Details

export function userUpdateEmployeeDetails(userName, firstName, lastName) {
    return {
        type: USER_UPDATE_EMPLOYEE_DETAILS,
        userName, 
        firstName, 
        lastName
    };
}

export function serverUpdateEmployeeDetailsInvalid(message, actionToDoAfterTimeout) {
    return {
        type: SERVER_UPDATE_EMPLOYEE_DETAILS_INVALID,
        message,
        actionToDoAfterTimeout
    }
}

export function serverUpdateEmployeeDetailsSuccess(userName, firstName, lastName, actionToDoAfterTimeout) {
    return {
        type: SERVER_UPDATE_EMPLOYEE_DETAILS_SUCCESS,
        userName,
        firstName,
        lastName,
        actionToDoAfterTimeout
    }
}

export function serverUpdateEmployeeDetailsError() {
    return {
        type: SERVER_UPDATE_EMPLOYEE_DETAILS_ERROR
    }
}

export function updateEmployeeDetailsTimerEnds() {
    return {
        type: UPDATE_EMPLOYEE_DETAILS_TIMER_ENDS
    }
}


// Misc.

export function userFirstNameChange(firstName) {
    return {
        type: USER_FIRST_NAME_CHANGE,
        firstName
    }
}


export function userLastNameChange(lastName) {
    return {
        type: USER_LAST_NAME_CHANGE,
        lastName
    }
}

export function userUserNameChange(userName) {
    return {
        type: USER_USER_NAME_CHANGE,
        userName
    }
}