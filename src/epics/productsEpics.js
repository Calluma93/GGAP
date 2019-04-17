import{
    serverGetProductsSuccess,
    serverGetProductsError,
    serverGetProductsBrandsSuccess,
    serverGetProductsBrandsError,
    serverGetProductsTagsSuccess,
    serverGetProductsTagsError,
    serverGetProductsLastEditorsSuccess,
    serverGetProductsLastEditorsError
} from '../actionCreators/productsActionCreators';
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
    USER_GET_PRODUCTS,
    USER_GET_PRODUCTS_BRANDS,
    USER_GET_PRODUCTS_TAGS,
    USER_GET_PRODUCTS_LAST_EDITORS
} from '../actionTypes/productsActionTypes';
import {
    USER_GET_CATEGORIES
} from '../actionTypes/categoriesActionTypes';
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

const userLoadsProductsEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_GET_PRODUCTS),
        switchMap(action => 
            ajax(buildAjaxRequest(
                'products/',
                HTTP_METHODS.GET,
                HTTP_CONTENT_TYPES.JSON,
                action.userSettings,
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(products => serverGetProductsSuccess(products, action.userSettings)),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : of(serverGetProductsError())
                )
            )
        )
    ) 
;


const userLoadsProductsBrandsEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_GET_PRODUCTS_BRANDS),
        switchMap(action => 
            ajax(buildAjaxRequest(
                'products/brands',
                HTTP_METHODS.GET,
                HTTP_CONTENT_TYPES.JSON,
                null,
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(brands => serverGetProductsBrandsSuccess(brands)),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : of(serverGetProductsBrandsError())
                )
            )
        )
    ) 
;

const userLoadsProductsTagsEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_GET_PRODUCTS_TAGS),
        switchMap(action => 
            ajax(buildAjaxRequest(
                'products/tags/',
                HTTP_METHODS.GET,
                HTTP_CONTENT_TYPES.JSON,
                null,
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(tags => serverGetProductsTagsSuccess(tags)),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : of(serverGetProductsTagsError())
                )
            )
        )
    ) 
;

const userLoadsProductsLastEditorsEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_GET_PRODUCTS_LAST_EDITORS),
        switchMap(action => 
            ajax(buildAjaxRequest(
                'products/lasteditors/',
                HTTP_METHODS.GET,
                HTTP_CONTENT_TYPES.JSON,
                null,
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(editors => serverGetProductsLastEditorsSuccess(editors)),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : of(serverGetProductsLastEditorsError())
                )
            )
        )
    ) 
;

export const productsEpics = combineEpics(
    userLoadsProductsEpic,
    userLoadsProductsBrandsEpic,
    userLoadsProductsTagsEpic,
    userLoadsProductsLastEditorsEpic
);