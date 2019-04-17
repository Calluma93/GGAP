import {
    serverGetArticlesSuccess,
    serverGetArticleSuccess,
    serverGetArticlesError,
    serverGetArticleError,
    serverUpdateArticleSuccess,
    serverUpdateArticleInvalid,
    updateArticleTimerEnds,
    serverUpdateArticleIsDisabledInvalid,
    serverUpdateArticleIsDisabledSuccess,
    serverUpdateArticleIsDisabledError,
    updateArticleIsDisabledTimerEnds,
    serverAddArticleInvalid,
    serverAddArticleSuccess,
    serverAddArticleError,
    addArticleTimerEnds,
    serverUpdateArticleImageInvalid,
    serverUpdateArticleImageSuccess,
    serverUpdateArticleImageError,
    updateArticleImageTimerEnds,
    serverUpdateArticleBodyImageSuccess,
    serverUpdateArticleBodyImageInvalid,
    serverUpdateArticleBodyImageError,
    serverUpdateArticleBodyImageInvalidCallbackComplete,
    serverUpdateArticleBodyImageSuccessCallbackComplete,
    userGetContentParentsSuccess,
    userGetContentParentsError,
    userGetContentParentTypesSuccess,
    userGetContentParentTypesError
} from '../actionCreators/newsActionCreators';
import {
    HTTP_METHODS,
    HTTP_CONTENT_TYPES,
    buildAjaxRequest
} from '../helpers/ajaxHelper';
import {
    serverExpiresToken
} from '../actionCreators/pendingLogoutActionCreators';
import {
    USER_GET_ARTICLE,
    USER_UPDATE_ARTICLE,
    USER_ADD_ARTICLE,
    USER_GET_ARTICLES,
    USER_UPDATE_ARTICLE_IS_DISABLED,
    USER_UPDATE_ARTICLE_IMAGE,
    USER_UPDATE_ARTICLE_BODY_IMAGE,
    SERVER_UPDATE_ARTICLE_BODY_IMAGE_INVALID,
    SERVER_UPDATE_ARTICLE_BODY_IMAGE_SUCCESS,
    USER_GET_CONTENT_PARENTS,
    USER_GET_CONTENT_PARENT_TYPES
} from '../actionTypes/newsActionTypes';
import { of } from 'rxjs';
import { combineEpics } from 'redux-observable';
import { 
    switchMap,
    map, 
    catchError
} from 'rxjs/operators';
import { ajax } from 'rxjs/observable/dom/ajax';
import { ofType } from 'redux-observable';

const userLoadsNewsArticlesEpic = (action$, state$) => 
    action$.pipe(
        ofType(USER_GET_ARTICLES),
        switchMap(action =>
            ajax(buildAjaxRequest(
                "news/articles/overviews/",
                HTTP_METHODS.GET,
                HTTP_CONTENT_TYPES.JSON,
                action.userSettings,
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(article => serverGetArticlesSuccess(article, action.userSettings)),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : of(serverGetArticlesError())
                )
            )
        )
    )
;

const userLoadsNewsArticleEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_GET_ARTICLE),
        switchMap(action => 
            ajax(buildAjaxRequest(
                `news/articles/${action.articleId}/`,
                HTTP_METHODS.GET, 
                HTTP_CONTENT_TYPES.JSON,
                null,
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(article => serverGetArticleSuccess(article)),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : of(serverGetArticleError())
                )
            )
        )
    ) 
;

const userUpdatesNewsArticleEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_UPDATE_ARTICLE),
        switchMap(action => 
            ajax(buildAjaxRequest(
                `news/articles/${action.articleId}/content/`,
                HTTP_METHODS.PUT, 
                HTTP_CONTENT_TYPES.JSON, {
                    publishDate: action.publishDate,
                    title: action.title,
                    metaDescription: action.metaDescription,
                    content: action.content,
                    contentParents: action.contentParents
                },
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(article => serverUpdateArticleSuccess(article, updateArticleTimerEnds())),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : e.status === 400
                            ? of(serverUpdateArticleInvalid(e.response.message, updateArticleTimerEnds()))
                            : of(serverGetArticleError())
                )
            )
        )
    ) 
;

const userUpdatesNewsArticleIsDisabledEpic = (action$, state$) => 
    action$.pipe(
        ofType(USER_UPDATE_ARTICLE_IS_DISABLED),
        switchMap(action => 
            ajax(buildAjaxRequest(
                `news/articles/${action.articleId}/isdisabled/`, 
                HTTP_METHODS.PUT,
                HTTP_CONTENT_TYPES.JSON, {
                    isDisabled: action.isDisabled
                },
                state$.value.user.accessToken
             )).pipe(
                map(data => data.response),
                map(json => serverUpdateArticleIsDisabledSuccess(json, updateArticleIsDisabledTimerEnds())),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : e.status === 400
                            ? of(serverUpdateArticleIsDisabledInvalid(e.response.message, updateArticleIsDisabledTimerEnds()))
                            : of(serverUpdateArticleIsDisabledError())
                )
            )
        )
    )
;

const userAddsNewsArticleEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_ADD_ARTICLE),
        switchMap(action => 
            ajax(buildAjaxRequest(
                "news/articles/",
                HTTP_METHODS.POST, 
                HTTP_CONTENT_TYPES.JSON, {
                    publishDate: action.publishDate,
                    title: action.title,
                    metaDescription: action.metaDescription,
                    content: action.content,
                    contentParents: action.contentParents
                },
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(article => serverAddArticleSuccess(article.articleId, addArticleTimerEnds())),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : e.status === 400
                            ? of(serverAddArticleInvalid(e.response.message, addArticleTimerEnds()))
                            : of(serverAddArticleError())
                )
            )
        )
    ) 
;

const userUpdatesNewsArticleImageEpic = (action$, state$) => 
    action$.pipe(
        ofType(USER_UPDATE_ARTICLE_IMAGE),
        switchMap(action =>
            ajax(buildAjaxRequest(
                `news/articles/${action.articleId}/image/`,
                HTTP_METHODS.PUT,
                HTTP_CONTENT_TYPES.IMAGE, 
                action.imageContent,
                state$.value.user.accessToken,
                action.imageName
            )).pipe(
                map(data => data.response),
                map(json => serverUpdateArticleImageSuccess(json, updateArticleImageTimerEnds())),
                catchError(e =>
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : e.status === 400
                            ? of(serverUpdateArticleImageInvalid(e.response.message, updateArticleImageTimerEnds()))
                            : of(serverUpdateArticleImageError())
                )
            )
        )
    )
;

const userInsertsImageToNewsBodyEpicGroup = () => {

    const userInsertsImageToNewsBodyEpic = (action$, state$) =>
        action$.pipe(
            ofType(USER_UPDATE_ARTICLE_BODY_IMAGE),
            switchMap(action =>
                ajax(buildAjaxRequest(
                    "images/",
                    HTTP_METHODS.POST,
                    HTTP_CONTENT_TYPES.IMAGE,
                    action.imageContent,
                    state$.value.user.accessToken,
                    action.imageName
                )).pipe(
                    map(data => data.response),
                    map(json => serverUpdateArticleBodyImageSuccess(json, action.imageName, action.success)),
                    catchError(e => 
                        e.status === 401
                            ? of(serverExpiresToken(action))
                            : e.status === 400
                                ? of(serverUpdateArticleBodyImageInvalid(e.response.message, action.failure))
                                : of(serverUpdateArticleBodyImageError())
                    )
                )
            )
        )
    ;

    const failureCallbackEpic = action$ => 
        action$.pipe( 
            ofType(SERVER_UPDATE_ARTICLE_BODY_IMAGE_INVALID),
            map(action => of(action.failureCallback(action.message))),
            map(() => serverUpdateArticleBodyImageInvalidCallbackComplete())
        )
    ;

    const successCallbackEpic = action$ =>
        action$.pipe(
            ofType(SERVER_UPDATE_ARTICLE_BODY_IMAGE_SUCCESS),
            map(action => of(action.successCallback(action.lastUploadedImageUrl, action.imageName))),
            map(() => serverUpdateArticleBodyImageSuccessCallbackComplete())
        )
    ;

    return [
        userInsertsImageToNewsBodyEpic,
        failureCallbackEpic,
        successCallbackEpic
    ];
};

const getContentParentsEpic = (action$, state$) => 
    action$.pipe(
        ofType(USER_GET_CONTENT_PARENTS),
        switchMap(action =>
            ajax(buildAjaxRequest(
                "contentparents/",
                HTTP_METHODS.GET,
                HTTP_CONTENT_TYPES.JSON,
                {
                    searchQuery: action.searchQuery,
                },
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(contentParentSearchResults => userGetContentParentsSuccess(contentParentSearchResults)),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : of(userGetContentParentsError(e.response.message))
                )
            )
        )
    )
;

const getContentParentsTypesEpic = (action$, state$) =>
    action$.pipe(
        ofType(USER_GET_CONTENT_PARENT_TYPES),
        switchMap(action =>
            ajax(buildAjaxRequest(
                "contentparents/types/",
                HTTP_METHODS.GET,
                HTTP_CONTENT_TYPES.JSON,
                null,
                state$.value.user.accessToken
            )).pipe(
                map(data => data.response),
                map(contentParentTypes => userGetContentParentTypesSuccess(contentParentTypes)),
                catchError(e => 
                    e.status === 401
                        ? of(serverExpiresToken(action))
                        : of(userGetContentParentTypesError(e.response.message))
                )
            )
        )
    )
;

export const newsEpics = combineEpics(
    userLoadsNewsArticleEpic,
    userUpdatesNewsArticleEpic,
    userAddsNewsArticleEpic,
    userLoadsNewsArticlesEpic,
    userUpdatesNewsArticleIsDisabledEpic,
    userUpdatesNewsArticleImageEpic,
    combineEpics(
        ...userInsertsImageToNewsBodyEpicGroup()
    ),
    getContentParentsEpic,
    getContentParentsTypesEpic
);