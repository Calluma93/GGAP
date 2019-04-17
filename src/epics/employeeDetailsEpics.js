import {
    serverUpdateEmployeeDetailsInvalid,
    serverUpdateEmployeeDetailsSuccess,
    serverUpdateEmployeeDetailsError,
    updateEmployeeDetailsTimerEnds,
    serverGetEmployeeDetailsSuccess,
    serverGetEmployeeDetailsError,
    serverUpdatePasswordInvalid,
    serverUpdatePasswordSuccess,
    serverUpdatePasswordError,
    updatePasswordTimerEnds
} from '../actionCreators/employeeDetailsActionCreators';
import {
    serverExpiresToken
} from '../actionCreators/pendingLogoutActionCreators';
import {
    USER_UPDATE_PASSWORD,
    USER_GET_EMPLOYEE_DETAILS,
    USER_UPDATE_EMPLOYEE_DETAILS
} from '../actionTypes/employeeDetailsActionTypes';
import {
    HTTP_METHODS,
    HTTP_CONTENT_TYPES,
    buildAjaxRequest
} from '../helpers/ajaxHelper';
import { of } from 'rxjs';
import { combineEpics } from 'redux-observable';
import { 
    switchMap,
    map, 
    catchError
} from 'rxjs/operators';
import { ajax } from 'rxjs/observable/dom/ajax';
import { ofType } from 'redux-observable';

const userGetEmployeeDetailsEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_GET_EMPLOYEE_DETAILS),
        switchMap(action =>
            ajax(buildAjaxRequest(
                "employee/details/",
                HTTP_METHODS.GET,
                HTTP_CONTENT_TYPES.JSON,
                null,
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(json => serverGetEmployeeDetailsSuccess(json.userName, json.firstName, json.lastName)),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : of(serverGetEmployeeDetailsError())
                )
            )
        )
    ) 
;

const userUpdatePasswordEpic = (action$, state$) => 
    action$.pipe(
        ofType(USER_UPDATE_PASSWORD),
        switchMap(action => 
            ajax(buildAjaxRequest(
                "employee/password/",
                HTTP_METHODS.PUT,
                HTTP_CONTENT_TYPES.JSON,
                {
                    currentPassword: action.currentPassword,
                    newPassword: action.newPassword,
                    confirmNewPassword: action.confirmNewPassword
                },
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(() => serverUpdatePasswordSuccess(updatePasswordTimerEnds())),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : e.status === 400
                            ? of(serverUpdatePasswordInvalid(e.response.message, updatePasswordTimerEnds()))
                            : of(serverUpdatePasswordError())
                )
            )
        )
    )
;

const userUpdateEmployeeDetailsEpic = (action$, state$) => 
    action$.pipe(
        ofType(USER_UPDATE_EMPLOYEE_DETAILS),
        switchMap(action => 
            ajax(buildAjaxRequest(
                "employee/details/",
                HTTP_METHODS.PUT,
                HTTP_CONTENT_TYPES.JSON,
                {
                    userName: action.userName,
                    firstName: action.firstName,
                    lastName: action.lastName
                },
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(json => serverUpdateEmployeeDetailsSuccess(json.userName, json.firstName, json.lastName, updateEmployeeDetailsTimerEnds())),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : e.status === 400
                            ? of(serverUpdateEmployeeDetailsInvalid(e.response.message, updateEmployeeDetailsTimerEnds()))
                            : of(serverUpdateEmployeeDetailsError())
                )
            )
        )
    )
;

export const employeeDetailsEpics = combineEpics(
    userGetEmployeeDetailsEpic,
    userUpdatePasswordEpic,
    userUpdateEmployeeDetailsEpic
);