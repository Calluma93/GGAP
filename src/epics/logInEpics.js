import {
    serverLogInInvalid,
    serverLogInSuccess,
    serverLogInError,
    logInTimerEnds
} from '../actionCreators/logInActionCreators'
import {
    HTTP_METHODS,
    HTTP_CONTENT_TYPES,
    buildAjaxRequest
} from '../helpers/ajaxHelper'
import {
    USER_LOG_IN
} from '../actionTypes/logInActionTypes';
import { parseToBool } from '../helpers/parseToBool';
import { 
    of,
} from 'rxjs';
import { 
    switchMap,
    map, 
    catchError,
} from 'rxjs/operators'; 
import { ajax } from 'rxjs/observable/dom/ajax';
import { ofType, combineEpics } from 'redux-observable';

const userLogInEpic = action$ => 
    action$.pipe(
        ofType(USER_LOG_IN),
        
        switchMap(action =>
            ajax(buildAjaxRequest(
                "gettoken/",
                HTTP_METHODS.POST,
                HTTP_CONTENT_TYPES.X_WWW_FORM_URLENCODED,
                {
                    grant_type: "password",
                    userName: action.userName,
                    password: action.password
                }
            )).pipe(
                map(data => data.response), 
                map(response => serverLogInSuccess(
                    action.actionToRetry,
                    response.access_token,
                    response.firstName,
                    response.lastName,
                    response.userName,
                    parseToBool(response.canAccessEmployeesAdmin),
                    parseToBool(response.canAccessContentAdmin),
                    parseToBool(response.canAccessProductsAdmin)
                )),
                catchError(e => e.status === 400
                    ? of(serverLogInInvalid(logInTimerEnds()))
                    : of(serverLogInError())
                )
            )
        )
    )
;


export const logInEpics = combineEpics(
    userLogInEpic
);