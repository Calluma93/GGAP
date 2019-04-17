import{
    USER_GET_HTML_PAGES,
    SERVER_GET_HTML_PAGES_SUCCESS,   
    SERVER_GET_HTML_PAGES_ERROR,
    USER_GET_HTML_PAGE,
    SERVER_GET_HTML_PAGE_SUCCESS,
    SERVER_GET_HTML_PAGE_ERROR,
    USER_UPDATE_HTML_PAGE,
    SERVER_UPDATE_HTML_PAGE_SUCCESS,
    SERVER_UPDATE_HTML_PAGE_INVALID,
    SERVER_UPDATE_HTML_PAGE_ERROR,
    UPDATE_HTML_PAGE_TIMER_ENDS,
    USER_ADD_HTML_PAGE,
    SERVER_ADD_HTML_PAGE_INVALID,
    SERVER_ADD_HTML_PAGE_SUCCESS,
    SERVER_ADD_HTML_PAGE_ERROR,
    ADD_HTML_PAGE_TIMER_ENDS,
    USER_UPDATE_HTML_PAGE_PUBLISHED,
    SERVER_UPDATE_HTML_PAGE_PUBLISHED_SUCCESS,
    SERVER_UPDATE_HTML_PAGE_PUBLISHED_ERROR,
    USER_UPDATE_HTML_PAGE_TITLE,
    USER_UPDATE_HTML_PAGE_META_DESCRIPTION,
    USER_UPDATE_HTML_PAGE_META_KEYWORDS,
    USER_UPDATE_HTML_PAGE_CONTENT,
    USER_DELETE_HTML_PAGE,
    SERVER_DELETE_HTML_PAGE_SUCCESS,
    SERVER_DELETE_HTML_PAGE_ERROR,
    DELETE_HTML_PAGE_TIMER_ENDS,
    USER_GET_HTML_PAGE_TYPES,
    SERVER_GET_HTML_PAGE_TYPES_SUCCESS,
    SERVER_GET_HTML_PAGE_TYPES_ERROR
} from '../../actionTypes/htmlPageActionTypes';

import {
    USER_LOG_OUT
} from '../../actionTypes/privateLayoutActionTypes'
import { PENDING_LOGOUT_TIMER_EXPIRES } from '../../actionTypes/pendingLogoutActionTypes';

const initialGetHtmlPagesState = {
    isGettingHtmlPages: false,
    htmlPages: []
}

const initialGetHtmlPageTypesState = {
    isGettingHtmlPageTypes: false
}

const initialCreateHtmlPageState = {
    isCreatingHtmlPage: false,
    createHtmlPageInvalid: false,
    invalidCreateHtmlPageMessage: null,
    createHtmlPageSuccessful: false,
    addRedirectRequired: false
};

const initialDeleteHtmlPageState = {
    isDeletingHtmlPage: false,
    deleteHtmlPageSuccessful: false,
    deleteRedirectRequired: false
}

const initialEditHtmlPageState = {
    isGettingHtmlPage: false,
    currentHtmlPage: {},
    isUpdatingHtmlPage: false,
    updateHtmlPageInvalid: false,
    invalidUpdateHtmlPageMessage: null,
    updateHtmlPageSuccessful: false
};

const initialUpdateHtmlPagePublishState = {
    isUpdatingHtmlPagePublish: false
}

const initialState = { 
    ...initialGetHtmlPagesState,
    ...initialGetHtmlPageTypesState,
    ...initialEditHtmlPageState,
    ...initialCreateHtmlPageState,
    ...initialUpdateHtmlPagePublishState,
    ...initialDeleteHtmlPageState
}

