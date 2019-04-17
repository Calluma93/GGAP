import{
    USER_GET_ARTICLES,
    SERVER_GET_ARTICLES_SUCCESS,   
    SERVER_GET_ARTICLES_ERROR,
    USER_GET_ARTICLE,
    SERVER_GET_ARTICLE_SUCCESS,
    SERVER_GET_ARTICLE_ERROR,
    USER_UPDATE_ARTICLE,
    SERVER_UPDATE_ARTICLE_SUCCESS,
    SERVER_UPDATE_ARTICLE_INVALID,
    SERVER_UPDATE_ARTICLE_ERROR,
    UPDATE_ARTICLE_TIMER_ENDS,
    USER_UPDATE_PUBLISH_DATE,
    USER_UPDATE_TITLE,
    USER_UPDATE_META_DESCRIPTION,
    USER_UPDATE_CONTENT,
    USER_UPDATE_ARTICLE_IS_DISABLED,
    SERVER_UPDATE_ARTICLE_IS_DISABLED_INVALID,
    SERVER_UPDATE_ARTICLE_IS_DISABLED_SUCCESS,
    SERVER_UPDATE_ARTICLE_IS_DISABLED_ERROR,
    UPDATE_ARTICLE_IS_DISABLED_TIMER_ENDS,
    USER_ADD_ARTICLE,
    SERVER_ADD_ARTICLE_INVALID,
    SERVER_ADD_ARTICLE_SUCCESS,
    SERVER_ADD_ARTICLE_ERROR,
    ADD_ARTICLE_TIMER_ENDS,
    USER_UPDATE_ARTICLE_IMAGE,
    SERVER_UPDATE_ARTICLE_IMAGE_INVALID,
    SERVER_UPDATE_ARTICLE_IMAGE_SUCCESS,
    SERVER_UPDATE_ARTICLE_IMAGE_ERROR,
    UPDATE_ARTICLE_IMAGE_TIMER_ENDS,
    USER_UPDATE_ARTICLE_BODY_IMAGE,
    SERVER_UPDATE_ARTICLE_BODY_IMAGE_INVALID,
    SERVER_UPDATE_ARTICLE_BODY_IMAGE_SUCCESS,
    SERVER_UPDATE_ARTICLE_BODY_IMAGE_ERROR,
    SERVER_UPDATE_ARTICLE_BODY_IMAGE_INVALID_CALLBACK_COMPLETE,
    SERVER_UPDATE_ARTICLE_BODY_IMAGE_SUCCESS_CALLBACK_COMPLETE,
    USER_GET_CONTENT_PARENTS,
    SERVER_GET_CONTENT_PARENTS_SUCCESS,
    SERVER_GET_CONTENT_PARENTS_ERROR,
    USER_ADD_CONTENT_PARENT_TO_ARTICLE,
    USER_DELETE_CONTENT_PARENT_FROM_ARTICLE,
    USER_OPENS_CREATE_ARTICLE_PAGE,
    USER_GET_CONTENT_PARENT_TYPES,
    SERVER_GET_CONTENT_PARENT_TYPES_SUCCESS,
    SERVER_GET_CONTENT_PARENT_TYPES_ERROR
} from '../actionTypes/newsActionTypes';

// Get Articles

export function userGetArticles(userSettings) {
    return {
        type: USER_GET_ARTICLES,
        userSettings
    };
}

export function serverGetArticlesSuccess(articles, userSettings) {
    return {
        type: SERVER_GET_ARTICLES_SUCCESS,
        articles,
        userSettings
    } 
}

export function serverGetArticlesError() {
    return {
        type: SERVER_GET_ARTICLES_ERROR
    } 
}


// Get Article

export function userGetArticle(articleId) {
    return {
        type: USER_GET_ARTICLE,
        articleId
    } 
}

export function serverGetArticleSuccess(article) {
    return {
        type: SERVER_GET_ARTICLE_SUCCESS,
        article
    } 
}

export function serverGetArticleError() {
    return {
        type: SERVER_GET_ARTICLE_ERROR
    } 
}

// Update Article

export function userUpdateArticle(articleId, publishDate, title, metaDescription, content, contentParents) {
    return {
        type: USER_UPDATE_ARTICLE,
        articleId, 
        publishDate, 
        title, 
        metaDescription, 
        content,
        contentParents
    } 
}

export function serverUpdateArticleSuccess(article, actionToDoAfterTimeout) {
    return {
        type: SERVER_UPDATE_ARTICLE_SUCCESS,
        article,
        actionToDoAfterTimeout
    } 
}

export function serverUpdateArticleInvalid(message, actionToDoAfterTimeout) {
    return {
        type: SERVER_UPDATE_ARTICLE_INVALID,
        message,
        actionToDoAfterTimeout
    } 
}

export function serverUpdateArticleError() {
    return {
        type: SERVER_UPDATE_ARTICLE_ERROR
    } 
}

export function updateArticleTimerEnds() {
    return {
        type: UPDATE_ARTICLE_TIMER_ENDS
    } 
}

// User Get Content Parents
export function userGetContentParents(searchQuery) {
    return {
        type: USER_GET_CONTENT_PARENTS,
        searchQuery
    } 
}

export function userGetContentParentsSuccess(contentParentSearchResults) {
    return {
        type: SERVER_GET_CONTENT_PARENTS_SUCCESS,
        contentParentSearchResults
    } 
}

export function userGetContentParentsError(message) {
    return {
        type: SERVER_GET_CONTENT_PARENTS_ERROR,
        message
    } 
}

// User Get Content Parents Types
export function userGetContentParentTypes() {
    return {
        type: USER_GET_CONTENT_PARENT_TYPES
    } 
}

