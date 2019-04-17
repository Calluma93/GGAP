import{
    serverGetPendingProductsSuccess,
    serverGetPendingProductsError,
    serverGetStoresSuccess,
    serverGetStoresError,
    serverGetBrandsSuccess,
    serverGetBrandsError
} from '../actionCreators/pendingProductsActionCreators'
import {
    HTTP_METHODS,
    HTTP_CONTENT_TYPES,
    buildAjaxRequest
} from '../helpers/ajaxHelper';
import {
    USER_GET_PENDING_PRODUCTS,
    USER_GET_STORES,
    USER_GET_BRANDS
} from '../actionTypes/pendingProductsActionTypes';
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

const userLoadsPendingProductsEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_GET_PENDING_PRODUCTS),
        switchMap(action => 
            ajax(buildAjaxRequest(
                'pendingproducts/',
                HTTP_METHODS.GET,
                HTTP_CONTENT_TYPES.JSON,
                action.userSettings,
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(products => serverGetPendingProductsSuccess(products, action.userSettings)),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : of(serverGetPendingProductsError())
                )
            )
        )
    ) 
;

const userLoadsStoresEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_GET_STORES),
        switchMap(action => 
            ajax(buildAjaxRequest(
                'stocklocations/',
                HTTP_METHODS.GET,
                HTTP_CONTENT_TYPES.JSON,
                null,
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(stores => serverGetStoresSuccess(stores)),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : of(serverGetStoresError())
                )
            )
        )
    ) 
;

const userLoadsBrandsEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_GET_BRANDS),
        switchMap(action => 
            ajax(buildAjaxRequest(
                'pendingproducts/brands/',
                HTTP_METHODS.GET,
                HTTP_CONTENT_TYPES.JSON,
                null,
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(brands => serverGetBrandsSuccess(brands)),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : of(serverGetBrandsError())
                )
            )
        )
    ) 
;

export const pendingProductsEpics = combineEpics(
    userLoadsPendingProductsEpic,
    userLoadsStoresEpic,
    userLoadsBrandsEpic
);