export function htmlPages(state = initialState, action){
    switch(action.type){
        case USER_GET_HTML_PAGES:
            return {
                ...state,
                isGettingHtmlPages: true,
                addRedirectRequired: false,
                deleteRedirectRequired: false
            }
        case SERVER_GET_HTML_PAGES_SUCCESS:
            return {
                ...state,
                ...initialGetHtmlPagesState,
                ...initialEditHtmlPageState,
                htmlPages: action.htmlPages
            }
        case SERVER_GET_HTML_PAGES_ERROR:
            return {
                ...state,
                ...initialGetHtmlPagesState,
                ...initialEditHtmlPageState
            }
        case USER_GET_HTML_PAGE_TYPES:
            return {
                ...state,
                isGettingHtmlPageTypes: true
            }
        case SERVER_GET_HTML_PAGE_TYPES_SUCCESS:
        case SERVER_GET_HTML_PAGE_TYPES_ERROR:
            return {
                ...state,
                ...initialGetHtmlPageTypesState
            }
        case USER_GET_HTML_PAGE:
            return {
                ...state,
                isGettingHtmlPage: true
            }
        case SERVER_GET_HTML_PAGE_SUCCESS:
            return {
                ...state,
                ...initialEditHtmlPageState,
                currentHtmlPage: action.htmlPage
            }
        case SERVER_GET_HTML_PAGE_ERROR:
            return {
                ...state,
                ...initialEditHtmlPageState
            }
        case USER_UPDATE_HTML_PAGE:
            return {
                ...state,
                isUpdatingHtmlPage: true,
                updateHtmlPageInvalid: false,
                invalidUpdateHtmlPageMessage: null,
                updateHtmlPageSuccessful: false
            }
        case SERVER_UPDATE_HTML_PAGE_INVALID:
            return {
                ...state,
                isUpdatingHtmlPage: false,
                updateHtmlPageInvalid: true,
                invalidUpdateHtmlPageMessage: action.message,
                updateHtmlPageSuccessful: false
            }
        case SERVER_UPDATE_HTML_PAGE_SUCCESS:
            return {
                ...state,
                htmlPages: [],
                isUpdatingHtmlPage: false,
                updateHtmlPageInvalid: false,
                invalidUpdateHtmlPageMessage: null,
                updateHtmlPageSuccessful: true
            }
        case UPDATE_HTML_PAGE_TIMER_ENDS:
            return {
                ...state,
                isUpdatingHtmlPage: false,
                updateHtmlPageInvalid: false,
                invalidUpdateHtmlPageMessage: null,
                updateHtmlPageSuccessful: false
            }
        case SERVER_UPDATE_HTML_PAGE_ERROR:
            return {
                ...state,
                ...initialEditHtmlPageState
            }
        case USER_ADD_HTML_PAGE:
            return {
                ...state,
                isCreatingHtmlPage: true,
                createHtmlPageInvalid: false,
                invalidCreateHtmlPageMessage: null,
                createHtmlPageSuccessful: false
            }
        case SERVER_ADD_HTML_PAGE_INVALID:
            return {
                ...state,
                isCreatingHtmlPage: false,
                createHtmlPageInvalid: true,
                invalidCreateHtmlPageMessage: action.message,
                createHtmlPageSuccessful: false
            }
        case SERVER_ADD_HTML_PAGE_SUCCESS:
            return {
                ...state,
                htmlPages: [],
                isCreatingHtmlPage: false,
                createHtmlPageInvalid: false,
                invalidCreateHtmlPageMessage: null,
                createHtmlPageSuccessful: true,
                addRedirectRequired: true
            }
        case ADD_HTML_PAGE_TIMER_ENDS:
        case SERVER_ADD_HTML_PAGE_ERROR:
            return {
                ...state,
                ...initialCreateHtmlPageState
            }
        case USER_UPDATE_HTML_PAGE_PUBLISHED:
            return {
                ...state,
                isUpdatingHtmlPagePublish: true
            }
        case SERVER_UPDATE_HTML_PAGE_PUBLISHED_SUCCESS:
            return {
                ...state,
                htmlPages: [],
                isUpdatingHtmlPagePublish: false,
                currentHtmlPage: {
                    ...state.currentHtmlPage,
                    isPublished: action.isPublished
                }  
            } 
        case SERVER_UPDATE_HTML_PAGE_PUBLISHED_ERROR:
            return {
                ...state,
                ...initialUpdateHtmlPagePublishState
            }
        case USER_DELETE_HTML_PAGE:
            return {
                ...state,
                isDeletingHtmlPage: true,
                deleteHtmlPageSuccessful: false
            }
        case SERVER_DELETE_HTML_PAGE_SUCCESS:
            return {
                ...state,
                htmlPages: [],
                isDeletingHtmlPage: false,
                deleteHtmlPageSuccessful: true,
                deleteRedirectRequired: true
            }
        case DELETE_HTML_PAGE_TIMER_ENDS:
        case SERVER_DELETE_HTML_PAGE_ERROR:
            return {
                ...state,
                ...initialDeleteHtmlPageState
            }
        case USER_UPDATE_HTML_PAGE_TITLE: 
            return {
                ...state,
                currentHtmlPage: {
                    ...state.currentHtmlPage,
                    title: action.pageTitle 
                } 
            }
        case USER_UPDATE_HTML_PAGE_META_DESCRIPTION: 
            return {
                ...state,
                currentHtmlPage: {
                    ...state.currentHtmlPage,
                    metaDescription: action.pageMetaDescription 
                } 
            }
        case USER_UPDATE_HTML_PAGE_META_KEYWORDS: 
            return {
                ...state,
                currentHtmlPage: {
                    ...state.currentHtmlPage,
                    metaKeywords: action.pageMetaKeywords 
                } 
            }
        case USER_UPDATE_HTML_PAGE_CONTENT: 
            return {
                ...state,
                currentHtmlPage: {
                    ...state.currentHtmlPage,
                    content: action.pageContent 
                } 
            }
        case USER_LOG_OUT:
        case PENDING_LOGOUT_TIMER_EXPIRES:
            return initialState
        default:
            return state
    }
}