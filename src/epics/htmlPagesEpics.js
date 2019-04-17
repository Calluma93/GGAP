import{
    serverGetHtmlPagesSuccess,
    serverGetHtmlPagesError,
    serverGetHtmlPageSuccess,
    serverGetHtmlPageError,
    serverUpdateHtmlPageSuccess,
    serverUpdateHtmlPageInvalid,
    serverUpdateHtmlPageError,
    updateHtmlPageTimerEnds,
    serverAddHtmlPageInvalid,
    serverAddHtmlPageSuccess,
    serverAddHtmlPageError,
    addHtmlPageTimerEnds,
    serverGetHtmlPageTypesSuccess,
    serverGetHtmlPageTypesError,
    serverUpdateHtmlPagePublishedSuccess,
    serverUpdateHtmlPagePublishedError,
    serverDeleteHtmlPageSuccess,
    serverDeleteHtmlPageError,
    deleteHtmlPageTimerEnds
} from '../actionCreators/htmlPagesActionCreators';
import {
    USER_GET_HTML_PAGES,
    USER_GET_HTML_PAGE,
    USER_UPDATE_HTML_PAGE,
    USER_ADD_HTML_PAGE,
    USER_GET_HTML_PAGE_TYPES,
    USER_UPDATE_HTML_PAGE_PUBLISHED,
    USER_DELETE_HTML_PAGE
} from '../actionTypes/htmlPageActionTypes';
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

const getHtmlPagesEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_GET_HTML_PAGES),
        switchMap(action => 
            ajax(buildAjaxRequest(
                'pages/overviews/',
                HTTP_METHODS.GET,
                HTTP_CONTENT_TYPES.JSON,
                null,
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(pages => serverGetHtmlPagesSuccess(pages)),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : of(serverGetHtmlPagesError())
                )
            )
        )
    ) 
;

const getHtmlPageEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_GET_HTML_PAGE),
        switchMap(action => 
            ajax(buildAjaxRequest(
                `pages/${action.pageId}/`,
                HTTP_METHODS.GET,
                HTTP_CONTENT_TYPES.JSON,
                null,
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(page => serverGetHtmlPageSuccess(page)),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : of(serverGetHtmlPageError())
                )
            )
        )
    ) 
;

const updateHtmlPageEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_UPDATE_HTML_PAGE),
        switchMap(action => 
            ajax(buildAjaxRequest(
                `pages/${action.pageId}/content/`,
                HTTP_METHODS.PUT,
                HTTP_CONTENT_TYPES.JSON, 
                {
                    title: action.title,
                    metaDescription: action.metaDescription,
                    metaKeywords: action.metaKeywords,
                    content: action.content
                },
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(page => serverUpdateHtmlPageSuccess(page, updateHtmlPageTimerEnds())),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : e.status === 400
                            ? of(serverUpdateHtmlPageInvalid(e.response.message, updateHtmlPageTimerEnds()))
                            : of(serverUpdateHtmlPageError())
                )
            )
        )
    ) 
;

const createHtmlPageEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_ADD_HTML_PAGE),
        switchMap(action => 
            ajax(buildAjaxRequest(
                'pages/',
                HTTP_METHODS.POST,
                HTTP_CONTENT_TYPES.JSON, {
                    name: action.name,
                    pageType: action.pageType,
                    title: action.title,
                    metaDescription: action.metaDescription,
                    metaKeywords: action.metaKeywords,
                    content: action.content
                },
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(page => serverAddHtmlPageSuccess(
                    page.name,
                    page.pageType,
                    page.title,
                    page.metaDescription,
                    page.metaKeywords,
                    page.content, 
                    addHtmlPageTimerEnds()
                )),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : e.status === 400
                            ? of(serverAddHtmlPageInvalid(e.response.message, addHtmlPageTimerEnds()))
                            : of(serverAddHtmlPageError())
                )
            )
        )
    ) 
;

const getHtmlPageTypesEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_GET_HTML_PAGE_TYPES),
        switchMap(action => 
            ajax(buildAjaxRequest(
                'pages/pagetypes/',
                HTTP_METHODS.GET,
                HTTP_CONTENT_TYPES.JSON,
                null,
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(products => serverGetHtmlPageTypesSuccess(products)),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : of(serverGetHtmlPageTypesError())
                )
            )
        )
    ) 
;

const updateHtmlPagePublishedEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_UPDATE_HTML_PAGE_PUBLISHED),
        switchMap(action => 
            ajax(buildAjaxRequest(
                `pages/${action.pageId}/isPublished/`,
                HTTP_METHODS.PUT,
                HTTP_CONTENT_TYPES.JSON, {
                    isPublished: action.isPublished
                },
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(page => serverUpdateHtmlPagePublishedSuccess(page.pageId, page.isPublished)),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : of(serverUpdateHtmlPagePublishedError())
                )
            )
        )
    ) 
;

const userDeletesHtmlPageEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_DELETE_HTML_PAGE),
        switchMap(action => 
            ajax(buildAjaxRequest(
                `pages/${action.pageId}/`,
                HTTP_METHODS.DELETE,
                HTTP_CONTENT_TYPES.JSON,
                {},
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(page => serverDeleteHtmlPageSuccess(action.pageId, deleteHtmlPageTimerEnds())),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : of(serverDeleteHtmlPageError())
                )
            )
        )
    ) 
;

export const htmlPagesEpics = combineEpics(
    getHtmlPagesEpic,
    updateHtmlPageEpic,
    createHtmlPageEpic,
    getHtmlPageTypesEpic,
    updateHtmlPagePublishedEpic,
    userDeletesHtmlPageEpic,
    getHtmlPageEpic
);