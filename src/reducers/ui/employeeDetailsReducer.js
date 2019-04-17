
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
} from '../../actionTypes/employeeDetailsActionTypes'
import {
    USER_LOG_OUT
} from '../../actionTypes/privateLayoutActionTypes'
import { PENDING_LOGOUT_TIMER_EXPIRES } from '../../actionTypes/pendingLogoutActionTypes';


const initialPasswordState = {
    isUpdatingPassword: false,
    passwordUpdateInvalid: false,
    invalidPasswordUpdateMessage: null,
    passwordUpdateSuccessful: false
};

const initialDetailsState = {
    isGettingDetails: false,
    isUpdatingDetails: false,
    detailsUpdateInvalid: false,
    invalidDetailsUpdateMessage: null,
    detailsUpdateSuccessful: false,
    detailsForm: {
        userName: null,
        firstName: null,
        lastName: null
    }
};

const initialState = {
    ...initialPasswordState,
    ...initialDetailsState
};

export function employeeDetails(state = initialState, action) {
    switch(action.type) {
        case USER_UPDATE_PASSWORD:
            return {
                ...state,
                isUpdatingPassword: true,
                passwordUpdateInvalid: false,
                invalidPasswordUpdateMessage: null,
                passwordUpdateSuccessful: false
            }
        case SERVER_UPDATE_PASSWORD_INVALID:
            return {
                ...state,
                isUpdatingPassword: false,
                passwordUpdateInvalid: true,
                invalidPasswordUpdateMessage: action.message,
                passwordUpdateSuccessful: false
            }
        case SERVER_UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                isUpdatingPassword: false,
                passwordUpdateInvalid: false,
                invalidPasswordUpdateMessage: null,
                passwordUpdateSuccessful: true
            }
        case SERVER_UPDATE_PASSWORD_ERROR:
            return {
                ...state,
                ...initialPasswordState
            }
        case UPDATE_PASSWORD_TIMER_ENDS:
            return {
                ...state,
                passwordUpdateInvalid: false,
                invalidPasswordUpdateMessage: null,
                passwordUpdateSuccessful: false
            }
        case USER_GET_EMPLOYEE_DETAILS:
            return {
                ...state,
                isGettingDetails: true
            }
        case SERVER_GET_EMPLOYEE_DETAILS_SUCCESS:
            return {
                ...state,
                ...initialDetailsState,
                isGettingDetails: false,
                detailsForm: {
                    userName: action.userName,
                    firstName: action.firstName,
                    lastName: action.lastName
                }
            }
        case SERVER_GET_EMPLOYEE_DETAILS_ERROR:
            return {
                ...state,
                isGettingDetails: false
            }
        case USER_UPDATE_EMPLOYEE_DETAILS:
            return {
                ...state,
                isUpdatingDetails: true,
                detailsUpdateInvalid: false,
                invalidDetailsUpdateMessage: null,
                detailsUpdateSuccessful: false
            }
        case SERVER_UPDATE_EMPLOYEE_DETAILS_INVALID:
            return {
                ...state,
                isUpdatingDetails: false,
                detailsUpdateInvalid: true,
                invalidDetailsUpdateMessage: action.message,
                detailsUpdateSuccessful: false
            }
        case SERVER_UPDATE_EMPLOYEE_DETAILS_SUCCESS:
            return {
                ...state,
                isUpdatingDetails: false,
                detailsUpdateInvalid: false,
                invalidDetailsUpdateMessage: null,
                detailsUpdateSuccessful: true,
                detailsForm: {
                    userName: action.userName,
                    firstName: action.firstName,
                    lastName: action.lastName
                }
            }
        case SERVER_UPDATE_EMPLOYEE_DETAILS_ERROR:
            return {
                ...state,
                ...initialDetailsState
            }
        case UPDATE_EMPLOYEE_DETAILS_TIMER_ENDS:
            return {
                ...state,
                detailsUpdateInvalid: false,
                invalidDetailsUpdateMessage: null,
                detailsUpdateSuccessful: false
            }
        case USER_FIRST_NAME_CHANGE:
            return {
                ...state,
                detailsForm: {
                    ...state.detailsForm,
                    firstName: action.firstName
                }
            }
        case USER_LAST_NAME_CHANGE:
            return {
                ...state,
                detailsForm: {
                    ...state.detailsForm,
                    lastName: action.lastName
                }
            }
        case USER_USER_NAME_CHANGE:
            return {
                ...state,
                detailsForm: {
                    ...state.detailsForm,
                    userName: action.userName
                }
            }
        case USER_LOG_OUT:
        case PENDING_LOGOUT_TIMER_EXPIRES:
            return initialState
        default:
            return state
    }
}