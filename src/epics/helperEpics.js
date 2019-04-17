import {
    SERVER_UPDATE_ARTICLE_INVALID,
    SERVER_UPDATE_ARTICLE_SUCCESS,
    SERVER_ADD_ARTICLE_SUCCESS,
    SERVER_ADD_ARTICLE_INVALID,
    SERVER_UPDATE_ARTICLE_IS_DISABLED_SUCCESS,
    SERVER_UPDATE_ARTICLE_IS_DISABLED_INVALID,
    SERVER_UPDATE_ARTICLE_IMAGE_SUCCESS,
    SERVER_UPDATE_ARTICLE_IMAGE_INVALID
} from '../actionTypes/newsActionTypes';
import {
    SERVER_UPDATE_PASSWORD_SUCCESS,
    SERVER_UPDATE_PASSWORD_INVALID,
    SERVER_UPDATE_EMPLOYEE_DETAILS_INVALID,
    SERVER_UPDATE_EMPLOYEE_DETAILS_SUCCESS
} from '../actionTypes/employeeDetailsActionTypes';
import { 
    SERVER_UPDATE_HTML_PAGE_INVALID,
    SERVER_UPDATE_HTML_PAGE_SUCCESS,
    SERVER_ADD_HTML_PAGE_SUCCESS,
    SERVER_ADD_HTML_PAGE_INVALID,
    SERVER_DELETE_HTML_PAGE_SUCCESS,
    SERVER_DELETE_HTML_PAGE_ERROR
} from '../actionTypes/htmlPageActionTypes';
import {
    SERVER_ADD_EMPLOYEE_INVALID,
    SERVER_ADD_EMPLOYEE_SUCCESS,
    SERVER_UPDATE_EMPLOYEE_INVALID,
    SERVER_UPDATE_EMPLOYEE_SUCCESS
} from '../actionTypes/employeesActionTypes';
import {
    SERVER_LOG_IN_INVALID
} from '../actionTypes/logInActionTypes';
import { 
    map, 
    delay
} from 'rxjs/operators';
import { combineEpics } from 'redux-observable';
import { ofType } from 'redux-observable';

const dispatchAfterTimeoutEpic = action$ => 
    action$.pipe(
        ofType(
            SERVER_UPDATE_ARTICLE_INVALID,
            SERVER_UPDATE_ARTICLE_SUCCESS,
            SERVER_ADD_ARTICLE_SUCCESS,
            SERVER_ADD_ARTICLE_INVALID,
            SERVER_UPDATE_HTML_PAGE_INVALID,
            SERVER_UPDATE_HTML_PAGE_SUCCESS,
            SERVER_ADD_HTML_PAGE_SUCCESS,
            SERVER_ADD_HTML_PAGE_INVALID,
            SERVER_UPDATE_ARTICLE_IS_DISABLED_SUCCESS,
            SERVER_UPDATE_ARTICLE_IS_DISABLED_INVALID,
            SERVER_UPDATE_ARTICLE_IMAGE_SUCCESS,
            SERVER_UPDATE_ARTICLE_IMAGE_INVALID,
            SERVER_UPDATE_PASSWORD_SUCCESS,
            SERVER_UPDATE_PASSWORD_INVALID,
            SERVER_UPDATE_EMPLOYEE_DETAILS_SUCCESS,
            SERVER_DELETE_HTML_PAGE_SUCCESS,
            SERVER_DELETE_HTML_PAGE_ERROR,
            SERVER_UPDATE_EMPLOYEE_DETAILS_INVALID,
            SERVER_ADD_EMPLOYEE_INVALID,
            SERVER_ADD_EMPLOYEE_SUCCESS,
            SERVER_UPDATE_EMPLOYEE_INVALID,
            SERVER_UPDATE_EMPLOYEE_SUCCESS,
            SERVER_LOG_IN_INVALID
        ),
        map(action => action.actionToDoAfterTimeout),
        delay(3000)
    )
;

export const helperEpics = combineEpics(
    dispatchAfterTimeoutEpic
);