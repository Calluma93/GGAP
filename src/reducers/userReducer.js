
import {
    SERVER_LOG_IN_SUCCESS,
    SERVER_LOG_IN_ERROR
} from '../actionTypes/logInActionTypes';
import { PENDING_LOGOUT_TIMER_EXPIRES } from '../actionTypes/pendingLogoutActionTypes';
import {
    SERVER_GET_EMPLOYEE_DETAILS_SUCCESS,
    SERVER_UPDATE_EMPLOYEE_DETAILS_SUCCESS
} from '../actionTypes/employeeDetailsActionTypes';
import {
    USER_LOG_OUT
} from '../actionTypes/privateLayoutActionTypes';
import {
    UserStatePersister
} from '../UserStatePersister';


const initialState = {
    isAuthenticated: false,
    accessToken: null,
    firstName: null,
    lastName: null,
    userName: null,
    canAccessEmployeesAdmin: false,
    canAccessContentAdmin: false,
    canAccessProductsAdmin: false
};

const userStatePersister = new UserStatePersister(initialState);

const persistedState = userStatePersister.loadUserState();

export function user(state = persistedState, action) {
    let saveState = true;
    let newState;
    switch(action.type) {
        case SERVER_LOG_IN_ERROR:
        case USER_LOG_OUT:
        case PENDING_LOGOUT_TIMER_EXPIRES:
            newState = initialState
            break
        case SERVER_LOG_IN_SUCCESS:
            newState = {
                isAuthenticated: true,
                accessToken: action.accessToken,
                firstName: action.firstName,
                lastName: action.lastName,
                userName: action.userName,
                canAccessEmployeesAdmin: action.canAccessEmployeesAdmin,
                canAccessContentAdmin: action.canAccessContentAdmin,
                canAccessProductsAdmin: action.canAccessProductsAdmin,
            }
            break
        case SERVER_GET_EMPLOYEE_DETAILS_SUCCESS:
        case SERVER_UPDATE_EMPLOYEE_DETAILS_SUCCESS:
            newState = {
                ...state,
                firstName: action.firstName,
                lastName: action.lastName,
                userName: action.userName
            }
            break
        default:
            saveState = false
            newState = state
    }
    if(saveState) {
        userStatePersister.saveUserState(newState);
    }
    return newState;
}