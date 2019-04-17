import {
    SERVER_GET_EMPLOYEES_SUCCESS,
    SERVER_GET_EMPLOYEES_ERROR,
    SERVER_ADD_EMPLOYEE_INVALID,
    SERVER_ADD_EMPLOYEE_SUCCESS,
    SERVER_ADD_EMPLOYEE_ERROR,
    ADD_EMPLOYEE_TIMER_ENDS,
    SERVER_UPDATE_EMPLOYEE_INVALID,
    SERVER_UPDATE_EMPLOYEE_SUCCESS,
    SERVER_UPDATE_EMPLOYEE_ERROR,
    UPDATE_EMPLOYEE_TIMER_ENDS,
    SERVER_UPDATE_EMPLOYEE_IS_DISABLED_SUCCESS,
    SERVER_UPDATE_EMPLOYEE_IS_DISABLED_ERROR,
    SERVER_GET_ROLES_SUCCESS,
    SERVER_GET_ROLES_ERROR,
    USER_OPENS_CREATE_EMPLOYEE_FORM,
    USER_CLOSES_CREATE_EMPLOYEE_FORM,
    USER_GET_EMPLOYEES,
    USER_ADD_EMPLOYEE,
    USER_UPDATE_EMPLOYEE,
    USER_UPDATE_EMPLOYEE_IS_DISABLED,
    USER_GET_ROLES
} from '../../actionTypes/employeesActionTypes'
import {
    USER_LOG_OUT
} from '../../actionTypes/privateLayoutActionTypes'
import { PENDING_LOGOUT_TIMER_EXPIRES } from '../../actionTypes/pendingLogoutActionTypes';

const initialGetEmployeesState = {
    isGettingEmployees: false
};

const initialGetEmployeeRolesState = {
    isGettingEmployeeRoles: false
};

const initialCreateEmployeeState = {
    isCreatingEmployee: false,
    createEmployeeInvalid: false,
    invalidCreateEmployeeMessage: null,
    createEmployeeSuccessful: false
};

const initialUpdateEmployeeState = {
    isUpdatingEmployee: false,
    updateEmployeeInvalid: false,
    invalidUpdateEmployeeMessage: null,
    updateEmployeeSuccessful: false
};

const initialUpdateIsDisabledEmployeeState = {
    isUpdatingEmployeeIsDisabled: false
};

const initialState = {
    ...initialGetEmployeesState,
    ...initialGetEmployeeRolesState,
    ...initialCreateEmployeeState,
    ...initialUpdateEmployeeState,
    ...initialUpdateIsDisabledEmployeeState,
    isCreateEmployeeFormOpen: false
};

export function employeesUi(state = initialState, action) {
    switch(action.type) {
        case USER_GET_EMPLOYEES:
            return {
                ...state,
                isGettingEmployees: true
            }
        case SERVER_GET_EMPLOYEES_SUCCESS:
        case SERVER_GET_EMPLOYEES_ERROR:
            return {
                ...state,
                ...initialGetEmployeesState
            }
        case USER_GET_ROLES:
            return {
                ...state,
                isGettingEmployeeRoles: true
            }
        case SERVER_GET_ROLES_SUCCESS:
        case SERVER_GET_ROLES_ERROR:
            return {
                ...state,
                ...initialGetEmployeeRolesState
            }
        case USER_ADD_EMPLOYEE:
            return {
                ...state,
                isCreatingEmployee: true,
                createEmployeeInvalid: false,
                invalidCreateEmployeeMessage: null,
                createEmployeeSuccessful: false
            }
        case SERVER_ADD_EMPLOYEE_INVALID:
            return {
                ...state,
                isCreatingEmployee: false,
                createEmployeeInvalid: true,
                invalidCreateEmployeeMessage: action.message,
                createEmployeeSuccessful: false
            }
        case SERVER_ADD_EMPLOYEE_SUCCESS:
            return {
                ...state,
                isCreatingEmployee: false,
                createEmployeeInvalid: false,
                invalidCreateEmployeeMessage: null,
                createEmployeeSuccessful: true,
                isCreateEmployeeFormOpen: false
            }
        case ADD_EMPLOYEE_TIMER_ENDS:
        case SERVER_ADD_EMPLOYEE_ERROR:
            return {
                ...state,
                ...initialCreateEmployeeState
            }
        case USER_OPENS_CREATE_EMPLOYEE_FORM:
            return {
                ...state,
                isCreateEmployeeFormOpen: true
            }
        case USER_CLOSES_CREATE_EMPLOYEE_FORM:
            return {
                ...state,
                isCreateEmployeeFormOpen: false
            }
        case USER_UPDATE_EMPLOYEE:
            return {
                ...state,
                isUpdatingEmployee: true,
                updateEmployeeInvalid: false,
                invalidUpdateEmployeeMessage: null,
                updateEmployeeSuccessful: false
            }
        case SERVER_UPDATE_EMPLOYEE_INVALID:
            return {
                ...state,
                isUpdatingEmployee: false,
                updateEmployeeInvalid: true,
                invalidUpdateEmployeeMessage: action.message,
                updateEmployeeSuccessful: false
            }
        case SERVER_UPDATE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                isUpdatingEmployee: false,
                updateEmployeeInvalid: false,
                invalidUpdateEmployeeMessage: null,
                updateEmployeeSuccessful: true
            }
        case UPDATE_EMPLOYEE_TIMER_ENDS:
        case SERVER_UPDATE_EMPLOYEE_ERROR:
            return {
                ...state,
                ...initialUpdateEmployeeState
            }
        case USER_UPDATE_EMPLOYEE_IS_DISABLED:
            return {
                ...state,
                isUpdatingEmployeeIsDisabled: true
            }
        case SERVER_UPDATE_EMPLOYEE_IS_DISABLED_SUCCESS:
        case SERVER_UPDATE_EMPLOYEE_IS_DISABLED_ERROR:
            return {
                ...state,
                ...initialUpdateIsDisabledEmployeeState
            }
        case USER_LOG_OUT:
        case PENDING_LOGOUT_TIMER_EXPIRES:
            return initialState
        default:
            return state
    }
}

