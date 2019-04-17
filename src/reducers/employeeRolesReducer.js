
import {
    SERVER_GET_ROLES_SUCCESS,
    SERVER_GET_ROLES_ERROR
    } from '../actionTypes/employeesActionTypes'
import {
    USER_LOG_OUT
} from '../actionTypes/privateLayoutActionTypes'
import { PENDING_LOGOUT_TIMER_EXPIRES } from '../actionTypes/pendingLogoutActionTypes';

const initialState = []

export function employeeRoles(state = initialState, action) {
    switch(action.type) { 
        case SERVER_GET_ROLES_ERROR:
        case USER_LOG_OUT:
        case PENDING_LOGOUT_TIMER_EXPIRES:
            return initialState
        case SERVER_GET_ROLES_SUCCESS:
            return action.roles
        default:
            return state
    }
}