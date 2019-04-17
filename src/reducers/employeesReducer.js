
import {
    SERVER_GET_EMPLOYEES_SUCCESS,
    SERVER_ADD_EMPLOYEE_SUCCESS,
    SERVER_UPDATE_EMPLOYEE_SUCCESS,
    SERVER_UPDATE_EMPLOYEE_IS_DISABLED_SUCCESS
} from '../actionTypes/employeesActionTypes'
import {
    USER_LOG_OUT
} from '../actionTypes/privateLayoutActionTypes'
import { PENDING_LOGOUT_TIMER_EXPIRES } from '../actionTypes/pendingLogoutActionTypes';

const initialState = [];

export function employees(state = initialState, action) {
    switch(action.type) {
        case SERVER_GET_EMPLOYEES_SUCCESS:
            return action.employees
        case SERVER_ADD_EMPLOYEE_SUCCESS:
            return [...state, action.employee]
        case SERVER_UPDATE_EMPLOYEE_SUCCESS:
            return state.map(employee => 
                employee.employeeId === action.employeeId ?
                    {
                        ...employee,
                        userName: action.userName,
                        firstName: action.firstname,
                        lastName: action.lastname,
                        roles: action.roles,
                    } :
                    employee
            )
        case SERVER_UPDATE_EMPLOYEE_IS_DISABLED_SUCCESS:
            return state.map(
                employee => employee.employeeId === action.employeeId ? {...employee, isDisabled: action.isDisabled } : employee
            )
        case USER_LOG_OUT:
        case PENDING_LOGOUT_TIMER_EXPIRES:
            return initialState
        default:
            return state
    }
}
