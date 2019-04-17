import {
    serverGetEmployeesSuccess,
    serverGetEmployeesError,
    serverAddEmployeeInvalid,
    serverAddEmployeeSuccess,
    serverAddEmployeeError,
    addEmployeeTimerEnds,
    serverUpdateEmployeeInvalid,
    serverUpdateEmployeeSuccess,
    serverUpdateEmployeeError,
    updateEmployeeTimerEnds,
    serverUpdateEmployeeIsDisabledSuccess,
    serverUpdateEmployeeIsDisabledError,
    serverGetRolesSuccess,
    serverGetRolesError
} from '../actionCreators/employeesActionCreators';
import {
    USER_GET_EMPLOYEES,
    USER_ADD_EMPLOYEE,
    USER_UPDATE_EMPLOYEE,
    USER_UPDATE_EMPLOYEE_IS_DISABLED,
    USER_GET_ROLES
} from '../actionTypes/employeesActionTypes';
import {
    HTTP_METHODS,
    HTTP_CONTENT_TYPES,
    buildAjaxRequest
} from '../helpers/ajaxHelper';
import {
    serverExpiresToken
} from '../actionCreators/pendingLogoutActionCreators';
import { of } from 'rxjs';
import { 
    switchMap,
    map, 
    catchError
} from 'rxjs/operators';
import { ajax } from 'rxjs/observable/dom/ajax';
import { ofType } from 'redux-observable';
import { combineEpics } from 'redux-observable';

const getEmployeesEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_GET_EMPLOYEES),
        switchMap(action => 
            ajax(buildAjaxRequest(
                'employees/',
                HTTP_METHODS.GET,
                HTTP_CONTENT_TYPES.JSON,
                null,
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(employees => serverGetEmployeesSuccess(employees)),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : of(serverGetEmployeesError())
                )
            )
        )
    ) 
;

const createEmployeeEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_ADD_EMPLOYEE),
        switchMap(action => 
            ajax(buildAjaxRequest(
                'employees/',
                HTTP_METHODS.POST,
                HTTP_CONTENT_TYPES.JSON,
                {
                    userName: action.userName,
                    password: action.password,
                    confirmPassword: action.confirmPassword,
                    firstName: action.firstName,
                    lastName: action.lastName,
                    roles: action.roles,
                    isDisabled: action.isDisabled
                },
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(employee => serverAddEmployeeSuccess(employee, addEmployeeTimerEnds())),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : e.status === 400
                            ? of(serverAddEmployeeInvalid(e.response.message, addEmployeeTimerEnds()))
                            : of(serverAddEmployeeError())
                )
            )
        )
    ) 
;

const updateEmployeeEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_UPDATE_EMPLOYEE),
        switchMap(action => 
            ajax(buildAjaxRequest(
                `employees/${action.employeeId}/details/`,
                HTTP_METHODS.PUT,
                HTTP_CONTENT_TYPES.JSON,
                {
                    userName: action.userName,
                    firstName: action.firstName,
                    lastName: action.lastName,
                    roles: action.roles
                },
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(employee => serverUpdateEmployeeSuccess(
                    action.employeeId,
                    action.userName,
                    action.firstName,
                    action.lastName,
                    action.roles,
                    updateEmployeeTimerEnds()
                )),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : e.status === 400
                            ? of(serverUpdateEmployeeInvalid(e.response.message, updateEmployeeTimerEnds()))
                            : of(serverUpdateEmployeeError())
                )
            )
        )
    ) 
;

const updateEmployeeIsDisabledEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_UPDATE_EMPLOYEE_IS_DISABLED),
        switchMap(action => 
            ajax(buildAjaxRequest(
                `employees/${action.employeeId}/isdisabled/`,
                HTTP_METHODS.PUT,
                HTTP_CONTENT_TYPES.JSON,
                {
                    isDisabled: action.isDisabled
                },
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(employee => serverUpdateEmployeeIsDisabledSuccess(action.employeeId, action.isDisabled)),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : of(serverUpdateEmployeeIsDisabledError())
                )
            )
        )
    ) 
;

const getEmployeeRolesEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_GET_ROLES),
        switchMap(action => 
            ajax(buildAjaxRequest(
                'employees/roles/',
                HTTP_METHODS.GET,
                HTTP_CONTENT_TYPES.JSON,
                null,
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(roles => serverGetRolesSuccess(roles)),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : of(serverGetRolesError())
                )
            )
        )
    ) 
;

export const employeesEpics = combineEpics(
    getEmployeesEpic,
    createEmployeeEpic,
    updateEmployeeEpic,
    updateEmployeeIsDisabledEpic,
    getEmployeeRolesEpic
);