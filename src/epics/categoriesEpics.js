import {
    USER_GET_CATEGORIES,
} from '../actionTypes/categoriesActionTypes';
import {
    serverGetCategoriesSuccess,
    serverGetCategoriesError
} from '../actionCreators/categoriesActionCreators';
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

const getCategoriesEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_GET_CATEGORIES),
        switchMap(action => 
            ajax(buildAjaxRequest(
                'categories/',
                HTTP_METHODS.GET,
                HTTP_CONTENT_TYPES.JSON,
                null,
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(categories => serverGetCategoriesSuccess(categories)),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : of(serverGetCategoriesError())
                )
            )
        )
    ) 
;

export const categoriesEpics = combineEpics(
    getCategoriesEpic
);