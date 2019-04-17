import{
    serverGetSortBysSuccess,
    serverGetSortBysError
} from '../actionCreators/productsSortBysActionCreators';
import {
    HTTP_METHODS,
    HTTP_CONTENT_TYPES,
    buildAjaxRequest
} from '../helpers/ajaxHelper';
import {
    USER_GET_SORT_BYS
} from '../actionTypes/productsSortBysActionTypes'
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

const userGetSortBysEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_GET_SORT_BYS),
        switchMap(action => 
            ajax(buildAjaxRequest(
                'productsortbys/',
                HTTP_METHODS.GET,
                HTTP_CONTENT_TYPES.JSON,
                null,
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(article => serverGetSortBysSuccess(article)),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : of(serverGetSortBysError())
                )
            )
        )
    ) 
;

export const productsSortBysEpics = combineEpics(
    userGetSortBysEpic
);