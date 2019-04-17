import{
    USER_GET_HTML_PAGES,
    SERVER_GET_HTML_PAGES_SUCCESS,   
    SERVER_GET_HTML_PAGES_ERROR,
    USER_GET_HTML_PAGE,
    SERVER_GET_HTML_PAGE_SUCCESS,
    SERVER_GET_HTML_PAGE_ERROR,
    USER_UPDATE_HTML_PAGE_TITLE,
    USER_UPDATE_HTML_PAGE_META_DESCRIPTION,
    USER_UPDATE_HTML_PAGE_META_KEYWORDS,
    USER_UPDATE_HTML_PAGE_CONTENT,
    UPDATE_HTML_PAGE_TIMER_ENDS,
    USER_UPDATE_HTML_PAGE,
    SERVER_UPDATE_HTML_PAGE_INVALID,
    SERVER_UPDATE_HTML_PAGE_SUCCESS,
    SERVER_UPDATE_HTML_PAGE_ERROR,
    USER_ADD_HTML_PAGE,
    SERVER_ADD_HTML_PAGE_INVALID,
    SERVER_ADD_HTML_PAGE_SUCCESS,
    SERVER_ADD_HTML_PAGE_ERROR,
    ADD_HTML_PAGE_TIMER_ENDS,
    USER_GET_HTML_PAGE_TYPES,
    SERVER_GET_HTML_PAGE_TYPES_SUCCESS,
    SERVER_GET_HTML_PAGE_TYPES_ERROR,
    USER_UPDATE_HTML_PAGE_PUBLISHED,
    SERVER_UPDATE_HTML_PAGE_PUBLISHED_SUCCESS,
    SERVER_UPDATE_HTML_PAGE_PUBLISHED_ERROR,
    USER_DELETE_HTML_PAGE,
    SERVER_DELETE_HTML_PAGE_SUCCESS,
    SERVER_DELETE_HTML_PAGE_ERROR,
    DELETE_HTML_PAGE_TIMER_ENDS
} from '../actionTypes/htmlPageActionTypes';


// Get HTML Pages

export function userGetHtmlPages(){
    return{
        type: USER_GET_HTML_PAGES
    }
}

export function serverGetHtmlPagesSuccess(htmlPages){
    return{
        type: SERVER_GET_HTML_PAGES_SUCCESS,
        htmlPages
    } 
}

export function serverGetHtmlPagesError(){
    return{
        type: SERVER_GET_HTML_PAGES_ERROR
    } 
}


// Get HTML Page

export function userGetHtmlPage(pageId){
    return{
        type: USER_GET_HTML_PAGE,
        pageId
    }
}

export function serverGetHtmlPageSuccess(htmlPage){
    return{
        type: SERVER_GET_HTML_PAGE_SUCCESS,
        htmlPage
    } 
}

export function serverGetHtmlPageError(){
    return{
        type: SERVER_GET_HTML_PAGE_ERROR
    } 
}


// User Update HTML Page

export function userUpdateHtmlPage(pageId, title, metaDescription, metaKeywords, content){
    return{
        type: USER_UPDATE_HTML_PAGE,
        pageId,
        title,
        metaDescription,
        metaKeywords,
        content
    }
}

export function serverUpdateHtmlPageInvalid(message, actionToDoAfterTimeout){
    return{
        type: SERVER_UPDATE_HTML_PAGE_INVALID,
        message,
        actionToDoAfterTimeout
    } 
}

export function serverUpdateHtmlPageSuccess(page, actionToDoAfterTimeout) {
    return{
        type: SERVER_UPDATE_HTML_PAGE_SUCCESS,
        page, 
        actionToDoAfterTimeout
    } 
}

export function serverUpdateHtmlPageError() {
    return{
        type: SERVER_UPDATE_HTML_PAGE_ERROR
    } 
}

export function updateHtmlPageTimerEnds() {
    return{
        type: UPDATE_HTML_PAGE_TIMER_ENDS
    } 
}


// User Add HTML page

export function userAddHtmlPage(name, pageType, title, metaDescription, metaKeywords, content){
    return{
        type: USER_ADD_HTML_PAGE,
        name,
        pageType,
        title,
        metaDescription,
        metaKeywords,
        content
    }
}

export function serverAddHtmlPageInvalid(message, actionToDoAfterTimeout){
    return{
        type: SERVER_ADD_HTML_PAGE_INVALID,
        message,
        actionToDoAfterTimeout
    } 
}

export function serverAddHtmlPageSuccess(name, pageType, title, metaDescription, metaKeywords, content, actionToDoAfterTimeout) {
    return {
        type: SERVER_ADD_HTML_PAGE_SUCCESS,
        name,
        pageType,
        title,
        metaDescription,
        metaKeywords,
        content,
        actionToDoAfterTimeout
    } 
}

export function serverAddHtmlPageError() {
    return{
        type: SERVER_ADD_HTML_PAGE_ERROR
    } 
}

export function addHtmlPageTimerEnds() {
    return{
        type: ADD_HTML_PAGE_TIMER_ENDS
    } 
}


// Get HTML Page Types

export function userGetHtmlPageTypes(){
    return{
        type: USER_GET_HTML_PAGE_TYPES
    }
}

export function serverGetHtmlPageTypesSuccess(pageTypes){
    return {
        type: SERVER_GET_HTML_PAGE_TYPES_SUCCESS,
        pageTypes
    }
}

export function serverGetHtmlPageTypesError(){
    return {
        type: SERVER_GET_HTML_PAGE_TYPES_ERROR
    }
}


// Update HTML Page Published

export function userUpdateHtmlPagePublished(pageId, isPublished){
    return{
        type: USER_UPDATE_HTML_PAGE_PUBLISHED,
        pageId, 
        isPublished
    }
}

export function serverUpdateHtmlPagePublishedSuccess(pageId, isPublished) {
    return{
        type: SERVER_UPDATE_HTML_PAGE_PUBLISHED_SUCCESS,
        pageId,
        isPublished
    } 
}

export function serverUpdateHtmlPagePublishedError() {
    return{
        type: SERVER_UPDATE_HTML_PAGE_PUBLISHED_ERROR
    } 
}


// User Delete HTML Page

export function userDeleteHtmlPage(pageId){
    return{
        type: USER_DELETE_HTML_PAGE,
        pageId
    }
}

export function serverDeleteHtmlPageSuccess(pageId, actionToDoAfterTimeout) {
    return{
        type: SERVER_DELETE_HTML_PAGE_SUCCESS,
        pageId,
        actionToDoAfterTimeout
    } 
}

export function serverDeleteHtmlPageError() {
    return{
        type: SERVER_DELETE_HTML_PAGE_ERROR
    } 
}

export function deleteHtmlPageTimerEnds(){
    return{
        type: DELETE_HTML_PAGE_TIMER_ENDS
    }
}


// Misc.

export function userUpdateHtmlPageTitle(pageTitle){
    return{
        type: USER_UPDATE_HTML_PAGE_TITLE,
        pageTitle
    }
}

export function userUpdateHtmlPageMetaDescription(pageMetaDescription){
    return{
        type: USER_UPDATE_HTML_PAGE_META_DESCRIPTION,
        pageMetaDescription
    }
}

export function userUpdateHtmlPageMetaKeywords(pageMetaKeywords){
    return{
        type: USER_UPDATE_HTML_PAGE_META_KEYWORDS,
        pageMetaKeywords
    }
}

export function userUpdateHtmlPageContent(pageContent){
    return{
        type: USER_UPDATE_HTML_PAGE_CONTENT,
        pageContent
    }
}