export function userGetContentParentTypesSuccess(contentParentTypes) {
    return {
        type: SERVER_GET_CONTENT_PARENT_TYPES_SUCCESS,
        contentParentTypes
    } 
}

export function userGetContentParentTypesError(message) {
    return {
        type: SERVER_GET_CONTENT_PARENT_TYPES_ERROR,
        message
    } 
}

// Update Article Is Disabled
export function userUpdateArticleIsDisabled(articleId, isDisabled) {
    return {
        type: USER_UPDATE_ARTICLE_IS_DISABLED,
        articleId, 
        isDisabled
    }
}

export function serverUpdateArticleIsDisabledInvalid(message, actionToDoAfterTimeout) {
    return {
        type: SERVER_UPDATE_ARTICLE_IS_DISABLED_INVALID,
        message,
        actionToDoAfterTimeout
    } 
}

export function serverUpdateArticleIsDisabledSuccess(article, actionToDoAfterTimeout) {
    return {
        type: SERVER_UPDATE_ARTICLE_IS_DISABLED_SUCCESS,
        article, 
        actionToDoAfterTimeout
    } 
}

export function serverUpdateArticleIsDisabledError() {
    return {
        type: SERVER_UPDATE_ARTICLE_IS_DISABLED_ERROR
    } 
}

export function updateArticleIsDisabledTimerEnds() {
    return {
        type: UPDATE_ARTICLE_IS_DISABLED_TIMER_ENDS
    } 
}

// Add Article

export function userAddArticle(publishDate, title, metaDescription, content, contentParents) {
    return {
        type: USER_ADD_ARTICLE,
        publishDate, 
        title, 
        metaDescription, 
        content,
        contentParents
    }
}

export function serverAddArticleSuccess(articleId, actionToDoAfterTimeout) {
    return {
        type: SERVER_ADD_ARTICLE_SUCCESS,
        articleId,
        actionToDoAfterTimeout
    } 
}

export function serverAddArticleInvalid(message, actionToDoAfterTimeout) {
    return {
        type: SERVER_ADD_ARTICLE_INVALID,
        message,
        actionToDoAfterTimeout
    } 
}

export function serverAddArticleError() {
    return {
        type: SERVER_ADD_ARTICLE_ERROR
    } 
}

export function addArticleTimerEnds() {
    return {
        type: ADD_ARTICLE_TIMER_ENDS
    } 
}


// Update Article

export function userUpdateArticleImage(articleId, imageName, imageContent) {
    return {
        type: USER_UPDATE_ARTICLE_IMAGE, 
        articleId, 
        imageName, 
        imageContent
    };
}

export function serverUpdateArticleImageSuccess(article, actionToDoAfterTimeout) {
    return {
        type: SERVER_UPDATE_ARTICLE_IMAGE_SUCCESS,
        article,
        actionToDoAfterTimeout
    } 
}

export function serverUpdateArticleImageInvalid(message, actionToDoAfterTimeout) {
    return {
        type: SERVER_UPDATE_ARTICLE_IMAGE_INVALID,
        message,
        actionToDoAfterTimeout
    } 
}

export function serverUpdateArticleImageError() {
    return {
        type: SERVER_UPDATE_ARTICLE_IMAGE_ERROR
    } 
}

export function updateArticleImageTimerEnds() {
    return {
        type: UPDATE_ARTICLE_IMAGE_TIMER_ENDS
    } 
}


// Update Article Body Image

export function userUpdateArticleBodyImage(imageName, imageContent, failure, success) {

    return {
        type: USER_UPDATE_ARTICLE_BODY_IMAGE,
        imageName, 
        imageContent,
        failure, 
        success
    };
}

export function serverUpdateArticleBodyImageSuccess(lastUploadedImageUrl, imageName, successCallback) {
    return {
        type: SERVER_UPDATE_ARTICLE_BODY_IMAGE_SUCCESS,
        lastUploadedImageUrl, 
        imageName,
        successCallback
    } 
}

export function serverUpdateArticleBodyImageInvalid(message, failureCallback) {
    return {
        type: SERVER_UPDATE_ARTICLE_BODY_IMAGE_INVALID,
        message,
        failureCallback
    } 
}

export function serverUpdateArticleBodyImageInvalidCallbackComplete() {
    return {
        type: SERVER_UPDATE_ARTICLE_BODY_IMAGE_INVALID_CALLBACK_COMPLETE
    };
}


export function serverUpdateArticleBodyImageSuccessCallbackComplete() {
    return {
        type: SERVER_UPDATE_ARTICLE_BODY_IMAGE_SUCCESS_CALLBACK_COMPLETE
    };
}

export function serverUpdateArticleBodyImageError() {
    return {
        type: SERVER_UPDATE_ARTICLE_BODY_IMAGE_ERROR
    } 
}

export function associateContentParent(contentParent) {
    return {
        type: USER_ADD_CONTENT_PARENT_TO_ARTICLE,
        contentParent
    } 
}

export function removeContentParent(index) {
    return {
        type: USER_DELETE_CONTENT_PARENT_FROM_ARTICLE,
        index
    } 
}

export function userOpensCreateArticlePage() {
    return {
        type: USER_OPENS_CREATE_ARTICLE_PAGE
    }
}        
// Misc.

export function userUpdatePublishDate(publishDate) {
    return {
        type: USER_UPDATE_PUBLISH_DATE,
        publishDate
    } 
}

export function userUpdateTitle(title) {
    return {
        type: USER_UPDATE_TITLE,
        title
    } 
}

export function userUpdateMetaDescription(metaDescription) {
    return {
        type: USER_UPDATE_META_DESCRIPTION,
        metaDescription
    } 
}

export function userUpdateContent(content) {
    return {
        type: USER_UPDATE_CONTENT,
        content
    } 
}