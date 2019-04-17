import {
    USER_GET_EMPLOYEES,
    SERVER_GET_EMPLOYEES_SUCCESS,
    SERVER_GET_EMPLOYEES_ERROR,
    USER_ADD_EMPLOYEE,
    SERVER_ADD_EMPLOYEE_INVALID,
    SERVER_ADD_EMPLOYEE_SUCCESS,
    SERVER_ADD_EMPLOYEE_ERROR,
    ADD_EMPLOYEE_TIMER_ENDS,
    USER_UPDATE_EMPLOYEE,
    SERVER_UPDATE_EMPLOYEE_INVALID,
    SERVER_UPDATE_EMPLOYEE_SUCCESS,
    SERVER_UPDATE_EMPLOYEE_ERROR,
    UPDATE_EMPLOYEE_TIMER_ENDS,
    USER_UPDATE_EMPLOYEE_IS_DISABLED,
    SERVER_UPDATE_EMPLOYEE_IS_DISABLED_SUCCESS,
    SERVER_UPDATE_EMPLOYEE_IS_DISABLED_ERROR,
    USER_GET_ROLES,
    SERVER_GET_ROLES_SUCCESS,
    SERVER_GET_ROLES_ERROR,
    USER_OPENS_CREATE_EMPLOYEE_FORM,
    USER_CLOSES_CREATE_EMPLOYEE_FORM
} from '../actionTypes/employeesActionTypes';

// Get Employees

export function userGetEmployees() {
    return{
        type: USER_GET_EMPLOYEES
    } 
}

export function serverGetEmployeesSuccess(employees){
    return{
        type: SERVER_GET_EMPLOYEES_SUCCESS,
        employees
    } 
}

export function serverGetEmployeesError(){
    return{
        type: SERVER_GET_EMPLOYEES_ERROR
    } 
}


// Add Employee

export function userAddEmployee(userName, password, confirmPassword, firstName, lastName, roles, isDisabled) {
    return{
        type: USER_ADD_EMPLOYEE,
        userName,
        password,
        confirmPassword,
        firstName,
        lastName,
        roles,
        isDisabled
    } 
}

export function serverAddEmployeeInvalid(message, actionToDoAfterTimeout){
    return{
        type: SERVER_ADD_EMPLOYEE_INVALID,
        message,
        actionToDoAfterTimeout
    } 
}

export function serverAddEmployeeSuccess(employee, actionToDoAfterTimeout) {
    return{
        type: SERVER_ADD_EMPLOYEE_SUCCESS,
        employee,
        actionToDoAfterTimeout
    } 
}

export function serverAddEmployeeError(){
    return{
        type: SERVER_ADD_EMPLOYEE_ERROR
    } 
}

export function addEmployeeTimerEnds() {
    return{
        type: ADD_EMPLOYEE_TIMER_ENDS
    } 
}


// Update Employee

export function userUpdateEmployee(employeeId, userName, firstName, lastName, roles) {
    return{
        type: USER_UPDATE_EMPLOYEE,
        employeeId,
        userName,
        firstName,
        lastName,
        roles
    } 
}

export function serverUpdateEmployeeInvalid(message, actionToDoAfterTimeout){
    return{
        type: SERVER_UPDATE_EMPLOYEE_INVALID,
        message,
        actionToDoAfterTimeout
    } 
}

export function serverUpdateEmployeeSuccess(employeeId, userName, firstname, lastname, roles, actionToDoAfterTimeout) {
    return{
        type: SERVER_UPDATE_EMPLOYEE_SUCCESS,
        employeeId,
        userName,
        firstname,
        lastname,
        roles,
        actionToDoAfterTimeout
    } 
}

export function serverUpdateEmployeeError() {
    return{
        type: SERVER_UPDATE_EMPLOYEE_ERROR
    } 
}

export function updateEmployeeTimerEnds() {
    return{
        type: UPDATE_EMPLOYEE_TIMER_ENDS
    } 
}


// Update Employee Is Disabled

export function userUpdateEmployeeIsDisabled(employeeId, isDisabled) {
    return{
        type: USER_UPDATE_EMPLOYEE_IS_DISABLED,
        employeeId,
        isDisabled
    } 
}

export function serverUpdateEmployeeIsDisabledSuccess(employeeId, isDisabled) {
    return{
        type: SERVER_UPDATE_EMPLOYEE_IS_DISABLED_SUCCESS,
        employeeId,
        isDisabled
    } 
}

export function serverUpdateEmployeeIsDisabledError() {
    return{
        type: SERVER_UPDATE_EMPLOYEE_IS_DISABLED_ERROR
    } 
}


// Get Roles

export function userGetRoles() {
    return{
        type: USER_GET_ROLES
    } 
}

export function serverGetRolesSuccess(roles) {
    return{
        type: SERVER_GET_ROLES_SUCCESS,
        roles
    } 
}

export function serverGetRolesError() {
    return{
        type: SERVER_GET_ROLES_ERROR
    } 
}


// Misc.

export function userOpensCreateEmployeeForm() {
    return{
        type: USER_OPENS_CREATE_EMPLOYEE_FORM
    } 
}

export function userClosesCreateEmployeeForm() {
    return{
        type: USER_CLOSES_CREATE_EMPLOYEE_FORM
    } 
}








